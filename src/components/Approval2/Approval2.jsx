import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

import Approve1TransitionDetailCard from "../Approval/Approve1TrasitionDetailCard";
import Approve1DailogBox from "../Approval/Approve1DailogBox";
import ApproveCard from "../Approval/ApproveCard";
import ApproveRejectCard from "../Approval/ApprovalRejectCard";
import Approval2Table from "./Approval2Table";
import LeftSider from "../common/LeftSider/LeftSider";
import SubHeader2 from "../common/SubHeader/SubHeader2";
import RejectCard from "../Approval/RejectCard.jsx";
import Approve2TableCollapse from "./Approval2TableCollapse.jsx";

const Approval2 = () => {
  const [showTableDetail, setShowTableDetail] = useState(false);
  const [showApproveBtn, setShowApproveBtn] = useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);
  const [ApproveStatus, SetApproveStatus] = useState(false);

  const [RejectStatus, SetRejectStatus] = useState(false);

  const [ApproveReject, setApproveReject] = useState(false);

  const [isLeftSiderOpen, setIsLeftSiderOpen] = useState(false);

  // const handleOpenApprovePopUp = () => {
  //   setOpenApprove(true);
  // };

  const HandleApprove = () => {
    setOpenApprove(true);
  };

  const handleApprovalReject = () => {
    setApproveReject(true);
  };
  const handleToogleLeftSider=()=>{
    setIsLeftSiderOpen((prevState) => !prevState);
  }
  useEffect(() => {
    setIsLeftSiderOpen(true);
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
          <NavBar handleToogleLeftSider={handleToogleLeftSider}/>
        </Grid>
        {/* {isLeftSiderOpen && ( // Render the LeftSider if isLeftSiderOpen is true
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}>
            <LeftSider />
          </Grid>
        )} */}

{/* md={isLeftSiderOpen ? 11.5 : 12} 
      lg={isLeftSiderOpen ? 11.5 : 12} */}
      <Grid item xs={12} sm={12} 
      md={12} 
      lg={12}
      >
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
            Payment request voucher Approval 2{" "}
          </Typography>
        </Box> */}
        <SubHeader2
          HandleApprove={HandleApprove}
          handleApprovalReject={handleApprovalReject}
          title="Payment request Voucher Approval 2"
        />

        <Box
          sx={{
        p:4

          }}
        >
          <Approve2TableCollapse/>
          {/* <Approval2Table
            setShowTableDetail={setShowTableDetail}
            setShowApproveBtn={setShowApproveBtn}
          /> */}
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

export default Approval2;
