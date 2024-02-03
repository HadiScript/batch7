import React, { useReducer } from "react";
import { useState } from "react";
import Button from "./Button";

const initValue = 90;

const reducerFunc = (state, action) => {
  // console.log(action, state, "here is the action");

  return action === "hadi" ? state + 1000 : state - 1000;
};

const App = () => {
  let [value, dispatch] = useReducer(reducerFunc, initValue);

  return (
    <div>
      count: {value}
      <br />
      <Button func={() => dispatch("hadi")} title={"inc"} />
      <Button func={() => dispatch("asd")} title={"dec"} />
    </div>
  );
};

export default App;
