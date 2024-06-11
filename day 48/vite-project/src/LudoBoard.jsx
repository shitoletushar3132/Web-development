import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    setMoves((prevMOves) => {
      return { ...prevMOves, blue: prevMOves.blue + 1 };
    });
  };
  return (
    <div>
      <h2>hello</h2>
      <div className="board">
        <p>Blue moves= {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves= {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }}>+1</button>
        <p>Green moves={moves.green} </p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves= {moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
