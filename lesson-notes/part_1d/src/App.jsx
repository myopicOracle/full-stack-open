import { useState } from "react";
import "./App.css";
import History from "./History";
import Button from './Button'

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClickLeft = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    setTotal(total + 1);
  };

  const handleClickRight = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(total + 1);
  };

  const handleReset = () => {
    setLeft(0);
    setRight(0);
    setAll([]);
    setTotal(0);
  };

  // debugger

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <div>
        <History allClicks={allClicks} />
      </div>
      <div>
        {left}
        <Button text={'left'} onClick={handleClickLeft} />
        <Button text={'right'} onClick={handleClickRight} />
        {/* <button onClick={handleClickLeft}>left</button> */}
        {/* <button onClick={handleClickRight}>right</button> */}
        {right}
      </div>
      <div>
        <h3>{total}</h3>
      </div>
      <div>
      <Button text={'reset'} onClick={handleReset} />
        {/* <button onClick={handleReset}>reset</button> */}
      </div>
    </>
  );
};

export default App;
