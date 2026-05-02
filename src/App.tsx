import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation: string) => {
    const a = Number(num1);
    const b = Number(num2);

    if (operation === "+") setResult((a + b).toString());
    if (operation === "-") setResult((a - b).toString());
    if (operation === "*") setResult((a * b).toString());
    if (operation === "/") {
      if (b === 0) {
        setResult("Error");
        return;
      }
      setResult((a / b).toString());
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result || "0"}</div>

      <input
        type="number"
        placeholder="Prvi broj"
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Drugi broj"
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>
    </div>
  );
}

export default App;