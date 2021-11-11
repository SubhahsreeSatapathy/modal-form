import { useEffect, useState } from "react";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";
import "./register.css";
import { Thankyou } from "../Thankyou";

const Register = (props) => {
  let [activeStep, setActiveStep] = useState(0);
  const [firstStepCompleted, setFirstStepCompleted] = useState(false);
  const [secondStepCompleted, setSecondStepCompleted] = useState(false);
  const [thirdStepCompleted, setThirdStepCompleted] = useState(false);

  const updateStep = (event) => {
    setActiveStep(parseInt(event.target.value) - 1);
  };

  console.log(activeStep)
  return (
    <>
      <div className="modal">
        <div className="button-group">
          <button
            className={`navigation ${
              firstStepCompleted ? "completed" : "active"
            }`}
            value="1"
            onClick={updateStep}
          >
            1
          </button>
          <div className="separator"></div>
          <button
            className={`navigation ${
              secondStepCompleted ? "completed" : "active"
            }`}
            value="2"
            onClick={updateStep}
          >
            2
          </button>
          <div className="separator"></div>
          <button
            className={`navigation ${
              thirdStepCompleted ? "completed" : "active"
            }`}
            value="3"
            onClick={updateStep}
          >
            3
          </button>
        </div>
        {activeStep === 0 && (
          <FirstPage
            setActiveStep={setActiveStep}
            setFirstStepCompleted={setFirstStepCompleted}
          />
        )}
        {activeStep === 1 && (
          <SecondPage
            setActiveStep={setActiveStep}
            setSecondStepCompleted={setSecondStepCompleted}
          />
        )}
        {activeStep === 2 && (
          <ThirdPage
            setActiveStep={setActiveStep}
            setThirdStepCompleted={setThirdStepCompleted}
          />
        )}
        {activeStep === 3 && (
          <Thankyou
          />
        )}
      </div>
    </>
  );
};

export default Register;
