import React, { useContext, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/provider/user/user.provider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const DrawerList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0px",
  padding: "0px",
}));
const DrawerListItem = styled(ListItem)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "50vh",
  margin: "0px",
  padding: "0px",
}));
const DrawerComponent = () => {
  const { userLoggedIn, logoutUser } = useContext(UserContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const CloseIconClick = () => {
    console.log("Clicked");
  };
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <IconButton
          sx={{ position: "absolute", top: "1rem", right: "1rem", zIndex:"99999" }}
          onClick={() => setOpenDrawer(false)}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <DrawerList>
          <DrawerListItem>
            <ListItemText>
              <Link to="/" onClick={() => setOpenDrawer(false)}>
                <Button color="inherit">Home</Button>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link to="/contact" onClick={() => setOpenDrawer(false)}>
                <Button color="inherit">Contact</Button>
              </Link>
            </ListItemText>
            <ListItemText>
              <Link to="/" onClick={() => setOpenDrawer(false)}>
                <Button color="inherit">About</Button>
              </Link>
            </ListItemText>
            <ListItemText>
              {userLoggedIn ? (
                <Button
                  onClick={() => logoutUser()}
                  color="secondary"
                  variant="contained"
                  sx={{ marginX: 1 }}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/login" onClick={() => setOpenDrawer(false)}>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ marginX: 1 }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </ListItemText>
          </DrawerListItem>
        </DrawerList>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComponent;
