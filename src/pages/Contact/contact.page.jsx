import React, { useContext, useState } from "react";
import { Typography, Button } from "@mui/material";
import FormInput from "../../components/Form-input/FormInput";
import { FormContainer, ContactContainer } from "./contact.styles";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { UserContext } from "../../context/provider/user/user.provider";

const Contact = () => {
  const {authTokens} = useContext(UserContext)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let { name, email, message } = userData;

    response = await axios.post(`${BASE_URL}/contact/create/`, {
      name,
      email,
      message,
    },{
      headers:{
        'Authorization':`Bearer-${authTokens.access}`
      }
    });
    console.log(response);
    //console.log("Name: ", name, "Email: ", email, "Message: ", message);
  };
  let { name, email, message } = userData;
  return (
    <ContactContainer>
      <Typography variant="h3" color="secondary" sx={{textAlign:"center"}}>
        Contact Us
      </Typography>
      <FormContainer onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          label="Name"
        />
        <FormInput
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          label="Email"
        />
        <FormInput
          type="text"
          name="message"
          onChange={handleChange}
          value={message}
          label="Message"
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ width: "100%" }}
        >
          Send
        </Button>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
