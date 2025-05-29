const Numbers = ({ persons, deleteNote }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name}
          {person.number ? " - " + person.number : ""}
          <button onClick={() => deleteNote(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Numbers;
