import React from "react";
import "./styles.css";
import Button from "../button";
import logo from "../../assets/img/SimpliLearn-Logo.png";
import Output from "../output";
import { evaluate } from "mathjs";

export default function Layout() {
  let [input, setInput] = React.useState("");
  let [result, setResult] = React.useState("");

  function Equal() {
    if (input !== "") {
      let res = "";
      try {
        res = evaluate(input);
        console.log("res", res);
      } catch (error) {
        setResult("Math Error");
      }
      if (res === undefined) {
        setResult("Math Error");
      } else {
        setResult(input + "=");
        setInput(res);
      }
    }
  }

  function C() {
    setInput("");
    setResult("");
  }

  function DEL() {
    let str = input;
    str = str.substring(0, str.length - 1);
    setInput(str);
  }

  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case " C ":
        C();
        break;
      case " DEL ":
        DEL();
        break;
      case "=":
        Equal();
        break;
      default:
        setInput((prev) => prev + value);
        break;
    }
  }

  return (
    <div className="frame">
      <div className="calculator">
        <br></br>
        <Output user={input} answer={result} />
        <img
          src={logo}
          alt="logo simplilearn"
          width="150px"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <div className="keys">
          <Button
            value={" C "}
            className={"button clear"}
            handleClick={handleClick}
          />
          <Button
            value={" DEL "}
            className={"button clear"}
            handleClick={handleClick}
          />
          <Button
            value={"%"}
            className={"button operator"}
            handleClick={handleClick}
          />
          <Button
            value={"/"}
            className={"button operator"}
            handleClick={handleClick}
          />

          <Button value={"7"} className={"button "} handleClick={handleClick} />
          <Button value={"8"} className={"button "} handleClick={handleClick} />
          <Button value={"9"} className={"button "} handleClick={handleClick} />
          <Button
            value={"*"}
            className={"button operator"}
            handleClick={handleClick}
          />

          <Button value={"4"} className={"button "} handleClick={handleClick} />
          <Button value={"5"} className={"button "} handleClick={handleClick} />
          <Button value={"6"} className={"button "} handleClick={handleClick} />
          <Button
            value={"-"}
            className={"button operator"}
            handleClick={handleClick}
          />

          <Button value={"1"} className={"button "} handleClick={handleClick} />
          <Button value={"2"} className={"button "} handleClick={handleClick} />
          <Button value={"3"} className={"button "} handleClick={handleClick} />
          <Button
            value={"+"}
            className={"button operator"}
            handleClick={handleClick}
          />

          <Button value={"0"} className={"button "} handleClick={handleClick} />
          <Button
            value={"."}
            className={"button operator"}
            handleClick={handleClick}
          />
          <Button
            value={"="}
            className={"button enqual-sign"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
