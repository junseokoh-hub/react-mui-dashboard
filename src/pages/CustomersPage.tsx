import { useState, useCallback } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "../components/table/TableHead";
import TableBody from "../components/table/TableBody";
import TableFooter from "../components/table/TableFooter";
import CUSTOMER_DATA from "../customers.json";

const CustomersPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const keys = Object.keys(CUSTOMER_DATA[0]);

  const handleChangeRowsPerPage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(e.target.value, 10));
      setPage(0);
    },
    [],
  );

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: { xs: "50%", sm: "70%", md: "90%", lg: "100%" },
      }}
    >
      <Table>
        <TableHead keys={keys} />
        <TableBody
          customers={CUSTOMER_DATA}
          page={page}
          rowsPerPage={rowsPerPage}
        />
        <TableFooter
          count={CUSTOMER_DATA.length}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
};

export default CustomersPage;
