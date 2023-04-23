import Box from "@mui/material/Box";
import { PostType } from "../../types/kanban";

interface PostOverlayProps {
  post: PostType;
}

const SortablePost = ({ post }: PostOverlayProps) => {
  return <div style={{ color: "white" }}>{post.title}</div>;
};

export default SortablePost;
