import { useState } from 'react'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons((prevPerson) => ([
      ...prevPerson,
      {
        name: newName
      }
    ]))
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