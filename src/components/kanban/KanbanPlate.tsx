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
  return (
    <Box>
      <Text variant="h6">{title}</Text>
      <SortableContext
        id={id}
        items={posts}
        strategy={verticalListSortingStrategy}
      >
        <div
          ref={setNodeRef}
          style={{ height: "200px", backgroundColor: "teal", margin: "0 10px" }}
        >
          {posts.map((post) => (
            <Box key={post.id}>
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
