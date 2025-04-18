import { useState, useEffect } from "react";
import axios from 'axios'
import Note from "./components/Note";
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([]);
  const [contentVal, setContentVal] = useState("");
  const [importanceVal, setImportanceVal] = useState("");
  const [showAll, setShowAll] = useState(true);
  const showNotes = showAll ? notes : filteredNotes;

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        setNotes(response)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  // Purposefully verbose for more context when re-reading later
  const filteredNotes = notes.filter((note) => {
    return note.important === true;
  });


  const addNote = (e) => {
    e.preventDefault();
    const newNoteObject = {
      "content": contentVal,
      "important": importanceVal
    }
    
    noteService
      .create(newNoteObject)
      .then(response => {
        setNotes(notes.concat(response))
        setContentVal("");
        setImportanceVal("");
      })
  };

  const handleContent = (e) => {
    const valueOnChange = e.target.value;
    setContentVal(valueOnChange);
  };

  const handleImportance = (e) => {
    const valueOnChange = e.target.value;
    const newImportanceVal = valueOnChange === "true" ? true : false;
    setImportanceVal(newImportanceVal);
  };

  const toggleImportance = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    
    console.log(`You toggled me! My id is -- ${id}`);
    console.log(`I used to be '${note.important}', but now I'm '${changedNote.important}'`);

    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id === id ? response : note))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  // RETURN BELOW

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1.2rem 2rem",
        margin: "3rem",
        backgroundColor: "slategray",
        color: "beige",
        fontFamily: "monospace",
        position: "relative",
      }}
    >
      <button
        onClick={() => setShowAll(!showAll)}
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "100px",
          margin: "20px auto 0 auto",
          padding: "10px 5px",
          fontSize: "10px",
          fontWeight: "700"
        }}
      >
        Show {showAll ? "Important" : "All"}
      </button>
      <h1>Notes</h1>
      <h3>
        {new Date(Date.now()).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </h3>
      <ul>
        {showNotes.map((note) => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />
        ))}
      </ul>
      <form
        onSubmit={addNote}
        style={{
          display: "grid",
          gridGap: "20px",
          alignContent: "center",
          padding: "40px",
        }}
      >
        <label htmlFor="note-content">Enter New Item: </label>
        <input
          id="note-content"
          type="text"
          value={contentVal}
          onChange={handleContent}
        />
        <label htmlFor="note-importance">Enter Importance: </label>
        <select
          id="note-importance"
          type="text"
          value={importanceVal}
          onChange={handleImportance}
        >
          <option value="">--Select True or False--</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <button
          type="submit"
          style={{ width: "200px", margin: "20px auto 0 auto" }}
        >
          Send It!
        </button>
      </form>
    </div>
  );
};

export default App;

// Note: NTD is move elements to separate components and pass props