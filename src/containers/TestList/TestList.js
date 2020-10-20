import React from "react";
import {Link} from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import { makeStyles } from "@material-ui/core";

import {data} from "../data/quiz";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 15,
  },
  media: {
    height: 240,
    width: "100%",
    objectFit: "contain",
  },
});

function MediaCard(params) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={params._id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={params.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {params.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {params.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/quiz/${params._id}`}>
          Take the test
        </Button>
      </CardActions>
    </Card>
  );
}

const quizList = data.map((quiz) => {
  return (
    <Grid item>
      <MediaCard
        _id={quiz._id}
        name={quiz.name}
        description={quiz.description}
        image={quiz.image}
      />
    </Grid>
  );
});

const mainMenu = (props) => {
  return (
    <Typography
      component="div"
      style={{
        paddingTop: "5vh",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Grid container justify="space-around" alignItems="flex-end">
        {quizList}
      </Grid>
    </Typography>
  );
};

export default mainMenu;
