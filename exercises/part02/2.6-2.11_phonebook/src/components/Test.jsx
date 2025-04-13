const lowerSplit = (name) => name.toLowerCase().split("");

const test = "Arto".toLowerCase().split("")
console.log(test);

const inputLength = [1,2,3].length
const test3 = [0,1,2,3,4,5,6,7,8,9].slice(0, inputLength + 1)
console.log(test3);

const testInput = ["a","r","t"]

console.log(persons)

const test2 = persons.filter(
  (person) => {
    // console.log(lowerSplit(person.name));
    console.log(lowerSplit(person.name).slice(0, testInput.length).join(""));
    console.log(testInput.join(""));
    // console.log(testInput.length)
    console.log(lowerSplit(person.name).slice(0, testInput.length).join("") === testInput.join(""));
    return lowerSplit(person.name).slice(0, testInput.length).join("") === testInput.join("")
  }
);
console.log(test2);