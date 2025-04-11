import { useState } from 'react'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // persons.includes(() => newName)
    // persons.every((person) => person.name !== newName)
    newName === 'Arto Hellas'
      ? window.alert(`Arto Hellas is already added to phonebook`)
      : persons.some((person) => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : (setPersons((prevPerson) => ([
          ...prevPerson,
          {
            name: newName
          }
        ])))
      setNewName('')
  }

  const handleInput = (e) => {
    const nameInput = e.target.value
    setNewName(nameInput)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
            <input 
              type='text' 
              value={newName} 
              onChange={handleInput} 
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div> 
      <h2>Numbers</h2>
        <Numbers persons={persons} />
    </div>
    
  )
}

export default App