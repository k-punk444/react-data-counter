import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("august 15 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((currentStep) => currentStep - 1)}>
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((currentStep) => currentStep + 1)}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => setCount((currentCount) => currentCount - 1)}>
          -
        </button>
        <span>Counter: {count}</span>
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          +
        </button>
      </div>
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was `}
      </span>
      <p> {date.toDateString()}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
