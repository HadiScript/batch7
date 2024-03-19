// import React, { useState } from "react";

// const Sample = () => {
//   const [list, setList] = useState([1, 2, 3, 4, 5]);
//   const [value, setValue] = useState(100);

//   // const list = [].map

//   const AddFunc = () => {
//     setList([...list, value]);
//     setValue(0);
//   };

//   return (
//     <main style={{ minHeight: "100vh", backgroundColor: "black", color: "white" }}>
//       <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />

//       {list.map((x, index) => (
//         <div>Item : {x}</div>
//       ))}

//       <button onClick={AddFunc}>Add</button>
//     </main>
//   );
// };

// export default Sample;

import React, { useState } from "react";

const Sample = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={theme === "white" ? "whiteLayout" : theme === "dark" ? "darkLayout" : ""}>
      <App />
    </div>
  );
};

export default Sample;
