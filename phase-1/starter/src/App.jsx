import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Item from "./components/Item";

let data = [
  {
    id: 1,
    title: "I am done with react",
  },
  {
    id: 2,
    title: "I know about react what your question?",
  },
  {
    id: 3,
    title: "got it",
  },
];

const App = () => {
  const [list, setList] = useState(data);

  let newEle = {
    id: 5,
    title: "new element added by us",
  };

  const addEleIntoList = () => {
    let newArr = [...list, newEle];
    setList(newArr);
  };

  const deleteEle = (x) => {
    // console.log(x, "here is ");
    setList(list.filter((e) => e.id !== x));
  };

  return (
    <div className="main">
      <Heading title={"My First App With Hadi"} para={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"} />

      <button onClick={addEleIntoList}>Add</button>

      {list.map((x, index) => (
        <React.Fragment key={index}>
          <Item title={x.title} removeEle={() => deleteEle(x.id)} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
