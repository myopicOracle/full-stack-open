const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>{person.name}{person.phone ? " - " + person.phone : ""}</li>
      ))}
    </ul>
  )
}

export default Numbers