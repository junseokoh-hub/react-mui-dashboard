import { useCallback } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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

  const colorPicker = useCallback(() => {
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
  }, []);

  return (
    <Paper>
      <Text
        variant="h6"
        sx={{
          p: 2,
          mb: 2,
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
          fontWeight: 600,
          color: "#fff",
          bgcolor: colorPicker(),
        }}
      >
        {title.toUpperCase()}
      </Text>
      <SortableContext
        id={id}
        items={posts}
        strategy={verticalListSortingStrategy}
      >
        <div
          ref={setNodeRef}
          style={{ minHeight: "200px", margin: "0 10px", padding: "0 0.5rem" }}
        >
          {posts.map((post) => (
            <Box key={post.id} sx={{ mb: 2 }}>
              <SortableItem id={post.id}>
                <SortablePost post={post} />
              </SortableItem>
            </Box>
          ))}
        </div>
      </SortableContext>
    </Paper>
  );
};

export default KanbanPlate;
