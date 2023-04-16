import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface TableHeadProps {
  keys: string[];
}

const TableHead = ({ keys }: TableHeadProps) => {
  return (
    <MuiTableHead>
      <TableRow>
        {keys.map((key) => (
          <TableCell key={key} align="left">
            {key}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
