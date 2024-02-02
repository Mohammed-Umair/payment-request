import {
  Box,
  Grid,
  IconButton,
  Checkbox,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import SaveDataCard from "./SaveDataCard";
import Approve1TransitionDetailCard from "../Approval/Approve1TrasitionDetailCard";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PurchaseDispaly = () => {
  const [ApproveStatus, SetApproveStatus] = useState(false);
  const navigate = useNavigate();

  const handleDataSaveBtn = () => {
    SetApproveStatus(true);
  };
  const handleNavigateToHome = () => {
    navigate(-1);
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NavBar />
      </Grid>
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
            <KeyboardBackspaceIcon onClick={handleNavigateToHome} />
          </IconButton>
          <Typography variant="h6" component="div">
            Payment request voucher Details
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
            }}
          ></Box>

          <Checkbox {...label} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 3,
            }}
          >
            Select All
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 3,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "whitesmoke",
            }}
            onClick={handleDataSaveBtn}
          >
            <SaveIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          mt: 3,
          width:"100vw"
        }}
      >
        <Box
          sx={{
            m: 3,
          }}
        >
          <Approve1TransitionDetailCard  remark="true"/>
        </Box>
        <Box
          sx={{
            m: 3,
          }}
        >
          <Approve1TransitionDetailCard remark="true"/>
        </Box>
      </Box>
      <SaveDataCard
        ApproveStatus={ApproveStatus}
        SetApproveStatus={SetApproveStatus}
      />
    </Grid>
  );
};

export default PurchaseDispaly;
