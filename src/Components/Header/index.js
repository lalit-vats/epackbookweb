import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Container } from "@mui/system";
import logo from "../../Assets/Images/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import "./style.css";

const navItems = [
  {
    label: "Home",
    path: "#",
    icon: <AiFillHome />,
  },
  {
    label: "Features",
    path: "#",
    icon: <AiFillHome />,
  },
  {
    label: "Pricing",
    path: "#",
    icon: <AiFillHome />,
  },
  {
    label: "Support",
    path: "#",
    icon: <AiFillHome />,
  },
  {
    label: "Login",
    path: "#",
    icon: <AiFillHome />,
  },
  {
    label: "Register For Demo",
    path: "#",
    icon: <AiFillHome />,
  },
];

const iconitems = [
  {
    label: "Twitter",
    path: "https://google.com",
    icon: <AiFillTwitterCircle size={20} />,
  },
  {
    label: "Youtube",
    path: "https://google.com",
    icon: <AiFillYoutube size={20} />,
  },
  {
    label: "Facebook",
    path: "https://google.com",
    icon: <AiFillFacebook size={20} />,
  },
  {
    label: "Instagram",
    path: "https://google.com",
    icon: <AiFillInstagram size={20} />,
  },
];

const phoneNumbers = ["35353535353", "6363636363"];

const Header = () => {
  const [toggleDrawer, setToggleDeawer] = useState(false);
  const isTablate = useMediaQuery("(max-width:992px)");

  const handleToggleDrawer = () => setToggleDeawer((pre) => !pre);

  return (
    <Box className="header">
      <Box className="topHeader">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <Stack direction={{ xs: "row" }} gap={2}>
                {isTablate
                  ? phoneNumbers.map((phoneNumber) => (
                      <Tooltip title={`Click to call ${phoneNumber}`}>
                        <IconButton href={`tel:${phoneNumber}`}>
                          <FaPhoneAlt size={15} />
                        </IconButton>
                      </Tooltip>
                    ))
                  : phoneNumbers.map((phoneNumber) => (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <FaPhoneAlt size={15} />
                        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                      </Box>
                    ))}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MdEmail />
                  <a href={`mailto:abc@gmail.com`}>abc@gmail.com</a>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ float: "right" }}>
                {iconitems.map(({ icon, path, label }) => (
                  <Tooltip title={label}>
                    <IconButton href={path} target={"_blank"}>
                      {icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="mainHeader">
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <Box className="leftSide">
                <img src={logo} alt="" />
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              {isTablate ? (
                <IconButton onClick={handleToggleDrawer} sx={{ padding: 2 }}>
                  <GiHamburgerMenu color="white" />
                </IconButton>
              ) : (
                <Box className="rightSide">
                  {navItems.map((d, i) => (
                    <Box>
                      <Link key={i} href={d.path}>
                        {d.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Drawer open={toggleDrawer} onClose={handleToggleDrawer}>
        <List sx={{ width: 250 }}>
          {navItems.map((d, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton href={d.path}>
                <ListItemIcon>{d.icon}</ListItemIcon>
                <ListItemText primary={d.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
