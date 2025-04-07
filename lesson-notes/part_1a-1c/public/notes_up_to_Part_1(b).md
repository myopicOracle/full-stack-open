```Javascript
import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Gary!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))

///////////////////////////////////////////////////////////////////////
// https://fullstackopen.com/en/part1/java_script
// (1b) JavaScript

// console.log("cat")

const log = console.log

// log("mouse")

/*

const t = [1, -1, 3]
const array = []; 
t.forEach(item => {
  array.push(item * 2); 
});
// console.log(array)

// t.forEach((item, index) => {console.log(`array[${index}] = ${item}`)});

// console.log(t)

// log(t.concat(10, 5, 8))
// log(t.concat([10, 5, 8]))
// log(t.concat({key: 18}))

// log(t.map(item => item * 2))
// log(t)
// t.forEach(item => log(item * 2))
// log(t)

// const arrayDestructure = [1,2,3,4,5,6,7,8]
// const [first, second, ...others] = arrayDestructure
// log(first)
// log(second)
// log(others)

// const obj1 = {key: { type: "poop", size: "large", description: "log"}, key2: "poop", key3: "poop"}
// log(obj1)
// const {key, key2, key3} = obj1
// log(key)
// log(key2)
// log(key3)

// const object1 = {
//   name: 'Arto Hellas',
//   age: 35,
//   education: 'PhD',
// }

// const object2 = {
//   name: 'Full Stack web application development',
//   level: 'intermediate studies',
//   size: 5,
// }

// const object3 = {
//   name: {
//     first: 'Dan',
//     last: 'Abramov',
//   },
//   grades: [2, 3, 5, 3],
//   department: 'Stanford University',
// }

// log(object1.name)         // Arto Hellas is printed
// const fieldName = 'age'
// log(object1.fieldName)    // undefined b/c string - e.g. object1."fieldName"
// log(object1[fieldName])    // 35 is printed

// object1.address = 'Helsinki'
// object1['secret number'] = 12341 // secret number: 12341
// const vessel = "employee id" 
// object1[vessel] = 647323 // employee id: 647323
// log(object1)

// object1.name = 'Mickey Mouse'
// log(object1.name)
// log(object1)

// const ageVariable = 28
// object1.age = ageVariable
// log(object1)


// OBJECTS

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name)
  },

  doAddition: function(a, b) {
    console.log(a + b)
  },

  doMultiplication: function(a, b) {
    console.log(a * b)
  }
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed\
arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed

arto.doAddition(1, 4)        // 5 is printed
const referenceToAddition = arto.doAddition     // Method Reference
referenceToAddition(10, 15)   // 25 is printed

arto.doMultiplication(10, 10)
const methodReferencedoMulitiplication = arto.doMultiplication
methodReferencedoMulitiplication(20, 20)

// 'this' has Scoped memory, becomes global when called through Method Reference
arto.greet()       // "hello, my name is Arto Hellas" gets printed

// const referenceToGreet = arto.greet
  // referenceToGreet() // prints "hello, my name is undefined"

  // setTimeout(arto.greet, 1000) // also undefined, refers to global 'this'

// Solution --> BIND
setTimeout(arto.greet.bind(arto), 1000)


// MDN DOC - CLASSES - TYPES OF DECLARATION
  // Declaration
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  // Expression; the class is anonymous but assigned to a variable
  const Rectangle1 = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

  // Expression; the class has its own name
  const Rectangle2 = class Rectangle3 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

  // Methods
  class Rectangle4 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle4(10, 10);


// Review: OBJECT CONSTRUCTORS
const Individual = function (name, age) {
  this.name = name
  this.age = age
  
  this.greet = () => {
    console.log('hello, my name is ' + this.name)
  }
}

const rufus = new Individual("Rufus", 26)
console.log(rufus)
rufus.greet()

const margo = new Individual("Margo", 31)
console.log(margo)
margo.greet()
  

// CLASSES 
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()

///////////////////////////////////////////////////////////////////////

  */

///////////////////////////////////////////////////////////////////////
// https://fullstackopen.com/en/part1/component_state_event_handlers

// ========== (1c) Component state, event handlers ========== 


```