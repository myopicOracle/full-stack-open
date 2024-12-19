const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}


const App = () => {
  return (
    <>
      <Header course="Half Stack application development" />
      <Part part="Fundamentals of React" exercises="10" />
      <Part part="Using props to pass data" exercises="7" />
      <Part part="State of a component" exercises="14" />
      <Total total={10 + 7 + 14} />
    </>
  )
}

export default App