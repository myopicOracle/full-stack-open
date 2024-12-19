const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.courseinfo[0].name}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.courseinfo[1].parts[0].name} {props.courseinfo[1].parts[0].exercises}</p>
      <p>{props.courseinfo[1].parts[1].name} {props.courseinfo[1].parts[1].exercises}</p>
      <p>{props.courseinfo[1].parts[2].name} {props.courseinfo[1].parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.courseinfo[1].parts[0].exercises + props.courseinfo[1].parts[1].exercises + props.courseinfo[1].parts[2].exercises}</p>
    </>
  )
}


const App = () => {
  const courseinfo = [
    {
      name: 'Half Stack application development',
    },
    {
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  ]

  return (
    <div>
      <Header courseinfo={courseinfo} />
      <Content courseinfo={courseinfo} />
      <Total courseinfo={courseinfo} />
    </div>
  )
}

export default App

