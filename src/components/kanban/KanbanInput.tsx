import { Dispatch, SetStateAction, useRef } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "../atoms/Button";
import { KanbanSectionsType, StatusType } from "../../types/kanban";

interface KanbanInputProps {
  setKanbanSections: Dispatch<SetStateAction<KanbanSectionsType>>;
}

const KanbanInput = ({ setKanbanSections }: KanbanInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const nextId = useRef(0);

  const submitInputClicker = () => {
    if (inputRef.current) {
      const newPost = {
        id: nextId.current.toString(),
        title: inputRef.current.value,
        status: "requested" as StatusType,
      };

      setKanbanSections((prev) => ({
        ...prev,
        requested: [...prev["requested"], newPost],
      }));
      nextId.current += 1;
      inputRef.current.value = "";
    }
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Input type="text" inputRef={inputRef} sx={{ mr: 1 }} />
      <Button
        id="kanban-button"
        name="kanban-button"
        type="submit"
        variant="contained"
        color="primary"
        onClick={submitInputClicker}
      >
        Submit
      </Button>
    </Box>
  );
};

export default KanbanInput;
