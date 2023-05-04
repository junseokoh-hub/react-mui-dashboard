import {
  DndContext,
  DragOverlay,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  defaultDropAnimation,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import KanbanInput from "./KanbanInput";
import { useCallback, useState } from "react";
import { extractSectionKey, initializeKanban } from "../../utils/board";
import { KanbanSectionsType } from "../../types/kanban";
import { getPostById } from "../../utils/post";
import SortablePost from "./SortablePost";
import KanbanPlate from "./KanbanPlate";
import { SelectChangeEvent } from "@mui/material";

const KanbanContainer = () => {
  const [section, setSection] = useState("requested");
  const [kanbanSections, setKanbanSections] = useState<KanbanSectionsType>(
    initializeKanban([]),
  );
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const pointerSensor = useSensor(PointerSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });

  const sensors = useSensors(pointerSensor, keyboardSensor);

  const handleDragStart = (e: DragStartEvent) => {
    const activeId = e.active.id as string;
    setActivePostId(activeId);
  };

  const handleDragOver = (e: DragOverEvent) => {
    const activeId = e.active.id as string;
    const overId = e.over?.id as string;
    const activeKey = extractSectionKey(kanbanSections, activeId);
    const overKey = extractSectionKey(kanbanSections, overId);

    if (!activeKey || !overKey || activeKey === overKey) {
      return;
    }

    setKanbanSections((prev) => {
      const activePosts = prev[activeKey];
      const overPosts = prev[overKey];
      const activeIndex = activePosts.findIndex((item) => item.id === activeId);
      const overIndex = overPosts.findIndex((item) => item.id !== overId);

      return {
        ...prev,
        [activeKey]: [
          ...prev[activeKey].filter((item) => item.id !== activeId),
        ],
        [overKey]: [
          ...prev[overKey].slice(0, overIndex),
          prev[activeKey][activeIndex],
          ...prev[overKey].slice(overIndex, prev[overKey].length),
        ],
      };
    });
  };
  const handleDragEnd = (e: DragEndEvent) => {
    const activeId = e.active.id as string;
    const overId = e.over?.id as string;
    const activeKey = extractSectionKey(kanbanSections, activeId);
    const overKey = extractSectionKey(kanbanSections, overId);

    if (!activeKey || !overKey || activeKey !== overKey) {
      return;
    }

    const activeIndex = kanbanSections[activeKey].findIndex(
      (post) => post.id === activeId,
    );
    const overIndex = kanbanSections[overKey].findIndex(
      (post) => post.id === overId,
    );

    if (activeIndex !== overIndex) {
      setKanbanSections((prev) => ({
        ...prev,
        [overKey]: arrayMove(prev[overKey], activeIndex, overIndex),
      }));
    }
    setActivePostId(null);
  };

  const activeKey = extractSectionKey(kanbanSections, activePostId as string);

  const post = activePostId
    ? getPostById(kanbanSections[activeKey as string], activePostId)
    : null;

  const changeSectionhandler = useCallback(
    (e: SelectChangeEvent<string>) => {
      setSection(e.target.value);
    },
    [section],
  );

  return (
    <Box sx={{ mt: { xs: 2, sm: 0 } }}>
      <KanbanInput
        setKanbanSections={setKanbanSections}
        value={section}
        onChange={changeSectionhandler}
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Grid container spacing={4} sx={{ mt: 1 }}>
          {Object.keys(kanbanSections).map((key) => (
            <Grid key={key} item xs={12} md={4}>
              <KanbanPlate id={key} title={key} posts={kanbanSections[key]} />
            </Grid>
          ))}
          <DragOverlay dropAnimation={{ ...defaultDropAnimation }}>
            {post ? <SortablePost post={post} /> : null}
          </DragOverlay>
        </Grid>
      </DndContext>
    </Box>
  );
};

export default KanbanContainer;
