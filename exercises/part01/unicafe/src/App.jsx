import { useState } from 'react'
import './App.css'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Header title='give feedback' />
        <Button text='good' onClick={handleClickGood} />
        <Button text='neutral' onClick={handleClickNeutral} />
        <Button text='bad' onClick={handleClickBad} />
      <Header title='statistics' />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
    </>
  )
}

export default App
