import { Box, Button, Grid, Typography,IconButton, 
  AppBar,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

import Approve1TransitionDetailCard from "../Approval/Approve1TrasitionDetailCard.jsx";
import Approval1Table from "../Approval/Approval1Table.jsx";
import Approve1DailogBox from "../Approval/Approve1DailogBox.jsx";
import ApproveCard from "../Approval/ApproveCard.jsx";
import RejectCard from "../Approval/RejectCard.jsx.jsx";
import DeleteCard from "./DeleteCard.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router";
import DelectionTable from "./DelectionTable.jsx";

const DelectionDisplay = () => {

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
    navigate("/home");
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
            Payment request voucher Delection

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
          }}
        >
          <Typography
            sx={{ ml: "20px", fontWeight: "bold" }}
            variant="h5"
            align="left"
          >
           {" "}
          </Typography>
        </Box> */}
        {/* <SubHeader2
          HandleApprove={HandleApprove}
          handleApprovalReject={handleApprovalReject}
          title="Payment request Voucher Approval 1"
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

          <DelectionTable    setShowTableDetail={setShowTableDetail}
            setShowApproveBtn={setShowApproveBtn}
            HandleApprove={HandleApprove}/>

          {/* <Approve1TableCollapse /> */}
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
              <Button
                variant="contained"
                color="error"
                onClick={handleDeletePopUP}
              >
                Delete
              </Button>
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
        <DeleteCard
          setDeleteStatus={setDeleteStatus}
          deleteStatus={deleteStatus}
         
        />
      </Grid>
    </Grid>
  );
};

export default DelectionDisplay;
