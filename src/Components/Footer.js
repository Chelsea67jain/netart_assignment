import React from 'react'
import { Grid } from '@mui/material';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const Footer = () => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      spacing={1}
      style={{
        display: "flex",
       padding:matches?0:10,
        width: matches?"100%":1213,
        backgroundColor: "red",
        height: matches ? 100 : 200,
        color: "#fff",
      }}
    >
      <Grid
        item
        xs={matches ? 4 : 12}
        style={{
          display: "flex",
          justifyContent: matches ? "center" : "left",
          alignItems: "center",
        }}
      >
        <LocalPhoneIcon />
        &nbsp; Toll free:1800 200 1234
      </Grid>
      <Grid
        item
        xs={matches ? 4 : 12}
        style={{
          display: "flex",
          justifyContent: matches ? "center" : "left",
          alignItems: "center",
        }}
      >
        <FacebookRoundedIcon /> &nbsp;www.facebook.com/cripumps
      </Grid>
      <Grid
        item
        xs={matches ? 4 : 12}
        style={{
          display: "flex",
          justifyContent: matches ? "center" : "left",
          alignItems: "center",
        }}
      >
        <LanguageOutlinedIcon />
        &nbsp; www.crigroups.com
      </Grid>
    </Grid>
  );
}

export default Footer
