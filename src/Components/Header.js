import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  //DialogContentText,
  //DialogTitle,
  Slide,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import Marketplace from "../Pages/Marketplace";

import poster_img from "../assets/images/river.jpg";
import poster_mov from "../assets/images/river.mp4";
import background_login from "../assets/images/background-login.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  /*
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  */
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const [open, setOpen] = React.useState(false);
  const handleClickDialogLogin = () => {
    setOpen(true);
  };
  const handleCloseDialogLogin = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="ligth" variant="ligth">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link>Marketplace</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Iniciar sesión">
                  <IconButton
                    onClick={handleClickDialogLogin}
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    <Avatar sx={{ width: 32, height: 32 }} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open1}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Perfil
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Salir
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner-header">
        <video
          id="background-video"
          autoplay="true"
          loop
          muted
          poster={poster_img}
        >
          <source src={poster_mov} type="video/mp4" />
        </video>
        <div className="animated-title">
          <h1>THIS IS A RIVER</h1>
          <h2>How majestic</h2>
        </div>
      </div>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={open}
        onClose={handleCloseDialogLogin}
        aria-labelledby="dialog-login-title"
      >
        <DialogContent>
          <CardMedia
            component="img"
            height="194"
            image={background_login}
            alt="Image Login"
          />
        </DialogContent>
        <Divider>Sign in</Divider>
        <div className="dialog-actions-button">
          <DialogActions>
            <Button id="dialog-login-button" autoFocus variant="contained">
              MetaMask
            </Button>
          </DialogActions>
          <DialogActions>
            <Button href="https://metamask.io/download.html">
              Install MetaMask
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}
