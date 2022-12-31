import {
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
import { BsFacebook } from "react-icons/bs";

const footerCardData = [
  {
    header: "WHAT WE DO",
    body: "ePackBook is a powerfull software to manage relocation business online. ePackBook allows their user to manage all enquiries, Notify survey date & Time, Follow ups reminder, Create and Send Quotations in stylish tamplets, Jobs reminder, Download Reports, Manage customers profile & Their Moves and many more...",
  },
  {
    header: "this is a header",
    socialMediaIcons: [
      {
        icon: <BsFacebook color="red" />,
        path: "#",
      },
      {
        icon: <BsFacebook color="red" />,
        path: "#",
      },
      {
        icon: <BsFacebook color="red" />,
        path: "#",
      },
      {
        icon: <BsFacebook color="red" />,
        path: "#",
      },
    ],
  },
  {
    header: "this is a header",
    body: "this is a body",
  },
  {
    header: "this is a header",
    body: "this is a body",
  },
];

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

function Footer() {
  return (
    <footer>
      <section>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
              <Card sx={{ backgroundColor: "#f7f7f7" }}>
                <CardHeader title={"WHAT WE DO"} />
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
              <Card sx={{ backgroundColor: "#f7f7f7" }}>
                <CardHeader title={"WHAT WE DO"} />
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
              <Card sx={{ backgroundColor: "#f7f7f7" }}>
                <CardHeader title={"WHAT WE DO"} />
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
              <Card>
                <CardHeader title={"WHAT WE DO"} />
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
      <Divider sx={{ my: 2, }}color="fff"  />
      <section>
        <Container>
          <Typography sx={{ textAlign: "center" }} color="white">
            © EPackBook {new Date().getFullYear()} | All Right Reserved
          </Typography>
        </Container>
      </section>
    </footer>
  );
}

export default Footer;
{
  /* <SocialMediaIconsJSX IconsArr={data.socialMediaIcons} /> */
}
