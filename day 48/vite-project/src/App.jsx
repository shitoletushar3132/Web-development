import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winningSum={15} winCondition={winCondition} />
    </>
  );
}

export default App;
