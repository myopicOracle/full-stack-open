import "./App.css";
import Note from "./components/Note"

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((item, index) => (
          <Note key={item.id} note={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
