import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormContainer } from "./sign-up.styles";
import FormInput from "../Form-input/FormInput";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const mobileStyle = {
  ...style,
  width: "90%",
  left: "25%",
  transform: "translate(-23%, -50%)",
  p:1
};

const SignUp = ({ modalText }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log("Changing");
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let { username, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      console.log("Username: ", username, "Password: ", password);
    }
  };

  let { username, password, confirmPassword } = userCredentials;
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="secondary"
        sx={
          isMobile ? { width: "80%", marginY: 1 } : { width: "33%", marginY: 1 }
        }
        onClick={handleOpen}
      >
        {modalText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isMobile ? mobileStyle : style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h3"
            color="secondary"
          >
            Create Account
          </Typography>
          <FormContainer onSubmit={onSubmit}>
            <FormInput
              type="username"
              name="username"
              onChange={handleChange}
              value={username}
              label="Username"
            />
            <FormInput
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              label="Password"
            />
            <FormInput
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
              label="Confirm Password"
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ width: "100%" }}
            >
              Sign up
            </Button>
          </FormContainer>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default SignUp;
