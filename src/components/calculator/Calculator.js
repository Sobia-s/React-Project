import React, { useState, useRef } from "react";
import './calculator.css';

function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const getNumberInput = () => {
        const inputValue = parseFloat(inputRef.current.value);
        return isNaN(inputValue) ? 0 : inputValue;
    };

    const plus = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult + getNumberInput());
    };

    const minus = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult - getNumberInput());
    };

    const times = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult * getNumberInput());
    };

    const divide = (e) => {
        e.preventDefault();
        const numberInput = getNumberInput();
        if (numberInput === 0) {
            alert("Cannot divide by zero");
        } else {
            setResult((prevResult) => prevResult / numberInput);
        }
    };

    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = "";
    };

    const resetResult = (e) => {
        e.preventDefault();
        setResult(0);
    };

    return (
        <>
            <div className="cal">
                <div>
                    <h1>Simplest Working Calculator</h1>
                </div>
                <form>
                    <p ref={resultRef}>{result}</p>
                    <input
                        ref={inputRef}
                        type="number"
                        placeholder="Type a number"
                        className="calInput"
                    />
                    <button onClick={plus} className="calButton">add</button>
                    <button onClick={minus} className="calButton">subtract</button>
                    <button onClick={times} className="calButton">multiply</button>
                    <button onClick={divide} className="calButton">divide</button>
                    <button onClick={resetInput} className="calButton">reset input</button>
                    <button onClick={resetResult} className="calButton">reset result</button>
                </form>
            </div>
        </>
    );
}

export default Calculator;



