import styled from "styled-components";

export const LoginConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.form`
  width: 33%;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
