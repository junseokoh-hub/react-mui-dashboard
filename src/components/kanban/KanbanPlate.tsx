import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Box from "@mui/material/Box";
import Text from "../atoms/Text";
import SortableItem from "./SortableItem";
import SortablePost from "./SortablePost";
import { PostType } from "../../types/kanban";

interface KanbanPlateProps {
  id: string;
  title: string;
  posts: PostType[];
}

const KanbanPlate = ({ id, title, posts }: KanbanPlateProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  const colorPicker = () => {
    switch (title) {
      case "requested":
        return "error.main";
      case "in progress":
        return "primary.main";
      case "done":
        return "success.main";
      default:
        return "#000";
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.3)",
      }}
    >
      <Text variant="h6" sx={{ mb: 2, fontWeight: 600, color: colorPicker() }}>
        {title.toUpperCase()}
      </Text>
      <SortableContext
        id={id}
        items={posts}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} style={{ minHeight: "200px", margin: "0 10px" }}>
          {posts.map((post) => (
            <Box key={post.id} sx={{ mb: 2 }}>
              <SortableItem id={post.id}>
                <SortablePost post={post} />
              </SortableItem>
            </Box>
          ))}
        </div>
      </SortableContext>
    </Box>
  );
};

export default KanbanPlate;
