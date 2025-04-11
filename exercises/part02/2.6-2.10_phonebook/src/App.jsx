import { useState } from "react";
import Numbers from "./Numbers";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [displayNames, setDisplayNames] = useState(persons)
  const [searchInput, setSearchInput] = useState("")

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
            }
          ]
          setDisplayNames(newArray)
          return newArray
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

  const lowerSplit = (name) => name.toLowerCase().split("");


  // const test = "Arto".toLowerCase().split("")
  // console.log(test);
  
  const inputLength = [1,2,3].length
  const test3 = [0,1,2,3,4,5,6,7,8,9].slice(0, inputLength + 1)
  console.log(test3);

  const testInput = ["a","r","t"]
  
  console.log(persons)

  const test2 = persons.filter(
    (person) => {
      // console.log(lowerSplit(person.name));
      console.log(lowerSplit(person.name).slice(0, testInput.length).join(""));
      console.log(testInput.join(""));
      // console.log(testInput.length)
      console.log(lowerSplit(person.name).slice(0, testInput.length).join("") === testInput.join(""));
      return lowerSplit(person.name).slice(0, testInput.length).join("") === testInput.join("")
    }
  );
  console.log(test2);


  const handleSearch = (e) => {
    const input = e.target.value;
    console.log(input);
    setSearchInput(input)
    const inputSplit = lowerSplit(input)
    console.log(inputSplit);
    const inputLength = inputSplit.length
    console.log(inputLength);
    const searchResults = persons.filter(
      (person) => lowerSplit(person.name).slice(0, inputSplit.length).join("") === inputSplit.join("")
    );
    setDisplayNames(searchResults)
  };

  return (
    <div>
      <h3>
        <strong>Search by name: </strong>
      </h3>
      <input type="text" onChange={handleSearch} />
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input type="text" value={newName} onChange={handleName} required />
        </div>
        <div>
          phone:
          <input type="tel" value={newPhone} onChange={handlePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug name: {newName}</div>
      <div>debug phone: {newPhone}</div>
      {/* <div>input after split: {inputSplit}</div> */}
      {/* <div>debug input length: {inputLength}</div> */}
      <h2>Numbers</h2>
      <Numbers persons={displayNames} />
    </div>
  );
};

export default App;
