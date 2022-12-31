import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style.css";
import HeroImg from "../../Assets/Images/heroImg.png";

const Hero = () => {
  return (
    <Box className="hero">
      <Box className="heroBg"></Box>
      <Box className="heroLeftWrapper">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box className="heroLeft">
              <Typography variant="body1" color="#00A1E5" fontSize={22}>
                Welcome to EpackBook
              </Typography>
              <Typography
                variant="h1"
                fontSize={60}
                color="white"
                fontWeight={600}
                sx={{ my: 2 }}
              >
                Fast Shipping <br /> with quality <br /> service
              </Typography>
              <Typography variant="body1" fontSize={22} color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" sx={{ mr: 2 }}>
                  Get Started
                </Button>
                <Button variant="contained">Contact Us</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={HeroImg} alt="hero image" style={{ width: 500 }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
