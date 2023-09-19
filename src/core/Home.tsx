import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

// import unicornbikeImg from "./../assets/images/unicornbike.jpg";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import unicornBikeImg from "../assets/images/unicornbike.jpg";
import { getAllUsers, IUser } from "../user/api-user";

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
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // const classes = useStyles();

  if (!users) {
    return (
      <Card sx={{ maxWidth: 600, margin: "auto" }}>
        <Typography align="center" variant="h6">
          Word of the Day
        </Typography>
      </Card>
    );
  }
  return (
    <Card sx={{ maxWidth: 600, margin: "auto" }}>
      <Typography align="center" variant="h6">
        Word of the Day
      </Typography>
      <CardMedia component="img" image={unicornBikeImg} alt="unicorn bike" />
      {users.map((user: IUser) => (
        <div key={user._id}>
          <h4>User: {user.name}</h4>
          <h4>Email: {user.email}</h4>
        </div>
      ))}
    </Card>
  );
}
