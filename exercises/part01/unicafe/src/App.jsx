import { useState } from 'react'
import './App.css'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Rating = ({ text, rating }) => <p>{text} {rating}</p>

function App() {
  const [rating, setRating] = useState({ 
    good: 0, 
    neutral: 0, 
    bad: 0 
  })
  // console.log(rating.good, rating.neutral, rating.bad, rating, setRating)

  return (
    <>
      <Header title='give feedback' />
        {/* Remember that when changing state that is OBJECT, can't just change 1 when using setState() */}
        <Button text='good' onClick={() => setRating({ ...rating, good: rating.good + 1 })} />
        <Button text='neutral' onClick={() => setRating({ ...rating, neutral: rating.neutral + 1 })} />
        <Button text='bad' onClick={() => setRating({ ...rating, bad: rating.bad + 1 })} />
            {/* {console.log(rating.good, rating.neutral, rating.bad, rating, setRating)} */}

      <Header title='statistics' />
        <Rating text='good' rating={rating.good} />
        <Rating text='neutral' rating={rating.neutral} />
        <Rating text='bad' rating={rating.bad} />
            {/* {console.log(rating.good, rating.neutral, rating.bad, rating, setRating)} */}
    </>
  )
}

export default App
