import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Checkbox } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { useNavigate } from "react-router";
import Approve1TransitionDetailCard from "../Approval/Approve1TrasitionDetailCard";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function createData(id, vender, name, currency, date) {
  return {
    id,
    vender,
    name,
    currency,
    date,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClickPdf = () => {
    navigate("/approvalTableDSM");
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row" size="small">
          <Checkbox {...label} />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {row.id}
          </IconButton>
        </TableCell>
        <TableCell align="center" size="small">
          {row.vender}
        </TableCell>
        <TableCell align="center" size="small">
          {row.name}
        </TableCell>
        <TableCell align="center" size="small">
          {row.currency}
        </TableCell>
        <TableCell align="center" size="small"></TableCell>
        <TableCell align="center" size="small"></TableCell>
        <TableCell align="center" size="small">
          {" "}
          {row.date}
        </TableCell>
        <TableCell align="center" size="small">
          <PictureAsPdfIcon
            sx={{ color: "red", cursor: "pointer" }}
            onClick={handleClickPdf}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Approve1TransitionDetailCard />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(90, 10073952, "Tushar Pateroleum", "INR", "28-09-2023"),
  createData(90, 10073952, "Tushar Pateroleum", "INR", "28-09-2023"),
  createData(90, 10073952, "Tushar Pateroleum", "INR", "28-09-2023"),
  createData(90, 10073952, "Tushar Pateroleum", "INR", "28-09-2023"),
];

export default function DelectionTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#2B2861",
              color: "#FFFFFF",
            }}
          >
            <TableCell style={{ color: "#FFFFFF" }}>Select All</TableCell>
            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Transition id
            </TableCell>
            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Vender
            </TableCell>
            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Beneficiary Name
            </TableCell>
            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Currency
            </TableCell>
            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Bank Initiation NO
            </TableCell>

            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Bank Initiation Name
            </TableCell>
            <TableCell style={{ color: "#FFFFFF" }} align="center">
              Payment Due Date
            </TableCell>
           

            <TableCell style={{ color: "#FFFFFF" }} align="center">
              DMS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
