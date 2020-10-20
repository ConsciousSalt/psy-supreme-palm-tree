import React, { Fragment, useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { green } from "@material-ui/core/colors";

import Variants from "../../components/Variants/Variants";
import Stepper from "../../components/Stepper/Stepper";

import { findById } from "../data/quiz";

// const TestSingle = (props) => {
// const [quiz, setQuiz] = useState({});

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
// });
// const classes = useStyles();
// const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   setQuiz(findById(props.match.params.id));

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <Fragment>
//     <Paper
//       style={{ paddingTop: "5vh", height: "100vh", backgroundColor: green[50] }}
//       elevation={3}
//     >
//       <Typography component="div" gutterBottom align="center" variant="h3">
//         {quiz.name}
//       </Typography>
//       <Typography  display = "block" align="left" gutterBottom variant="body1">
//         {quiz.name}
//       </Typography>
//     </Paper>
//        </Fragment>
//   );
// };

const TestSingle = (props) => {
  const quiz = findById(props.match.params.id);
  const totalQuestions = quiz.questions.length;
  //state hooks
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswer] = useState({});
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);  
  
  //event handlers
  //Stepper
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

  useEffect(() => {
    console.log(props);
    setNextButtonDisabled(!getNextButtonEnabled());
  }, [activeStep, answers])

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
