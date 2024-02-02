import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
  Toolbar,
  AppBar
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

import Approve1TransitionDetailCard from "../Approval/Approve1TrasitionDetailCard.jsx";
import Approval1Table from "../Approval/Approval1Table.jsx";
import Approve1DailogBox from "../Approval/Approve1DailogBox.jsx";
import ApproveCard from "../Approval/ApproveCard.jsx";
import RejectCard from "../Approval/RejectCard.jsx.jsx";
import DeleteCard from "../Delection/DeleteCard.jsx";
import SearchIcon from "@mui/icons-material/Search";
import ReportDisplayTable from "./ReportDisplayTable.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router";

const ReportDisplay = () => {
const navigate= useNavigate()

  const [showTableDetail, setShowTableDetail] = useState(false);
  const [showApproveBtn, setShowApproveBtn] = useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);
  const [ApproveStatus, SetApproveStatus] = useState(false);
  const [RejectStatus, SetRejectStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const [isLeftSiderOpen, setIsLeftSiderOpen] = useState(false);

  const [ApproveReject, setApproveReject] = useState(false);

  const HandleApprove = () => {
    setOpenApprove(true);
  };

  const handleApprovalReject = () => {
    setApproveReject(true);
  };

  const handleDeletePopUP = () => {
    setDeleteStatus(true);
  };

  const handleToogleLeftSider = () => {
    setIsLeftSiderOpen((prevState) => !prevState);
  };

  const handleBackBtn = () => {
    navigate(-1)
  };

  useEffect(() => {
    setIsLeftSiderOpen(true);
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NavBar handleToogleLeftSider={handleToogleLeftSider} />
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
              sx={{
                mr: 1,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "whitesmoke",
              }}
              onClick={handleBackBtn}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
            <Typography variant="h6" component="div">
            Report Of Payment request voucher details   
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
              }}
            ></Box>
           

            {/* <Typography variant="h6" component="div">
              Back{" "}
            </Typography> */}
          </Toolbar>
        </AppBar>

        {/* <Box
          sx={{
            mt: 1,
            ml: 2,
            mr: 2,
            backgroundColor: "lightblue",
            p: 2,
          }}
        >
          <Typography
            sx={{ ml: "20px", fontWeight: "bold" }}
            variant="h5"
            align="left"
          >
            Report Of Payment request voucher details
          </Typography>

        </Box> */}
         

        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "start",
            ml: 2,
          }}
        >
          <TextField
            label=""
            placeholder="Search Here..."
            id="outlined-start-adornment"
            sx={{ m: 1, width: "45ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

      </Grid>
        <Box
          sx={{
            m: 1,
          }}
        >
          <ReportDisplayTable />
        </Box>
    </Grid>
  );
};

export default ReportDisplay;
