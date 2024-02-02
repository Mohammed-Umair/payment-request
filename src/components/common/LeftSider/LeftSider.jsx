import { Box, List, ListItem, ListItemAvatar } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router";
const LeftSider = () => {
  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate("/home");
  };
  const handleNavigateApproval1 = () => {
    navigate("/paymentApproval1");
  };
  const handleNavigateApproval2 = () => {
    navigate("/approval2");
  };

  return (
    <Box
      sx={{
        height: "89vh",
        width: "54px",
        backgroundColor: "white",
        boxShadow: 1,
      }}
    >
      <List sx={{ bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            {" "}
            <HomeIcon
              sx={{
                fontSize: "30px",
                color: "black",
              }}
              onClick={handleNavigateToHomePage}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            {" "}
            <VerifiedIcon
              sx={{
                fontSize: "30px",
                color: "#11338D",
              }}
              onClick={handleNavigateApproval1}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            {" "}
            <VerifiedIcon
              sx={{
                fontSize: "30px",
                color: "red",
              }}
              onClick={handleNavigateApproval2}
            />
          </ListItemAvatar>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftSider;
