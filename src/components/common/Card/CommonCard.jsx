import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function CommonCard({
  item,
  index,
  ApprovalClick,
  HandleMoreDetails,
}) {
  const MAX_TITLE_WORDS = 15; // Maximum words to display in the title

  const titleWords = item.desc.split(" ");
  const displayTitle = titleWords.slice(0, MAX_TITLE_WORDS).join(" ");
  const isLongTitle = titleWords.length > MAX_TITLE_WORDS;

  return (
    <Card
      sx={{ minWidth: 350, height: "200px" ,}}
      key={index}
      onClick={() => ApprovalClick(item.herf)}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginTop:"40px"
          }}
        >
          {item.title === "Approval 1" || item.title === "Approval 2" ? (
            <Box>{item.icon1} </Box>
          ) : (
            <Avatar
              sx={{
                backgroundColor: `${
                  item.title === "Approval 2" || item.title === "Deletion"
                    ? "red"
                    : "#11338D"
                }`,
              }}
            >
              {item.icon1}
            </Avatar>
          )}
          <Typography
            sx={{ fontSize: 16, ml: "16px", fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            {item.title}
          </Typography>

          {}
        </Box>
        <Typography
          variant="body1"
          component="div"
          sx={{
            mt: "40px",
            color: "gray",
          }}
        >
          {isLongTitle ? (
            <>
              {displayTitle} ...
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={HandleMoreDetails}
              >
                more
              </span>
            </>
          ) : (
            displayTitle
          )}
        </Typography>
        {item.icon2 && (
          <Box
            sx={{
              position: "relative",
              left: "10px",
              // top: "55px",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
              }}
            >
              {item.icon2}

              <span
                style={{ color: "red", fontSize: "16px", marginLeft: "5px",
               
              }}
              >
                Pending
              </span>
              <span
                style={{ color: "green", fontSize: "30px",   position: "relative",
                left: "180px",
                bottom: "50px", 
            }}
              >
                25
              </span>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
