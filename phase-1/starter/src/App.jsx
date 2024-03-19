import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Item from "./components/Item";
import FormInput from "./components/FormInput";

const gettingDataFromLocalStorage = () => {
  let data = localStorage.getItem("list");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const App = () => {
  const [list, setList] = useState(gettingDataFromLocalStorage());
  const [inputValue, setInputValue] = useState("");

  const addEleIntoList = (anyPara) => {
    const myDate = new Date();
    let myNewObj = {
      id: myDate,
      title: anyPara,
      isCompleted: false,
    };

    let newArr = [...list, myNewObj];
    setList(newArr);
    setInputValue("");
    localStorage.setItem("list", JSON.stringify(newArr));
  };

  const deleteEle = (x) => {
    let updated = list.filter((e) => e.id !== x);
    setList(updated);

    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(updated));
  };

  const makeCompleted = (x) => {
    // alert(x);

    const updatedList = list.map((i) => {
      if (i.id === x) {
        return { ...i, isCompleted: true };
      } else {
        return { ...i };
      }
    });
    setList(updatedList);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  const clickItem = (item) => {
    setInputValue(item.title);
  };

  const updateItem = (x) => {
    const updatedList = list.map((i) => {
      if (i.id === x) {
        return { ...i, title: inputValue };
      } else {
        return { ...i };
      }
    });
    setList(updatedList);
    setInputValue("");
  };

  const fromStroe = () => {
    console.log(JSON.parse(localStorage.getItem("list")));
  };

  return (
    <div className="main">
      <Heading title={"My First App With Hadi"} para={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the"} />

      <FormInput addEleIntoList={addEleIntoList} inputValue={inputValue} setInputValue={setInputValue} />

      {list.map((x, index) => (
        <React.Fragment key={index}>
          <Item
            updateItem={() => updateItem(x.id)}
            clickItem={() => clickItem(x)}
            title={x.title}
            isCompleted={x.isCompleted}
            makeCompleted={() => makeCompleted(x.id)}
            removeEle={() => deleteEle(x.id)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
