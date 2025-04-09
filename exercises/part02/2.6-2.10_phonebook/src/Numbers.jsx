const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))}
    </ul>
  )
}

export default Numbers