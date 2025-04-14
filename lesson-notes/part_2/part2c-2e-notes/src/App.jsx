import { useState, useEffect } from "react";
import axios from 'axios'
import Note from "./components/Note";


const App = () => {
  const [notes, setNotes] = useState([]);
  const [contentVal, setContentVal] = useState("");
  const [importanceVal, setImportanceVal] = useState("");
  const [showAll, setShowAll] = useState(true);


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  // Purposefully verbose for more context when re-reading later
  const filteredNotes = notes.filter((note, index) => {
    return note.important === true;
  });

  const showNotes = showAll ? notes : filteredNotes;

  const addNote = (e) => {

    e.preventDefault();

    const newNoteObject = {
      "content": contentVal,
      "important": importanceVal
    }

    axios
      .post('http://localhost:3001/persons', newNoteObject)
      .then(response => console.log(response))

    setContentVal("");
    setImportanceVal("");
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
          <Note key={note.id} note={note} />
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