import React from "react";

export const Thankyou = ({
  setActiveStep,
  setFirstStepCompleted,
  setSecondStepCompleted,
  setThirdStepCompleted,
}) => {
    const handleReset = ()=>{
        setActiveStep(0)
        setFirstStepCompleted(false)
        setSecondStepCompleted(false)
        setThirdStepCompleted(false)
    }
  return (
    <div>
      <h1 className="thankyou">Thank You for submitting!</h1>
      <button className="reset-all" onClick={handleReset}>
        Reset Form
      </button>
    </div>
  );
};
