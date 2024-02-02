import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  AppBar,
  Toolbar
} from "@mui/material";
import React from "react";
import NavBar from "../NavBar/NavBar";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CommonDatePicker from "../common/DatePicker/CommonDatePicker";
import { useNavigate } from "react-router";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const reportData = [
  { id: 1, title: "Transition Number" },
  { id: 2, title: "Requistion Number" },
  { id: 3, title: "Requistion Year" },
  { id: 4, title: "Company Code" },
  { id: 5, title: "Shoping Control No" },
  { id: 6, title: "Vendor " },
  { id: 7, title: "Payment Due Date" },
  { id: 8, title: "Pay Code" },
  { id: 9, title: "Purpose Code" },
];

const ReportPage = () => {
  const navigate = useNavigate();
  const handleNavigateToPaymentApproval = () => {
    navigate("/reportDisplay");
  };
  const handleBackBtn = () => {
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
        ><IconButton
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
            Report Of Payment request voucher Details
          </Typography>
        </Box> */}
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {reportData.map((report) => {
            return (
              <Box
                sx={{
                  marginTop: 1,
                  marginLeft: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={report.id}
              >
                <Typography
                  sx={{ ml: "20px", fontSize: "16px" }}
                  variant="body2"
                  align="left"
                >
                  {report.title}
                </Typography>

                {report.title === "Payment Due Date" ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CommonDatePicker /> TO
                    <CommonDatePicker />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      ml: "50px",
                    }}
                  >
                    <TextField
                      sx={{
                        backgroundColor: "white",
                        width: "360px",
                        border: "none",
                        borderRadius: "10px",
                        boxShadow: 1,
                        "&:hover": {
                          border: "none",
                        },
                      }}
                    />

                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "white",
                        ml: "10px",
                        borderRadius: "10px",
                        boxShadow: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <CreateNewFolderIcon
                        sx={{
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            );
          })}
        </Grid>

        {/* <Box
            sx={{
              marginTop: 2,
              marginLeft: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Typography
              sx={{ ml: "20px", fontWeight: "600" }}
              variant="h6"
              align="left"
            >
              Transition Date
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                  sx={{
                    backgroundColor: "white",
                    width: "280px",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: 1,
                    "&:hover": {
                      border: "none",
                    },
                  }}
                />
              <CommonDatePicker /> TO
              <CommonDatePicker />
            </Box>
          </Box> */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{}}>
            <Box>imahe</Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2B2861",
                  borderRadius: "25px",
                  width: "150px",
                  position: "relative",
                  top: "390px",
                  "&:hover": {
                    backgroundColor: "#2B2861",
                  },
                }}
                onClick={handleNavigateToPaymentApproval}
              >
                Display
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReportPage;
