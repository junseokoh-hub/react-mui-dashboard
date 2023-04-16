import MuiTableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface KeyType {
  id: number;
  full_name: string;
  email: string;
  gender: string;
  country: string;
  sub_date: string;
  birth_date: string;
}

interface TableBodyProps {
  customers: KeyType[];
  page: number;
  rowsPerPage: number;
}

const TableBody = ({ customers, page, rowsPerPage }: TableBodyProps) => {
  return (
    <MuiTableBody>
      {customers
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.id}</TableCell>
            <TableCell>{customer.full_name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.gender}</TableCell>
            <TableCell>{customer.country}</TableCell>
            <TableCell>{customer.sub_date}</TableCell>
            <TableCell>{customer.birth_date}</TableCell>
          </TableRow>
        ))}
    </MuiTableBody>
  );
};

export default TableBody;
