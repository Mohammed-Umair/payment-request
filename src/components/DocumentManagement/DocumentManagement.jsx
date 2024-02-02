import { Box, Button, Grid, Typography, IconButton,AppBar,Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SubHeader2 from "../common/SubHeader/SubHeader2";
import Approve1TableCollapse from "../Approval/Approve1TableCollapse";
import Approve1TransitionDetailCard from "../Approval/Approve1TrasitionDetailCard.jsx";
import Approve1DailogBox from "../Approval/Approve1DailogBox";
import ApproveCard from "../Approval/ApproveCard";
import RejectCard from "../Approval/RejectCard.jsx";
import ApproveRejectCard from "../Approval/ApprovalRejectCard.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router";
import DocumentTable from "./DocumentTable.jsx";

const DocumentManagement = () => {
  const [showTableDetail, setShowTableDetail] = useState(false);
  const [showApproveBtn, setShowApproveBtn] = useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);
  const [ApproveStatus, SetApproveStatus] = useState(false);
  const [RejectStatus, SetRejectStatus] = useState(false);
  const [isLeftSiderOpen, setIsLeftSiderOpen] = useState(false);

  const [ApproveReject, setApproveReject] = useState(false);

  const navigate = useNavigate();

  const HandleApprove = () => {
    setOpenApprove(true);
  };

  const handleApprovalReject = () => {
    setApproveReject(true);
  };
  const handleBackBtn = () => {
    navigate(-1);
  };
  const handleToogleLeftSider = () => {
    setIsLeftSiderOpen((prevState) => !prevState);
  };

  const handleNavigateToHome = () => {
    navigate("/home");
  };
  useEffect(() => {
    setIsLeftSiderOpen(true);
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NavBar
          handleToogleLeftSider={handleToogleLeftSider}
          title="Document Management System"
        />
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
             {/* <Typography variant="h6" component="div">
              Back{" "}
            </Typography> */}
            <Typography variant="h6" component="div">

            Document Management System
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
              }}
            ></Box>
           

           
          </Toolbar>
        </AppBar>
        {/* <SubHeader2
          HandleApprove={HandleApprove}
          handleApprovalReject={handleApprovalReject}
          title=""
        /> */}
        <Box
          sx={{
            m: 3,
          }}
        >
          {/* <Approval1Table
            setShowTableDetail={setShowTableDetail}
            setShowApproveBtn={setShowApproveBtn}
            HandleApprove={HandleApprove}
          /> */}

          {/* <Approve1TableCollapse /> */}
          <DocumentTable />
        </Box>
        {showTableDetail && (
          <Box
            sx={{
              m: 3,
            }}
          >
            <Box
              sx={{
                m: 3,
              }}
            >
              <Approve1TransitionDetailCard />
            </Box>
            <Box
              sx={{
                m: 3,
              }}
            >
              <Approve1TransitionDetailCard />
            </Box>
          </Box>
        )}
        {showApproveBtn && (
          <Box
            sx={{
              m: 3,
            }}
          >
            <Box
              sx={{
                m: 3,
              }}
            >
              Reject
            </Box>
          </Box>
        )}

        <Approve1DailogBox
          openApprove={openApprove}
          setOpenApprove={setOpenApprove}
          SetApproveStatus={SetApproveStatus}
        />
        <ApproveCard
          ApproveStatus={ApproveStatus}
          SetApproveStatus={SetApproveStatus}
        />
        <RejectCard
          RejectStatus={RejectStatus}
          SetRejectStatus={SetRejectStatus}
        />

        <ApproveRejectCard
          ApproveReject={ApproveReject}
          setApproveReject={setApproveReject}
          SetRejectStatus={SetRejectStatus}
        />
      </Grid>
    </Grid>
  );
};

export default DocumentManagement;
