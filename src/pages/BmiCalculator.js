// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function BmiCalculator() {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleHeight = (e) => {
    const userInput = e.target.value;
    !isNaN(userInput) && setHeight(userInput);
  };

  const handleWeight = (e) => {
    const userInput = e.target.value;
    !isNaN(userInput) && setWeight(userInput);
  };

  const calculateBMI = (event) => {
    event.preventDefault();
    const bmi = weight / Math.pow(height / 100, 2);
    if (bmi >= 30) {
      navigate("/obesity");
    } else if (bmi >= 25) {
      navigate("/over-weight");
    } else if (bmi >= 18.5) {
      navigate("/healthy");
    } else {
      navigate("/under-weight");
    }
  };

  return (
    <main>
      <h1>Calculate BMI</h1>
      <form onSubmit={calculateBMI}>
        <div className="form--height">
          <label htmlFor="height">Height (cm)</label>
          <Input
            value={height}
            onChange={handleHeight}
            id="height"
            type="text"
            placeholder="Your height"
          />
        </div>

        <div className="form--weight">
          <label htmlFor="weight">Weight (kg)</label>
          <Input
            value={weight}
            onChange={handleWeight}
            id="weight"
            type="text"
            placeholder="Your weigth"
          />
        </div>

        <Button>CALCULATE</Button>
      </form>
    </main>
  );
}

export default BmiCalculator;
