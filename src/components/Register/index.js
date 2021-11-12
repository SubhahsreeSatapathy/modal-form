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
  const resetBtns = () => {
    setFirstStepCompleted(false);
    setSecondStepCompleted(false);
    setThirdStepCompleted(false);
  };
  return (
    <>
      <div className="modal">
        <div className="button-group">
          <button
            className={`navigation ${
              firstStepCompleted ? "completed" : "active"
            }`}
            value="1"
            onClick={(event) => {
              updateStep(event);
              resetBtns();
            }}
          >
            1
          </button>
          <div className="separator"></div>
          <button
            className={`navigation ${
              secondStepCompleted
                ? "completed"
                : activeStep < 1
                ? "none"
                : "active"
            }`}
            value="2"
            onClick={(event) => {
              updateStep(event);
              resetBtns();
            }}
          >
            2
          </button>
          <div className="separator"></div>
          <button
            className={`navigation ${
              thirdStepCompleted
                ? "completed"
                : activeStep < 2
                ? "none"
                : "active"
            }`}
            value="3"
            onClick={(event) => {
              updateStep(event);
              resetBtns();
            }}
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
            setActiveStep={setActiveStep}
            setFirstStepCompleted={setFirstStepCompleted}
            setSecondStepCompleted={setSecondStepCompleted}
            setThirdStepCompleted={setThirdStepCompleted}
          />
        )}
      </div>
    </>
  );
};

export default Register;
