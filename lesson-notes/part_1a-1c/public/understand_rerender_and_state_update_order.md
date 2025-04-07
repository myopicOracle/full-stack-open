# The Order and Timing of State Updates Based on Rerendering

## Changes in state cause re-rendering

### Let's go over the main principles of how an application works once more.

When the application starts, the code in App is executed. This code uses a useState hook to create the application state, setting an initial value of the variable counter. This component contains the Display component - which displays the counter's value, 0 - and three Button components. The buttons all have event handlers, which are used to change the state of the counter.

When one of the buttons is clicked, the event handler is executed. The event handler changes the state of the App component with the setCounter function. Calling a function that changes the state causes the component to re-render.

So, if a user clicks the plus button, the button's event handler changes the value of counter to 1, and the App component is re-rendered. This causes its subcomponents Display and Button to also be re-rendered. Display receives the new value of the counter, 1, as props. The Button components receive event handlers which can be used to change the state of the counter.

To be sure to understand how the program works, let us add some console.log statements to it.

```Javascript
const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {

    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 

    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {

    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
} 
```

### Output Log

23:11:28.549 Navigated to http://127.0.0.1:5173/

23:11:29.095 Removing unpermitted intrinsics 
lockdown-install.js:1:52832

23:11:30.104 rendering with counter value 0 
App.jsx:8:10

23:11:30.105 rendering with counter value 0 
<anonymous code>:1:148389
23:11:34.432 increasing, value before 0 
App.jsx:11:12

23:11:34.433 rendering with counter value 1 
App.jsx:8:10

23:11:34.436 rendering with counter value 1 
<anonymous code>:1:148389
23:11:34.657 increasing, value before 1 
App.jsx:11:12

23:11:34.658 rendering with counter value 2 
App.jsx:8:10

23:11:34.659 rendering with counter value 2 
<anonymous code>:1:148389
23:11:34.890 increasing, value before 2 
App.jsx:11:12

23:11:34.892 rendering with counter value 3 
App.jsx:8:10

23:11:34.892 rendering with counter value 3 
<anonymous code>:1:148389
23:11:37.738 decreasing, value before 3 
App.jsx:16:12

23:11:37.744 rendering with counter value 2 
App.jsx:8:10

23:11:37.747 rendering with counter value 2 
<anonymous code>:1:148389
23:11:37.910 decreasing, value before 2 
App.jsx:16:12

23:11:37.911 rendering with counter value 1 
App.jsx:8:10

23:11:37.912 rendering with counter value 1 
<anonymous code>:1:148389
23:11:38.158 decreasing, value before 1 
App.jsx:16:12

23:11:38.159 rendering with counter value 0 
App.jsx:8:10

23:11:38.160 rendering with counter value 0 
<anonymous code>:1:148389
23:11:41.016 increasing, value before 0 
App.jsx:11:12

23:11:41.016 rendering with counter value 1 
App.jsx:8:10

23:11:41.017 rendering with counter value 1 
<anonymous code>:1:148389
23:11:41.206 increasing, value before 1 
App.jsx:11:12

23:11:41.207 rendering with counter value 2 
App.jsx:8:10

23:11:41.207 rendering with counter value 2 
<anonymous code>:1:148389
23:11:41.383 increasing, value before 2 
App.jsx:11:12

23:11:41.383 rendering with counter value 3 
App.jsx:8:10

23:11:41.384 rendering with counter value 3 
<anonymous code>:1:148389
23:11:41.573 increasing, value before 3 
App.jsx:11:12

23:11:41.574 rendering with counter value 4 
App.jsx:8:10

23:11:41.575 rendering with counter value 4 
<anonymous code>:1:148389
23:11:41.772 increasing, value before 4 
App.jsx:11:12

23:11:41.773 rendering with counter value 5 
App.jsx:8:10

23:11:41.774 rendering with counter value 5 
<anonymous code>:1:148389
23:11:43.880 resetting to zero, value before 5 
App.jsx:21:12

23:11:43.881 rendering with counter value 0 
App.jsx:8:10

23:11:43.881 rendering with counter value 0 
<anonymous code>:1:148389
23:11:44.653 increasing, value before 0 
App.jsx:11:12

23:11:44.654 rendering with counter value 1 
App.jsx:8:10

23:11:44.654 rendering with counter value 1 
<anonymous code>:1:148389
23:11:45.105 decreasing, value before 1 
App.jsx:16:12

23:11:45.105 rendering with counter value 0 
App.jsx:8:10

23:11:45.106 rendering with counter value 0 
<anonymous code>:1:148389
23:11:45.463 increasing, value before 0 
App.jsx:11:12

23:11:45.464 rendering with counter value 1 
App.jsx:8:10

23:11:45.464 rendering with counter value 1 
<anonymous code>:1:148389
23:11:45.845 decreasing, value before 1 
App.jsx:16:12

23:11:45.847 rendering with counter value 0 
App.jsx:8:10

23:11:45.847 rendering with counter value 0 
<anonymous code>:1:148389
