// ### *Key*: 
// #### *() => {}* *This is a function*
// #### *() => () => {}* *This is a function within a function*
import { useState } from "react"

const Button = ({ action, setToValue }) => {
  return (
    <button onClick={setToValue}>{action}</button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  
  return (
    <div>

      {value}

      <Button action={'thousand'} setToValue={() => setToValue(1000)} />
      <Button action={'reset'} setToValue={() => setToValue(0)} />
      <Button action={'increment'} setToValue={() => setToValue(value + 1)} />

      {/* Extracted to Button component */}
      {/* <button onClick={setToValue(1000)}>thousand</button> */}
      {/* <button onClick={setToValue(0)}>reset</button> */}
      {/* <button onClick={setToValue(value + 1)}>increment</button> */}
    </div>
  )
}

export default App
