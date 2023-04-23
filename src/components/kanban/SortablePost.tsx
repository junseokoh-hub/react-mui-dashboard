import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PostType } from "../../types/kanban";

interface PostOverlayProps {
  post: PostType;
}

const SortablePost = ({ post }: PostOverlayProps) => {
  return (
    <Card>
      <CardContent>{post.title}</CardContent>
    </Card>
  );
};

export default SortablePost;
