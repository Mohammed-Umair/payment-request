import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  styled,
  TextField,
} from "@mui/material";
import React from "react";

const Approve1TransitionDetailCard = ({ remark }) => {
  return (
    <Card sx={{ minWidth: 350, height: "270px" }}>
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Requistation Number:
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Requistation Year:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Company Code:
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Shipping Control no:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Vender:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Created On:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Payment Code:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Payment Due Date:
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: "30px",
                }}
              >
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  1000380
                </Typography>

                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  2023
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  9008
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  6324915
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  10073952
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  25.09.2023
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  202
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  16.10.2023
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Trasitision Id:
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Initiating Party Name:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Requested Execution Date :
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Debtor Org. Name:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Debtor Name:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Account Number:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Charge Bearer:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Creditor Account Currency:
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: "30px",
                }}
              >
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                ></Typography>
                &nbsp;
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  Reience Retail ltd
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  25.09.2023
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  Reience Retail ltd
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  MVERMA
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  &nbsp;
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  DEBT
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  USD
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Invoice Amount:
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Misc. Charges:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Purpose Code:
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Local Bank Charges :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  GST Amount:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Total Amount:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Currency:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                >
                  Exchanged Rate :
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    mt: 1.5,
                  }}
                >
                  Remark :
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: "30px",
                }}
              >
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  30,000.00
                </Typography>

                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  1,000.00
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  S0001
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  10,000.00
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  20,000.00
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  2,490645.00
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  USD
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    mt: 0.5,
                  }}
                >
                  82.02150
                </Typography>

                {remark ? (
                  <TextField variant="outlined" size="small"/>
                ) : (
                  <Typography
                    variant="body2"
                    align="left"
                    sx={{
                      mt: 0.5,
                    }}
                  >
                    Okay
                  </Typography>
                )}

                {/* <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    boxShadow: 1,
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mt: 1,
                    border: "1px solid black",
                    height:"25px"
                  }}
                >
                  Okay
                </Button> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Approve1TransitionDetailCard;
