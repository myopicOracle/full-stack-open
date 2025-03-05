import { useState } from "react";

const App = () => {
  console.log("Ladies and gentlemen, we have begun a rerender..."); // *LOG*

  const [renderCount, setRenderCount] = useState(1);
  console.log(
    "We have now rendered ",
    renderCount,
    " times, Make sure Math.random() isn't 'sticking' to a number."
  ); // *LOG*

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const shallowCopy = [...anecdotes];

  const [anecdote, setAnecdote] = useState(anecdotes[0]);

  const [objectArray, setObjectArray] = useState(() =>
    shallowCopy.map((item, index) => {
      return { id: index, anecdote: item, votes: 0 };
    })
  );
  console.log("The last state of the objectArray object was: ", objectArray);

  const votes = objectArray.find((item) => item.anecdote === anecdote)?.votes;

  const handleClickNext = () => {
    const randomIndex = Math.ceil(Math.random() * objectArray.length) - 1;
    console.log("The new random number is: ", randomIndex); // *LOG*

    setAnecdote(anecdotes[randomIndex]);

    setRenderCount(renderCount + 1); // this is not necessary for the App, purely for debugging randomIndex / Math.random()
    console.log(
      "The Next button event listener worked and we have finished evaluating this event handler fn"
    ); // *LOG*
  };

  const handleClickVote = () => {
    const updatedObjectArray = objectArray.map((item) => {
      return item.anecdote === anecdote
        ? { ...item, votes: item.votes + 1 }
        : item;
    });
    setObjectArray(updatedObjectArray);
    console.log(
      "The number of votes for { ",
      anecdote,
      " } is now [",
      votes,
      "]"
    ); // *LOG*
    console.log(
      "The Vote button event listener worked, we've now evaluated the event handler fn"
    ); // *LOG*
  };

  const mostVotes = objectArray.reduce((max, current) =>
    current.votes > max.votes ? current : max
  );
  console.log(mostVotes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {votes ? (
        <>
          <h2>
            <em>{anecdote}</em>
          </h2>
          <h3>has {votes} votes</h3>
        </>
      ) : (
        <p>Click one of the buttons below!</p>
      )}
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {votes && (
        <>
          <p>{mostVotes.anecdote}</p>
          <p>{mostVotes.votes}</p>
        </>
      )}
    </div>
  );
};

export default App;
