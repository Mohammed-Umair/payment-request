import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

export default function CommonDatePicker() {
  return (
    <Box sx={{ width: "200px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="  "
            sx={{
              backgroundColor: "white",
              width: "180px",
              border: "none",
              borderRadius: "10px",
              boxShadow: 1,
              "&:hover": {
                border: "none",
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
