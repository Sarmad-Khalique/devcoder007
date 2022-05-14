import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CustomCard = ({ id,title, body, publish, slug }) => {
  const date = publish.slice(0, publish.indexOf("T"));
  
  return (
    <Card sx={{ minWidth: 330, maxWidth:345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      />
      <CardContent>
        <Link to={encodeURI(`posts/${date}/${id}/${slug}/`)}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Link>
        <Typography variant="overline" color="secondary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body.slice(0, 100)}...{" "}
          <Button size="small" color="secondary">
            Read More
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
