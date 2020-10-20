import React from 'react';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { green } from "@material-ui/core/colors";

const Stepper = (props) => {
    const useStyles = makeStyles({
        root: {
        //   maxWidth: 400,
          flexGrow: 1,
          backgroundColor: green[50]
        },
      });
      const classes = useStyles();
      const theme = useTheme();


    return (

        <MobileStepper
        variant="progress"
        steps={props.totalQuestions}
        position="static"
        activeStep={props.activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={props.handleNext} disabled={props.nextButtonDisabled}>
            {props.totalQuestions-1===props.activeStep?'Finish':'Next'}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={props.handleBack} disabled={props.activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    );
}

export default Stepper;