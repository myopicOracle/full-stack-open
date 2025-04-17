const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}{person.number ? " - " + person.number : ""}</li>
      ))}
    </ul>
  )
}

export default Numbers