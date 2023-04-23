import { PostType, StatusType } from "../types/kanban";

export const getPostsByStatus = (posts: PostType[], status: StatusType) => {
  return posts.filter((post) => post.status === status);
};

export const getPostById = (posts: PostType[], id: string) => {
  return posts.find((post) => post.id === id);
};
