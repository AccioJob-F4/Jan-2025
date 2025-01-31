// IIFE
// (function greet(name) {
//   console.log("Hola ", name);
// })("Divyansh");

// function greet() {
//   console.log("Hola");
// }

// (function () {
//   setTimeout(() => {
//     console.log("Hola");
//   }, 3000);
// })();

// PROS OF IIFE
// calls itself
// data privacy
// const counter = (function () {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     getCount: () => count,
//   };
// })();

// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.getCount());
// console.log(counter.count);

// Object Cloning
// Shallow Copy
// Spread Operator (...)
// Object.assign
// =

// Deep Copy
// JSON.parse(JSON.stringify(obj))
// structuredClone(obj)
// lodash ()

// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// Prototype Inheritance is a mechanism that allows one object to inherit properties and methods from another object using prototype chain

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHello = function () {
//   return `Hello my name is ${this.name} and I am ${this.age} years old.`;
// };

// function Student(name, age, grade) {
//   Person.call(this, name, age);
//   this.grade = grade;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.getGrade = function () {
//   return `I am in grade ${this.grade}`;
// };

// const student1 = new Student("divyansh", 25, "D");

// console.log(student1.sayHello());
// console.log(student1.getGrade());

// useMemo --> ReactJS

// function.call(thisArg, arg1, arg2, ...)

// const user = {
//   name: "Divyansh",
// };

// function greet(message) {
//   console.log(`${message}, ${this.name}`);
// }

// greet.call(user, "Hello");

// function.apply(thisArg, [arg1, arg2, ...])

// const user = {
//   name: "Divyansh",
// };

// function greet(message, msg2) {
//   console.log(`${message}, ${this.name}, ${msg2}`);
// }

// greet.apply(user, ["Hello", "hola"]);

// const newFn = function.bind(thisArg, arg1, arg2, ...)

// const user = {
//   name: "Divyansh",
// };

// function greet(message) {
//   console.log(`${message}, ${this.name}`);
// }

// const sayHello = greet.bind(user, "Hello");
// sayHello();
