import { useState } from "react";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";
import "./register.css";

const Register = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [firstStepCompleted, setFirstStepCompleted] = useState(false);
  const [secondStepCompleted, setSecondStepCompleted] = useState(false);
  const [thirdStepCompleted, setThirdStepCompleted] = useState(false);

  const updateStep = (event) => {
    setActiveStep(parseInt(event.target.value) - 1);
  };
  return (
    <>
      <div className="modal">
        <div className="button-group">
          <button className="navigation active" value="1" onClick={updateStep}
          
          >
            1
          </button>
          <div className="separator"></div>
          <button className="navigation completed" value="2" onClick={updateStep}>
            2
          </button>
          <div className="separator"></div>
          <button className="navigation" value="3" onClick={updateStep}>
            3
          </button>
        </div>
        {activeStep === 0 && (
          <FirstPage
            firstStepCompleted={firstStepCompleted}
            setFirstStepCompleted={setFirstStepCompleted}
          />
        )}
        {activeStep === 1 && (
          <SecondPage
            secondStepCompleted={secondStepCompleted}
            setSecondStepCompleted={setSecondStepCompleted}
          />
        )}
        {activeStep === 2 && (
          <ThirdPage
            thirdStepCompleted={thirdStepCompleted}
            setThirdStepCompleted={setThirdStepCompleted}
          />
        )}
      </div>
    </>
  );
};

export default Register;
