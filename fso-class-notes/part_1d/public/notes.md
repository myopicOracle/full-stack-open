*Cardinal Sins*

## Changing state has to always be done by setting the state to a new object.

### It is Forbidden in React to mutate state directly. 

*If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object and setting that as the new state.*

---
---

# Multiple Pieces of State
https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#complex-state

## Combining 2 useState() into 1

### Multiple Pieces
```Javascript
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
```

### One Piece
```Javascript
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
```

## Simplifying with { ...object } The ... Spread Operator

The syntax may seem a bit strange at first. 
In practice { ...clicks } creates a new object that has copies of all of the properties of the clicks object. When we specify a particular property - e.g. right in { ...clicks, right: 1 }, the value of the right property in the new object will be 1.

### Without using spread operator
```Javascript
  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }
```

### Using Spread Operator
```Javascript
const handleLeftClick = () => {
  const newClicks = { 
    ...clicks, 
    left: clicks.left + 1 
  }
  setClicks(newClicks)
}

const handleRightClick = () => {
  const newClicks = { 
    ...clicks, 
    right: clicks.right + 1 
  }
  setClicks(newClicks)
}
```

### Further simplifying by removing variable assignment
```Javascript
const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })
```


---
---

## Why .push Doesn't Work in React State Updates

The reason `.push` doesn't work in this case, while `.concat` does, is due to the fundamental differences between how these two methods operate and how React's state management works.

### Key Differences Between `.push` and `.concat`:
1. **Mutability**:
   - `.push` is a mutable method. It modifies the original array by adding an element to the end of it and returns the new length of the array.
   - `.concat` is an immutable method. It creates a new array by combining the original array with the new element(s) and returns the new array without modifying the original.

2. **Return Value**:
   - `.push` returns the new length of the array (a number), not the array itself.
   - `.concat` returns a new array, which is what you need for React state updates.

### Why `.push` Doesn't Work in React State Updates:
In React, state updates must be immutable. When you call `setAll` (or any state setter function), React expects a new value to compare with the previous state to determine if a re-render is necessary. If you use `.push`, you're mutating the existing state directly, and React won't detect any change because the reference to the array remains the same. This can lead to unexpected behavior and no re-renders.

For example:
```javascript
const handleClickLeft = () => {
  allClicks.push('L'); // Mutates the existing array
  setAll(allClicks);  // This won't trigger a re-render because the reference is the same
  setLeft(left + 1);
};
```

### Why `.concat` Works:
`.concat` creates a new array, which ensures that the state update is immutable. React can detect that the reference to the array has changed and will trigger a re-render.

For example:
```javascript
const handleClickLeft = () => {
  setAll(allClicks.concat('L')); // Creates a new array
  setLeft(left + 1);
};
```

### Correct Approach:
If you want to use `.push`-like behavior while maintaining immutability, you can use the spread operator (`...`) to create a new array:

```javascript
const handleClickLeft = () => {
  setAll([...allClicks, 'L']); // Creates a new array with the new element
  setLeft(left + 1);
};
```

This approach is functionally equivalent to `.concat` and ensures that React's state management works as expected.


---
---

## Event Handlers - How to Execute a Function Call

```Javascript
<button onClick={() => console.log('clicked the button')}>
  button
</button>
```

```Javascript
<button onClick={() => setValue(0)}>button</button>
```

Sure! While function expressions and declarations are longer, we can write them more concisely within the `onClick` attribute by omitting the function name in both cases.

### **Simplified Function Expression:**
```javascript
<button onClick={function() {
  console.log('clicked the button');
}}>
  button
</button>
```

### **Simplified Function Declaration:**
Even though it's unusual, you can still write it like this:
```javascript
<button onClick={function handleClick() {
  console.log('clicked the button');
}}>
  button
</button>
```

These are as close as you can get to the simplicity of the arrow syntax `() => {}` while still adhering to function expression and function declaration forms.

---
---

## A Function That Returns a Function
https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#a-function-that-returns-a-function

### *Key*: 
#### **() => {}** **This is a function**
#### **() => () => {}** **This is a function within a function**

### *Choosing between the two presented ways of defining your event handlers is mostly a matter of taste.*

---

Another way to define an event handler is to use a function that returns a function.

You probably won't need to use functions that return functions in any of the exercises in this course. If the topic seems particularly confusing, you may skip over this section for now and return to it later.

Let's make the following changes to our code:

```javascript
const App = () => {
  const [value, setValue] = useState(10);

  const hello = () => {
    const handler = () => console.log('hello world');
    return handler;
  };

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  );
};
```

The code functions correctly even though it looks complicated.

The event handler is now set to a function call:

```javascript
<button onClick={hello()}>button</button>
```

Earlier on we stated that an event handler may not be a call to a function and that it has to be a function or a reference to a function. Why then does a function call work in this case?

When the component is rendered, the following function gets executed:

```javascript
const hello = () => {
  const handler = () => console.log('hello world');
  return handler;
};
```

The return value of the function is another function that is assigned to the handler variable.

When React renders the line:

```javascript
<button onClick={hello()}>button</button>
```

It assigns the return value of `hello()` to the `onClick` attribute. Essentially the line gets transformed into:

```javascript
<button onClick={() => console.log('hello world')}>
  button
</button>
```

Since the `hello` function returns a function, the event handler is now a function.

### What's the Point of This Concept?

Let's change the code a tiny bit:

```javascript
const App = () => {
  const [value, setValue] = useState(10);

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who);
    };
    return handler;
  };

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  );
};
```

Now the application has three buttons with event handlers defined by the `hello` function that accepts a parameter.

The first button is defined as:

```javascript
<button onClick={hello('world')}>button</button>
```

The event handler is created by executing the function call `hello('world')`. The function call returns the function:

```javascript
() => {
  console.log('hello', 'world');
};
```

The second button is defined as:

```javascript
<button onClick={hello('react')}>button</button>
```

The function call `hello('react')` that creates the event handler returns:

```javascript
() => {
  console.log('hello', 'react');
};
```

Both buttons get their individualized event handlers.

Functions returning functions can be utilized in defining generic functionality that can be customized with parameters. The `hello` function that creates the event handlers can be thought of as a factory that produces customized event handlers meant for greeting users.

Our current definition is slightly verbose:

```javascript
const hello = (who) => {
  const handler = () => {
    console.log('hello', who);
  };

  return handler;
};
```

Let's eliminate the helper variables and directly return the created function:

```javascript
const hello = (who) => {
  return () => {
    console.log('hello', who);
  };
};
```

Since our `hello` function is composed of a single return command, we can omit the curly braces and use the more compact syntax for arrow functions:

```javascript
const hello = (who) =>
  () => {
    console.log('hello', who);
  };
```

Lastly, let's write all of the arrows on the same line:

```javascript
const hello = (who) => () => {
  console.log('hello', who);
};
```

We can use the same trick to define event handlers that set the state of the component to a given value. Let's make the following changes to our code:

```javascript
const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    console.log('value now', newValue); // print the new value to console
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  );
};
```

When the component is rendered, the `thousand` button is created:

```javascript
<button onClick={setToValue(1000)}>thousand</button>
```

The event handler is set to the return value of `setToValue(1000)` which is the following function:

```javascript
() => {
  console.log('value now', 1000);
  setValue(1000);
};
```

The `increase` button is declared as follows:

```javascript
<button onClick={setToValue(value + 1)}>increment</button>
```

The event handler is created by the function call `setToValue(value + 1)` which receives as its parameter the current value of the state variable `value` increased by one. If the value of `value` was 10, then the created event handler would be the function:

```javascript
() => {
  console.log('value now', 11);
  setValue(11);
};
```

---
---

## Define a Component Simply (Minimal)

```javascript
const Display = props => <div>{props.value}</div>
```

---
---

##