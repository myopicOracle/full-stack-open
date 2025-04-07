export default function History(props) {
  if (props.allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  } else {
    return (
      <div>
        <p>button press history: {props.allClicks.join(' ')}</p>
      </div>
    )
  }
}