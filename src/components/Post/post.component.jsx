import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { PostContext } from "../../context/provider/posts/posts.provider";
import { ImageContainer, PostConatainer } from "./post.styles";

const Post = () => {
  const {
    post: { title, published, body },
  } = useContext(PostContext);
  return (
    <PostConatainer>
      <ImageContainer
        imageUrl={
          "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        }
      />
      <Typography variant="h4" color="initial">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="initial">
        {published}
      </Typography>
      <Typography variant="body2" color="initial">
        {body}
      </Typography>
    </PostConatainer>
  );
};

export default Post;
