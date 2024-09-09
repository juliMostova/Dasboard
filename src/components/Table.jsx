import React from "react";
import "./TableStyle.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, id, status, payment) {
  return { name, id, status, payment };
}

const rows = [
  createData("Drama", 256876, "Pending", "Due"),
  createData("Comedy", 125783, "Active", "Paid"),
  createData("Horror", 123896, "Declined", "Canceled"),
];

export default function BasicTable() {
  const ChangeColor = (status) => {
    if (status === "Pending") {
      return {
        color: "blue",
      };
    } else if (status === "Active") {
      return {
        color: "green",
      };
    } else if (status === "Declined") {
      return {
        color: "red",
      };
    }
  };

  return (
    <TableContainer component={Paper} style={{ borderRadius: "15px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tickets</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Payment</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.payment}</TableCell>
              <TableCell
                align="left"
                className="status"
                style={ChangeColor(row.status)}
              >
                {row.status}
              </TableCell>
              <TableCell align="left">Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
