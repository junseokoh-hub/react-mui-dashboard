export type StatusType = "requested" | "in progress" | "done";

export type PostType = {
  id: string;
  title: string;
  status: StatusType;
};

export type KanbanSectionsType = {
  [key: string]: PostType[];
};
