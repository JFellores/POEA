import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Step components (default exports; aliasing not required here)
import Step1ServiceConcern   from "./StartCreate";
import Step2Faqs             from "./StartCreate2";
import Step3AccountRecovery  from "./StartCreate3";
import Step4Verification     from "./StartCreate4";
import Step5Status           from "./StartCreate5";

const steps = [
  Step1ServiceConcern,
  Step2Faqs,
  Step3AccountRecovery,
  Step4Verification,
  Step5Status,
];

const FINISH_PATH = "/"; // <-- change if your Main Dashboard lives elsewhere

export default function TicketWizard() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const next   = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back   = () => setStep((s) => Math.max(s - 1, 0));
  const finish = () => navigate("/");

  const StepComp = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <StepComp
      onNext={isLast ? finish : next}
      onBack={step > 0 ? back : undefined}
      step={step}
      totalSteps={steps.length}
    />
  );
}
