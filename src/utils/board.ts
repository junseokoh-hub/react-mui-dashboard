import { KANBAN_KEYS } from "../libs/kanban-keys";
import { KanbanSectionsType, PostType, StatusType } from "../types/kanban";
import { getPostsByStatus } from "./post";

export const initializeKanban = (posts: PostType[] = []) => {
  const kanbanSections: KanbanSectionsType = {};

  Object.keys(KANBAN_KEYS).forEach((key) => {
    kanbanSections[key] = getPostsByStatus(posts, key as StatusType);
  });

  return kanbanSections;
};

export const extractSectionKey = (
  kanbanSections: KanbanSectionsType,
  id: string,
) => {
  if (id in kanbanSections) {
    return id;
  }

  const key = Object.keys(kanbanSections).find((key) =>
    kanbanSections[key].find((item) => item.id === id),
  );

  return key;
};
