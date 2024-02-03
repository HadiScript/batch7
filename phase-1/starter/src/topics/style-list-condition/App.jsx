import MyProps from "./MyProps";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h6>Here is the rendring </h6>
      <hr />

      <MyProps heading={"My Props"} num={2} arr={[1, 2, 3, 4]} />
      <MyProps heading={"My Props2"} num={2} arr={[10, 20, 30, 40, 50]} />
    </div>
  );
};

export default App;
