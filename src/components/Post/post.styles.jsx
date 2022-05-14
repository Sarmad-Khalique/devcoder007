import styled from "styled-components";

export const ImageContainer = styled.div`
    background-image: ${({imageUrl})=>`url(${imageUrl})`};
    height: 400px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const PostConatainer = styled.div`
    max-width: 70%;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 2rem;

    @media only screen and (max-width: 600px) {
        max-width:90%;
        padding-left: 5%;
        padding-right: 5%;
    }    
`