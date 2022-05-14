import React, { useContext } from "react";
import { Grid } from "@mui/material";
import CustomCard from "../Custom-Card/custom-card.component";
import { PostContext } from "../../context/provider/posts/posts.provider";
import { ContainerParent } from "./card-container.styles";

const CardContainer = () => {
  const { posts } = useContext(PostContext);
  return (
    <ContainerParent>
      <Grid container spacing={2} paddingX={2}>
        {posts.map((post) => (
          <Grid key={post.id} item md={3}>
            <CustomCard {...post} />
          </Grid>
        ))}
      </Grid>
    </ContainerParent>
  );
};

export default CardContainer;
