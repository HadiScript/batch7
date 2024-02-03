// const App = () => {
//   let name = "hadi";

//   let printable = false;

//   return <> {printable ? name : "hidden"} </>;
// };

// export default App;

import React from "react";

const ConditionalList = () => {
  const arr = [1, 2, 3, 4, 5, 5, 99]; // for loop, loop, map, filter, etc

  // console.log(
  //   arr.filter((x, index) => {
  //     return x >= 5;
  //   }x)
  // );

  let arr2 = arr.filter((x, index) => {
    return x >= 5;
  });

  return (
    <>
     <h6>ConditionalList</h6>
      {/* {
    arr.map( (x, index) => {
      return <div> index: {index} value : {x} </div>
    })
  } */}
      {arr.map((x, index) => (
        <div key={index}> {x} </div>
      ))}
      <hr />
      {arr2.map((x, index) => (
        <div key={index}> {x >= 5 && <span>{x}</span>} </div>
      ))}
      <hr />
      {arr
        .filter((x) => x >= 5)
        .map((x) => (
          <div>{x}</div>
        ))}
    </>
  );
};

export default ConditionalList;
