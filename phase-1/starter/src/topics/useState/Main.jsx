import React from "react";
import { useState } from "react";
import Button from "./Button";

const App = () => {
  let [count, setCount] = useState(90);

  const Inc = () => {
    setCount(count + 1);
  };

  const Dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      count: {count}
      <br />
      <Button func={Inc} title={"Inc"} />
      <Button func={Dec} title={"Dec"} />
    </div>
  );
};

export default App;
