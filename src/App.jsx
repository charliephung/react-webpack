import React from "react";

const a = import("./Test").then(res => {
  console.log(res);
});

const App = () => {
  return <div>Hello React!</div>;
};

export default App;
