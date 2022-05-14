import styled from "styled-components";

export const ContainerParent = styled.div`
  > * {
    &:first-child {
      @media only screen and (max-width: 600px) {
        justify-content: center;
      }
    }
  }
`;
