import { useState } from "react";
import Numbers from "./Numbers";
import Search from "./Search";
import Form from "./Form";
import Debug from "./Debug";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [displayNames, setDisplayNames] = useState(persons);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // persons.includes(() => newName)
    // persons.every((person) => person.name !== newName)
    newName === "Arto Hellas"
      ? window.alert(`Arto Hellas is already added to phonebook`)
      : persons.some((person) => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons((prevPerson) => {
          const newArray = [
            ...prevPerson,
            {
              name: newName,
              number: newPhone,
            },
          ];
          setDisplayNames(newArray);
          return newArray;
        });
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

  const handleSearch = (e) => {
    const input = e.target.value;
    console.log(input);
    setSearchInput(input);
    const inputSplit = lowerSplit(input);
    console.log(inputSplit);
    const inputLength = inputSplit.length;
    console.log(inputLength);
    const searchResults = persons.filter(
      (person) =>
        lowerSplit(person.name).slice(0, inputSplit.length).join("") ===
        inputSplit.join("")
    );
    setDisplayNames(searchResults);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <h2>Phonebook</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleName={handleName}
        newPhone={newPhone}
        handlePhone={handlePhone}
      />
      <Debug newName={newName} newPhone={newPhone} />
      <h2>Numbers</h2>
      <Numbers persons={displayNames} />
    </div>
  );
};

export default App;
