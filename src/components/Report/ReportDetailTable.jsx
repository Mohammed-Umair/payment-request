import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(title1, value1, title2, value2) {
  return { title1, value1, title2, value2 };
}
const rows = [
  createData("Transaction id", 91, "Transaction Date", "04-10-2023"),
  createData("Created On", "06-10-2023", "Net payable Amount", ""),
  createData("Created By", "MVerma", "Purpose Code", "S0001"),
  createData("Requistion Number", 10036, "Local Charges", ""),
  createData("Requistion Year", 2023, "GST Amount", ""),
  createData("Company Code", 9008, "Total Amount Currency", "174.00"),
  createData("Shoping Control No", 6656234, "Approval 1 Name", ""),
  createData("Vendor", 100342545, "Approval 1 Date", ""),
  createData(
    "Beneficiary Name",
    "Tushar Pateroleum Pvt,Ltd.com",
    "Approval 2 Remark",
    ""
  ),
  createData("Payment Code", 202, " Approval 2 On", ""),
  createData("Payment Due Date", "29-09-2023", " Approval 2 By", ""),
  createData("initating Party Name", "", " Data Send To Swift", ""),
  createData("Request Excution Date", "", "Data Send To Swift", ""),
  createData(
    "Debtor Org Name",
    "Reliance Retail Ltd",
    " Data Recived At Swift",
    ""
  ),
  createData("Debtor Name", "MVerma", "Data Recived At Swift on", ""),
  createData("Account Number", "", " PRV Delection Indicate", ""),
  createData("Charge Bearer", "DEBT", "Delected on", ""),
  createData("Created Account Currency", "INR", " Delected", ""),
  createData("Invoice Amount", " 174.00", "", ""),
  createData("Mis Charge", "1000.OO", "", ""),
];

export default function ReportDetailTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 590 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                size="small"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {row.title1}:
              </TableCell>
              <TableCell align="left" size="small">
                {row.value1}
              </TableCell>
              <TableCell align="left" size="small">
                {row.title2}
              </TableCell>
              <TableCell align="left" size="small">
                {row.value2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
