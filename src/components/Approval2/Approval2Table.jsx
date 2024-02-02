import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(
  id,
  vender,
  name,
  currency,
  date,
  AName1,
  ADate1,
  ARemark1,
  ARemark2
) {
  return {
    id,
    vender,
    name,
    currency,
    date,
    AName1,
    ADate1,
    ARemark1,
    ARemark2,
  };
}

const rows = [
  createData(
    90,
    10073952,
    "Tushar Pateroleum",
    "INR",
    "28-09-2023",
    "M YERMA",
    "04-10-2023"
  ),
  createData(
    90,
    10073952,
    "Tushar Pateroleum",
    "INR",
    "28-09-2023",
    "M YERMA",
    "04-10-2023"
  ),
  createData(
    90,
    10073952,
    "Tushar Pateroleum",
    "INR",
    "28-09-2023",
    "M YERMA",
    "04-10-2023"
  ),
  createData(
    90,
    10073952,
    "Tushar Pateroleum",
    "INR",
    "28-09-2023",
    "M YERMA",
    "04-10-2023"
  ),
];

export default function Approval2Table({
  setShowTableDetail,
  setShowApproveBtn,
}) {
  const handleOpenTableDetail = () => {
    setShowTableDetail(true);
    setShowApproveBtn(false);
  };
  const handleApproveBtn = () => {
    setShowApproveBtn(true);
    setShowTableDetail(false);
  };

  const navigate = useNavigate();

  const handleClickPdf = () => {
    navigate("/approvalTableDSM");
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#2B2861",
              color: "#FFFFFF",
            }}
          >
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
            >
              Select All
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Transition id
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Vender
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Beneficiary Name
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Currency
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Bank Initiation NO
            </TableCell>

            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Bank Initiation Name
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Payment Due Date
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Approval 1 Name
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Approval 1 Date
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Approval 1 Remark
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              Approval 2 Remark
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFFF", fontSize: "10px", fontWeight: "bold" }}
              align="center"
            >
              DMS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" size="small">
                <Checkbox {...label} onClick={handleApproveBtn} />
              </TableCell>
              <TableCell
                align="center"
                size="small"
                onClick={handleOpenTableDetail}
                sx={{
                  cursor: "pointer",
                }}
              >
                {row.id}
              </TableCell>
              <TableCell align="center" size="small">
                {row.vender}
              </TableCell>
              <TableCell
                align="center"
                size="small"
                sx={{
                  width: "180px",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="center" size="small">
                {row.currency}
              </TableCell>
              <TableCell align="center" size="small"></TableCell>
              <TableCell align="center" size="small"></TableCell>
              <TableCell
                align="center"
                size="small"
                sx={{
                  width: "100px",
                }}
              >
                {" "}
                {row.date}{" "}
              </TableCell>
              <TableCell
                align="center"
                size="small"
                sx={{
                  width: "100px",
                }}
              >
                {row.AName1}
              </TableCell>
              <TableCell
                align="center"
                size="small"
                sx={{
                  width: "100px",
                }}
              >
                {row.ADate1}
              </TableCell>
              <TableCell align="center" size="small"></TableCell>
              <TableCell align="center" size="small"></TableCell>
              <TableCell align="center" size="small">
                <PictureAsPdfIcon
                  sx={{ color: "red", cursor: "pointer" }}
                  onClick={handleClickPdf}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
