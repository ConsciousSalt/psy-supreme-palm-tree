import React, {Fragment, useState} from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { green } from "@material-ui/core/colors";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { findById } from "../data/quiz";


const [quiz, setQuiz] = useState({});

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});
const classes = useStyles();
const theme = useTheme();

const TestSingle = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  setQuiz(findById(props.match.params.id));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Fragment>
    <Paper
      style={{ paddingTop: "5vh", height: "100vh", backgroundColor: green[50] }}
      elevation={3}
    >
      <Typography component="div" gutterBottom align="center" variant="h3">
        {quiz.name}
      </Typography>
      <Typography  display = "block" align="left" gutterBottom variant="body1">
        {quiz.name}
      </Typography>
    </Paper>


      <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
      />
       </Fragment>
  );
};

export default TestSingle;
