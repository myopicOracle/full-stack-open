import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [contentVal, setContentVal] = useState("");
  const [importanceVal, setImportanceVal] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        content: contentVal,
        important: importanceVal,
      },
    ]);
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
        fontFamily: "monospace",
        borderRadius: "5px",
        margin: "3rem",
        padding: "30px",
        backgroundColor: "slategray",
        color: "beige",
      }}
    >
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
        {notes.map((note) => (
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
