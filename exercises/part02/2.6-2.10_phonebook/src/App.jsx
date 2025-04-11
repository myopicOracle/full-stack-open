import { useState } from "react";
import Numbers from "./Numbers";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: "040-1234567",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // persons.includes(() => newName)
    // persons.every((person) => person.name !== newName)
    newName === "Arto Hellas"
      ? window.alert(`Arto Hellas is already added to phonebook`)
      : persons.some((person) => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons((prevPerson) => [
          ...prevPerson,
          {
            name: newName,
            phone: newPhone,
          },
        ]);
    setNewName("");
    setNewPhone("");
  };

  const handleName = (e) => {
    const input = e.target.value;
    setNewName(input);
  };

  const handlePhone = (e) => {
    const input = e.target.value;
    setNewPhone(input);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input type="text" value={newName} onChange={handleName} />
        </div>
        <div>
          phone:
          <input type="tel" value={newPhone} onChange={handlePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
