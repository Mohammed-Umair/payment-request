import { Box, Typography } from "@mui/material";
import React from "react";

const SubHeader = () => (
  <Box
    sx={{
      backgroundColor: "#2E3B72",
      // color: "white"
      padding: "15px 0px",
    }}
  >
    <Typography variant="h6" color="gray">
      Welcome To
    </Typography>
    <Typography variant="h4" color="white">
      Direct FX Remittance Tracking
    </Typography>
  </Box>
);

export default SubHeader;
