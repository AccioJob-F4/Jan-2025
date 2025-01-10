// Arrays --> 0 indexed
// let fruits = ["apple", "banana", "cherry", "kiwi"];

// let mixedElements = [
//   "Divyansh",
//   2,
//   1.8,
//   true,
//   null,
//   undefined,
//   ["Divyansh", 2, 1.8, true],
// ];
// console.log("🚀 ~ mixedElements:", mixedElements[6][1]);

// Push --> Adds an element in an array at the end of the array
// fruits.push("orange");
// fruits.push("Pineapple");
// fruits.push("apple");

// console.log("🚀 ~ push:", fruits);

// Pop --> Removes an element from an array from the end and returns the removed element
// let poppedFruit = fruits.pop();
// console.log("🚀 ~ pop:", fruits, poppedFruit);

// unshift --> Adds an element in the array at the start of the array
// fruits.unshift("guava");
// console.log("🚀 ~ unshift:", fruits);

// shift --> Remove the first element of the array
// const removedElement = fruits.shift();
// console.log("🚀 ~ shift:", fruits, removedElement);

// Iterate over an array
// forEach(()=>{}) --> this method lets you execute a function for each array element
// fruits.forEach((divyansh, sudeep) => {
//   if (divyansh.length > 5)
//     console.log(
//       divyansh,
//       " -- Length more than 5 at position: ",
//       sudeep,
//       "-- length: ",
//       divyansh.length
//     );
//   else
//     console.log(
//       divyansh,
//       " -- Length less than 5 at position: ",
//       sudeep,
//       "-- length: ",
//       divyansh.length
//     );
// });

// filter -- this method creates a new array with elements that passes a test/condition
// let longFruits = fruits.filter((fruit) => {
//   if (fruit.length < 5) return fruit;
// });

// console.log(fruits);
// console.log(longFruits);

// map -- this method also creates a new array with elements that pass a test/condition. map always returns something
// let longFruits = fruits.map((fruit, idx) => {
//   if (fruit.length > 5) return fruit;
// });

// console.log(fruits);
// console.log(longFruits);

// reduce

// Array.reduce((accumulator, elem) => {}, initialValue);

// let totalLength = fruits.reduce((sum, fruit) => {
//   console.log("Current Sum : ", sum, " , Current fruit: ", fruit);

//   return sum + fruit.length;
// }, 0);
// console.log("🚀 ~ totalLength ~ totalLength:", totalLength);

// ==========================================================================================================================================================================

// Objects

// const carArr = ["Tesla", "Model S", 2023];

// const car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2023,
//   owner: {
//     fName: "Divyansh",
//     lName: "Singh",
//     age: 25,
//   },
// };

// console.log("🚀 ~ car:", car);

// // DOT Notation
// console.log(car.model);
// console.log(car.owner.lName);

// // Bracket Notation
// console.log(car["brand"]);
// console.log(car["owner"]["lName"]);

// car.color = "red";
// console.log("🚀 ~ car:", car);

// delete car.year;
// console.log("🚀 ~ car:", car);

// Iterate over Objects
// const car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2023,
//   owner: {
//     fName: "Divyansh",
//     lName: "Singh",
//     age: 25,
//   },
// };
// for-in
// for (let key in car) {
//   console.log(key, car[key]);
// }

// Object.keys()
// console.log(Object.keys(car));

// Object.keys(car).forEach((key) => {
//   console.log(key, car[key]);
// });

// Object.values()
// console.log(Object.values(car));

// Object.entries()
// console.log(Object.entries(car));

// Object.entries(car).forEach((data) => {
//   console.log("Key: ", data[0], ", value: ", data[1]);
// });

// Object.entries() with for-of
// for (let [key, value] of Object.entries(car)) {
//   console.log("Key: ", key, ", value: ", value);
// }

// ==========================================================================================================================================================================

// Data storage in JavaScript
/*
 * LocalStorage - No Expiration, 5-10 MB storage per domain
 * Session Storage - Only for a duration of time. 5 MB storage per domain
 * Cookies - 4 KB, expires, path, domain
 */

// ==========================================================================================================================================================================

// GEC - Global Execution Context
/*
 * Memory Component (Variable Environment) : Variables, Function Declarations are stored as key value pairs
 * Code Component (Thread of Execution) : Code is execute line by line
 */

/*
 * Creation Phase
 * Execution Phase
 */

// Event Loop
// console.log("A");
// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// console.log("B");
