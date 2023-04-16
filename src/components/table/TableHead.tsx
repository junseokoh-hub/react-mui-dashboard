import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface TableHeadProps {
  keys: string[];
}

const TableHead = ({ keys }: TableHeadProps) => {
  return (
    <MuiTableHead sx={{ bgcolor: "primary.main" }}>
      <TableRow>
        <TableCell></TableCell>
        {keys.map((key) => (
          <TableCell
            key={key}
            align="left"
            sx={{ color: "#fff", fontWeight: 500 }}
          >
            {key}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
