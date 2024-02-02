import React from "react";
import {
  Button,
  Paper,
  Typography,
  Grid,
  useTheme,
  TextField,
  Box,
  Avatar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import background from "../assets/background.jpeg";
import logo from "../assets/Logo.jpeg";

const UserPage = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleNavigateToHome = () => {
    navigate("/home");
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",
        ...backgroundImageStyle,
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginLeft: "20px",
            position: "relative",
            left: "280px",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Welcome, Siddharath 2.roy
          </Typography>
          <Grid container justifyContent="center" style={{ marginTop: "25px" }}>
            <Grid item>
              <Avatar
                sx={{ width: 70, height: 70 }}
                alt="Travis Howard"
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
              />
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="space-between"
            style={{ marginTop: "30px" }}
          >
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "15px",
                  backgroundColor: "red",
                  height: "45px",
                  width: "130px",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
                onClick={handleNavigateToHome}
              >
                Switch User
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="warning"
                sx={{
                  textTransform: "capitalize",
                  fontSize: "15px",

                  backgroundColor: "#83493E",
                  height: "45px",
                  width: "130px",
                  "&:hover": {
                    backgroundColor: "#83493E",
                  },
                }}
                variant="contained"
                onClick={handleNavigateToHome}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserPage;
