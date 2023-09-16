import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

// import unicornbikeImg from "./../assets/images/unicornbike.jpg";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import unicornBikeImg from "../assets/images/unicornbike.jpg";

export interface IHomeProps {}

/* const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px
  ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
})); */

export default function Home() {
  // const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 600, margin: "auto" }}>
      <Typography align="center" variant="h6">
        Word of the Day
      </Typography>
      <CardMedia component="img" image={unicornBikeImg} alt="unicorn bike" />
    </Card>
  );
}
