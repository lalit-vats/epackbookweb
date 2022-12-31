import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import "./style.css";

function SocialMediaIconsJSX(props) {
  if (!props.IconsArr) return null;
  return (
    <Stack direction="row" spacing={0}>
      {props.IconsArr.map(({ icon, path }) => (
        <IconButton size="small" target={"_blank"} href={path}>
          {icon}
        </IconButton>
      ))}
    </Stack>
  );
}

const Footer = ({ footerCardData }) => {
  return (
    <footer>
      <Box sx={{ background: "#012A5E" }}>
        <Container>
          <Box className="topFooter">
            <Typography sx={{ textAlign: "center" }} color="white">
              Hey! Are You Packers & Movers? We have a solution to manage your
              business online.
            </Typography>
            <Button variant="contained">Sign Up</Button>
          </Box>
        </Container>
      </Box>
      <section className="CardsWrapper" style={{ margin: "30px 0" }}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <Card className="card">
                <CardHeader className="cardHeading" title={"WHAT WE DO"} />
                <Divider />
                <CardContent>
                  <Typography gutterBottom>
                    ePackBook is a powerfull software to manage relocation
                    business online. ePackBook allows their user to manage all
                    enquiries, Notify survey date & Time, Follow ups reminder,
                    Create and Send Quotations in stylish tamplets, Jobs
                    reminder, Download Reports, Manage customers profile & Their
                    Moves and many more...
                  </Typography>
                  <Typography href={"https://google.com"} component={"a"}>
                    Read more...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card className="card">
                <CardHeader className="cardHeading" title={"WHAT WE DO"} />
                <Divider />
                <CardContent>
                  <SocialMediaIconsJSX
                    IconsArr={footerCardData[1].socialMediaIcons}
                  />
                </CardContent>
                <CardContent>
                  <Typography gutterBottom>Contact ePackBook</Typography>
                  <Typography href={"https://google.com"} component={"a"}>
                    Contact us
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card className="card">
                <CardHeader className="cardHeading" title={"WHAT WE DO"} />
                <Divider />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography>How to use ePackBook:</Typography>
                    <Typography href={"https://google.com"} component={"a"}>
                      ePackBook Support
                    </Typography>

                    <Typography>Developers? Leads Providers?</Typography>
                    <Typography>ePackBook Terms & Privacy</Typography>
                    <Typography href={"https://google.com"} component={"a"}>
                      Terms of Service{" "}
                    </Typography>
                    <Typography href={"https://google.com"} component={"a"}>
                      Privacy Policy
                    </Typography>
                    <Typography>Contact Support</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Card className="card">
                <CardHeader className="cardHeading" title={"WHAT WE DO"} />
                <Divider />
                <CardContent>
                  <Typography gutterBottom>
                    ePackBook is a powerfull software to manage relocation
                    business online. ePackBook allows their user to manage all
                    enquiries, Notify survey date & Time, Follow ups reminder,
                    Create and Send Quotations in stylish tamplets, Jobs
                    reminder, Download Reports, Manage customers profile & Their
                    Moves and many more...
                  </Typography>
                  <Stack spacing={1}>
                    <Typography href={"https://google.com"} component={"a"}>
                      About Us
                    </Typography>
                    <Typography href={"https://google.com"} component={"a"}>
                      Features
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Divider color="fff" />
      <section style={{ margin: "16px 0" }}>
        <Container>
          <Typography sx={{ textAlign: "center" }}>
            © EPackBook {new Date().getFullYear()} | All Right Reserved
          </Typography>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
