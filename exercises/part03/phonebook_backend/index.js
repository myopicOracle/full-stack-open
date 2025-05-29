import express from 'express'

const app = express()
app.use(express.json())

let body = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>")
})

// 3.1: Phonebook backend step 1
app.get("/api/persons", (req, res) => {
  res.json(body)
})

// 3.2: Phonebook backend step 2
app.get("/info", (req, res) => {
  const number = body.length
  const text = `Phonebook has info for ${number} people`
  const timestamp = new Date()
  res.send(`
    <p>${text}</p>
    <p>${timestamp}</p>
  `)
})

// 3.3: Phonebook backend step 3
app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const person = body.find(dude => dude.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
  
})

// 3.4: Phonebook backend step 4
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const updatedBody = body.filter(dude => dude.id !== id)
  res.json(updatedBody)
})

// 3.5: Phonebook backend step 5
app.post("/api/persons", (req, res) => {
  const generateId = () => Math.random() * 100

  const { name, number } = req.body

  const newPerson = {
    id: generateId(),
    name: name, 
    number: number
  }

  const updatedBody = body.concat(newPerson)

  res.json(updatedBody)
})

// 3.6: Phonebook backend step 6



const PORT = 3001
app.listen(3001)
console.log(`Server running on Port ${PORT}`)