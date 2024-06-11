import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import LikeCount from "./likeCount";

function App() {
  return (
    <>
      <h1>States in React</h1>
      <LikeCount />
    </>
  );
}

export default App;
