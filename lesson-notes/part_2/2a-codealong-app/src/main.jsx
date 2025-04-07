import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import notesArray from './components/notesarray'

const notes = notesArray

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)
