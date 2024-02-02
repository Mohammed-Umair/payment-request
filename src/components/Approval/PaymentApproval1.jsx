import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Approval1Table from "./Approval1Table";
import Approve1TrasitionDetailCard from "./Approve1TrasitionDetailCard";
import Approve1DailogBox from "./Approve1DailogBox";
import ApproveCard from "./ApproveCard";
import ApproveRejectCard from "./ApprovalRejectCard";
import LeftSider from "../common/LeftSider/LeftSider";
import SubHeader2 from "../common/SubHeader/SubHeader2";
import RejectCard from "./RejectCard.jsx";
import Approve1TableCollapse from "./Approve1TableCollapse.jsx";

const PaymentApproval1 = () => {
  const [showTableDetail, setShowTableDetail] = useState(false);
  const [showApproveBtn, setShowApproveBtn] = useState(false);
  const [openApprove, setOpenApprove] = React.useState(false);
  const [ApproveStatus, SetApproveStatus] = useState(false);
  const [RejectStatus, SetRejectStatus] = useState(false);
  const [isLeftSiderOpen, setIsLeftSiderOpen] = useState(false);

  const [ApproveReject, setApproveReject] = useState(false);

  const HandleApprove = () => {
    setOpenApprove(true);
  };

  const handleApprovalReject = () => {
    setApproveReject(true);
  };

  const handleToogleLeftSider = () => {
    setIsLeftSiderOpen((prevState) => !prevState);
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
            Payment request voucher Approval 1{" "}
          </Typography>
        </Box> */}
        <SubHeader2
          HandleApprove={HandleApprove}
          handleApprovalReject={handleApprovalReject}
          title="Payment request Voucher Approval 1"
        />
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

          <Approve1TableCollapse />
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
              <Approve1TrasitionDetailCard />
            </Box>
            <Box
              sx={{
                m: 3,
              }}
            >
              <Approve1TrasitionDetailCard />
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

export default PaymentApproval1;
