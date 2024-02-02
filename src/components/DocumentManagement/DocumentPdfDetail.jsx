import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SaveIcon from "@mui/icons-material/Save";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router";
import { Checkbox } from "@mui/material";
import ApproveCard from "../Approval/ApproveCard";
import SaveCard from "./SaveCard";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(DocNo, file, href) {
  return { DocNo, file, href };
}

const rows = [
  createData(100739525344, "AWB.PDF", "https://www.orimi.com/pdf-test.pdf"),
  createData(
    100739523463,
    "User Document.PDF",
    "https://www.orimi.com/pdf-test.pdf"
  ),
  createData(
    100739523463,
    "Tushar Pateroleum",
    "https://www.orimi.com/pdf-test.pdf"
  ),
  createData(
    100739523463,
    "Tushar Pateroleum",
    "https://www.orimi.com/pdf-test.pdf"
  ),
  createData(
    100739523464,
    "Tushar Pateroleum",
    "https://www.orimi.com/pdf-test.pdf"
  ),
  createData(
    100739523463,
    "Tushar Pateroleum",
    "https://www.orimi.com/pdf-test.pdf"
  ),
  createData(
    100739523433,
    "Tushar Pateroleum",
    "https://www.orimi.com/pdf-test.pdf"
  ),
];
const DocumentPdfDetail = () => {
  const navigate = useNavigate();
  const [ApproveStatus, SetApproveStatus] = useState(false);

  const handleSaveBtn = () => {
    SetApproveStatus(true);
  };

  const openPdfInNewTab = (url) => {
    window.open(url, "_blank"); // This will open the URL in a new tab
  };

  const handleNavigateToTable=()=>{
   navigate(-1) 
  }

  return (
    <Grid contaoner>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NavBar title="Document Management System" />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "lightgray",
              color: "black",
              boxShadow: "none",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <KeyboardBackspaceIcon   
          onClick={handleNavigateToTable}
              
              />
            </IconButton>
            <Typography variant="h6" component="div">
              Document Management System
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
              }}
            ></Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 1,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "whitesmoke",
              }}
              onClick={handleSaveBtn}
            >
              <SaveIcon />
            </IconButton>

            {/* <Typography variant="h6" component="div">
              Back{" "}
            </Typography> */}
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}></Grid>

      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          // mt: 5,
          p: 4,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TableContainer
            component={Paper}
            sx={
              {
                // ml: 5,
              }
            }
          >
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#2B2861",
                    color: "#FFFFFF",
                  }}
                >
                  <TableCell style={{ color: "#FFFFFF" }}>Select All</TableCell>
                  <TableCell style={{ color: "#FFFFFF" }}>
                    Document Number
                  </TableCell>
                  <TableCell style={{ color: "#FFFFFF" }}>File Type</TableCell>

                  <TableCell style={{ color: "#FFFFFF" }}>File Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell size="small">
                      <Checkbox {...label} />
                    </TableCell>
                    <TableCell size="small">{row.DocNo}</TableCell>
                    <TableCell size="small"></TableCell>

                    <TableCell
                      size="small"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => openPdfInNewTab(row.href)}
                    >
                      <PictureAsPdfIcon sx={{ color: "red" }} />
                      <Typography
                        variant="body2"
                        sx={{
                          ml: 0.5,
                          color: "blue",
                          textDecoration: "underline",
                        }}
                      >
                        {row.file}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6}>
          {" "}
          image
        </Grid> */}
      </Grid>

      <SaveCard
        ApproveStatus={ApproveStatus}
        SetApproveStatus={SetApproveStatus}
      />
    </Grid>
  );
};

export default DocumentPdfDetail;
