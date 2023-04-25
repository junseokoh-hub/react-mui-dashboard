import { Dispatch, SetStateAction, useRef } from "react";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "../atoms/Button";
import { KanbanSectionsType, StatusType } from "../../types/kanban";

interface KanbanInputProps {
  setKanbanSections: Dispatch<SetStateAction<KanbanSectionsType>>;
  onChange: (e: SelectChangeEvent<string>) => void;
  value: string;
}

const KanbanInput = ({
  setKanbanSections,
  onChange,
  value,
}: KanbanInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const nextId = useRef(0);

  const submitInputClicker = () => {
    if (inputRef.current) {
      const newPost = {
        id: nextId.current.toString(),
        title: inputRef.current.value,
        status: value as StatusType,
      };

      setKanbanSections((prev) => ({
        ...prev,
        [value]: [...prev[value], newPost],
      }));
      nextId.current += 1;
      inputRef.current.value = "";
    }
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 1, alignItems: "center" }}>
      <Input
        type="text"
        inputRef={inputRef}
        sx={{ mr: 1 }}
        placeholder="Write..."
      />
      <FormControl sx={{ width: "10rem" }}>
        <InputLabel id="section-selector">Sections</InputLabel>
        <Select
          labelId="section-selector"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={onChange}
        >
          <MenuItem value={"requested"}>REQUESTED</MenuItem>
          <MenuItem value={"in progress"}>IN PROGRESS</MenuItem>
          <MenuItem value={"done"}>DONE</MenuItem>
        </Select>
      </FormControl>
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
    </Stack>
  );
};

export default KanbanInput;
