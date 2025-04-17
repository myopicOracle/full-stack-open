import axios from "axios";

const url = 'http://localhost:3001/persons'

const getNotesFromServer = () => {
  return axios.get(url)
}

const createNote = (newNoteObj) => {
  return axios.post(url, newNoteObj)
}

const changeNote = (id, newNoteObj) => {
  return axios.put(`${url}/${id}`, newNoteObj)
}

const deleteNote = (id) => {
  return axios.delete(`${url}/${id}`)
}

export default { 
  getNotesFromServer: getNotesFromServer, 
  createNote: createNote, 
  changeNote: changeNote, 
  deleteNote:  deleteNote,
}

// const serverActions = { 
//   getNotesFromServer: getNotesFromServer, 
//   createNote: createNote, 
//   changeNote: changeNote, 
// }

// export default serverActions

// export { getNotesFromServer, createNote, changeNote }