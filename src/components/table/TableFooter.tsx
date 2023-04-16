import type { Dispatch, SetStateAction } from "react";
import MuiTableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

interface TableFooterProps {
  count: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  handleChangeRowsPerPage: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  rowsPerPage: number;
}

const TableFooter = ({
  count,
  page,
  setPage,
  handleChangeRowsPerPage,
  rowsPerPage,
}: TableFooterProps) => {
  return (
    <MuiTableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          count={count}
          page={page}
          onPageChange={(_, newValue) => setPage(newValue)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableRow>
    </MuiTableFooter>
  );
};

export default TableFooter;
