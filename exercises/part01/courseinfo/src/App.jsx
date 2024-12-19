

const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <p>
        Copyright <a href="https://github.com/myopicOracle/">GaryXia</a> 2024
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  )
}

export default App


// DO NOT Render Objects!
/*
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} is now {friends[0].age} years old.</p>
      <p>{friends[1].name} is now {friends[1].age} years old.</p>
    </div>
  )
}
*/