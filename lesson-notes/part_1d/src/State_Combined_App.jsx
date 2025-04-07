import { useState } from "react";
import "./App.css";

const App = () => {
  // Refactored to single useState()
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  function handleClickLeft() {
    setClicks({ ...clicks, left: clicks.left + 1 });
  }

  function handleClickRight() {
    setClicks({ ...clicks, right: clicks.right + 1 });
  }

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <div>
        {clicks.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {clicks.right}
      </div>
    </>
  );
};

export default App;
