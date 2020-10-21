import React, { Fragment, useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { green } from "@material-ui/core/colors";

import Variants from "../../components/Variants/Variants";
import Stepper from "../../components/Stepper/Stepper";

import { findById } from "../data/quiz";

const TestSingle = (props) => {
  const quiz = findById(props.match.params.id);
  const totalQuestions = quiz.questions.length;
  //state hooks
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswer] = useState({});
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);  

  useEffect(() => {
    function getNextButtonEnabled() {
      let buttonEnabled = true;
      if (activeStep === totalQuestions-1){
        if (!answers[activeStep]){
          buttonEnabled = false;
        }else{
          buttonEnabled = true;
        }  
      }
  
      return buttonEnabled;
    }

    setNextButtonDisabled(!getNextButtonEnabled());
  }, [activeStep, answers])
  
  //event handlers
  //Stepper
  const handleNext = () => {
    if (activeStep < totalQuestions-1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }else{
      props.history.goBack();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const variantOnChangeHandler = (event) => {
    const updatedAnswers = {...answers};
    updatedAnswers[activeStep] = event.target.value;
    setAnswer(updatedAnswers);
  };

  return (
    <Fragment>
      <Paper
        style={{
          paddingTop: "5vh",
          height: "78vh",
          backgroundColor: green[50],
        }}
        elevation={3}
      >
        <Box style={{height: "55vh"}} m={1}>
          <p>Question: {quiz.questions[activeStep].metter}</p>
        </Box>
        <Variants variants={quiz.questions[activeStep].variants}
         variantOnChangeHandler = {variantOnChangeHandler}
         value={answers[activeStep]}/>
      </Paper>

      <Stepper
        totalQuestions={totalQuestions}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        nextButtonDisabled={nextButtonDisabled}
      />
    </Fragment>
  );
};

export default TestSingle;
