import { useState, useCallback, useEffect } from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import quotes from "../../assets/quotes.json";
import { TypographyBlockquote } from "../ui/TypographyBlockquote";

export const Bmi = () => {
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");

  const calculateBMI = useCallback((height, weight) => {
    return (weight / (height * height)).toFixed(2);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const height = parseFloat(formData.get("height")) / 100;
    const weight = parseFloat(formData.get("weight"));
    const calculatedBmi = calculateBMI(height, weight);
    setBmi(parseFloat(calculatedBmi));

    let newMessage = "";
    if (calculatedBmi < 18.5) {
      newMessage = "Underweight";
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.99) {
      newMessage = "Normal weight";
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.99) {
      newMessage = "Overweight";
    } else {
      newMessage = "Obesity";
    }

    setMessage(newMessage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center py-5">
        BMI CALCULATOR
      </h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="px-9 py-9 space-y-4">
          <h1 className="text-3xl font-bold text-white">What's BMI</h1>
          <p className="text-xl font-light text-gray-300 pb-7">
            Body Mass Index (BMI) is a simple calculation using a person’s
            height and weight. The formula is: BMI = kg/m², where kg is a
            person’s weight in kilograms and m² is their height in meters
            squared. It provides an indication of whether a person is:
            Underweight, Normal weight, Overweight, or Obese.
          </p>
          <TypographyBlockquote quote={quote}></TypographyBlockquote>
        </div>

        <div className="flex flex-col items-center">
          <Card className="bg-gray-800 shadow-lg rounded-lg flex-1 max-w-lg border border-gray-600">
            <CardHeader>
              <CardTitle className="text-white">
                Let's calculate your BMI
              </CardTitle>
              <CardDescription className="text-gray-400">
                Easily determine your body mass index with our accurate
                calculation tool.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex ">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center p-5 space-x-4">
                  <label
                    htmlFor="weight"
                    className="text-lg font-medium leading-none text-white"
                  >
                    Enter your weight:
                  </label>
                  <Input
                    id="weight"
                    name="weight"
                    placeholder="Weight in kg"
                    required
                    className="text-black w-36"
                  />
                </div>
                <div className="flex items-center p-5 space-x-4">
                  <label
                    htmlFor="height"
                    className="text-lg font-medium leading-none text-white"
                  >
                    Enter your height:
                  </label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    placeholder="Height in cm"
                    required
                    className="text-black w-36"
                  />
                </div>
                <div className="flex items-center pl-5 space-x-4">
                  <Button type="submit" className="w-24 bg-slate-100">
                    Calculate
                  </Button>
                  {bmi > 0 && (
                    <div className="p-4 bg-gray-800 rounded-md text-white">
                      <h3 className="text-lg font-semibold mb-2">
                        Your BMI: {bmi}
                      </h3>
                      <p>{message}</p>
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
