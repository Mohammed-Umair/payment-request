import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { homePageData } from "../utils/homepage";
import CommonCard from "../components/common/Card/CommonCard";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
import LeftSider from "../components/common/LeftSider/LeftSider";
import SubHeader from "../components/common/SubHeader/SubHeader";
const LandingPage = () => {
  const [isLeftSiderOpen, setIsLeftSiderOpen] = useState(false);
  const navigate = useNavigate();

  const ApprovalClick = (href) => {
    navigate(href);
  };

  const HandleMoreDetails = () => {
    navigate("/approval1");
  };

  const handleToogleLeftSider = () => {
    setIsLeftSiderOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsLeftSiderOpen(true);
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <NavBar handleToogleLeftSider={handleToogleLeftSider} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {homePageData?.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  sx={{
                    margin: "30px 50px ",
                  }}
                >
                  <CommonCard
                    item={item}
                    index={index}
                    ApprovalClick={ApprovalClick}
                    HandleMoreDetails={HandleMoreDetails}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
