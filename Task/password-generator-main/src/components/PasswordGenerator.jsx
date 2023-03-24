import React, { useCallback, useState, useEffect } from "react";

import StoredData from "./StoredData";
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [errors, setErrors] = useState({});
  const [showData, setShowData] = useState(false);

  const [storedData, setStoredData] = useState([]);
  const [newdt, setnewdt] = useState([]);
  const generatePassword = useCallback(() => {
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("At least one character type must be selected");
    }
    const random = (min = 0, max = 1) => {
      return Math.floor(Math.random() * (max + 1 - min) + min);
    };

    const randomLower = () => {
      return String.fromCharCode(random(97, 122));
    };

    const randomUpper = () => {
      return String.fromCharCode(random(65, 90));
    };

    const randomSymbol = () => {
      const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
      return symbols[random(0, symbols.length - 1)];
    };

    let password = "";
    for (let i = 0; i < 8; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
    setStoredData((prev) => {
      return [password, ...prev];
    });
    if (storedData.length >= 5) {
      const data = storedData.slice(0, 5);
      // console.log(data);
      setnewdt(data);
    }
  });

  console.log(newdt);
  useEffect(() => {
    const interval = setInterval(generatePassword, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [generatePassword]);
  // console.log(storedData);
  const storedDataHandler = () => {
    setShowData(true);
  };
  const stopDataHandler = () => {
    setLowercase(false);
    setNumbers(false);
    setErrors(false);
    setSymbols(false);
  };

  return (
    <div>
      <div className="app">
        <span>Password Generator</span>
        <div className="password">{password}</div>

        <div className="container">
          <div className="subContainer">
            <div className="option">
              <label>Include Uppercase Letters</label>
              <input
                type="checkbox"
                name="uppercase"
                defaultChecked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
              />
            </div>

            <div className="option">
              <label>Include Lowercase Letters</label>
              <input
                type="checkbox"
                name="lowercase"
                defaultChecked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
              />
            </div>

            <div className="option">
              <label>Include Numbers</label>
              <input
                type="checkbox"
                name="numbers"
                defaultChecked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
            </div>

            <div className="option">
              <label>Include Symbols</label>
              <input
                type="checkbox"
                name="symbols"
                defaultChecked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
            </div>

            {errors.length && <li className="error">{errors}</li>}

            <div className="button">
              <input
                type="submit"
                name="generate"
                value="Generate"
                onClick={generatePassword}
              />
            </div>
          </div>
        </div>
        <button className="startbtn" onClick={storedDataHandler}>
          StoredData
        </button>
        <button className="stopbtn" onClick={stopDataHandler}>
          Stop
        </button>
      </div>
      {showData && <StoredData storedData={newdt} />}
    </div>
  );
};

export default PasswordGenerator;
