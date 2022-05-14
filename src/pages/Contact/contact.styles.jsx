import styled from "styled-components";

export const FormContainer = styled.form`
  width: 33%;
  @media only screen and (max-width:600px){
    width:80%;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
