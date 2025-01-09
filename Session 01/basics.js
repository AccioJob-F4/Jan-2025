// Variables
/**
 * var --> function scoped, re-declared or updated. Hoisting is present in variables declared using var which might create some unforeseen issues.
 * const --> block scoped, can't be reassigned after an initial value is set.
 * let --> block scoped, can be reassigned after an initial value is set.
 *
 */

// var a;
// console.log("🚀 ~ a:", a);
// const a = 5;
// a = 10;
// let a = 5;
// a = 10;
// var a = 5;
// a = 10;
// console.log("🚀 ~ a:", a);

// ==========================================================================================================================================================================

// Data Types
/**
 * Primitive Data Type: string, number, boolean, null, undefined, symbol, bigInt
 * Reference Data Type: Objects, Arrays
 */

// const a = "Divyansh";
// const b = 5;
// const c = true;
// const d = null; // intentional absence of a value
// const e = undefined; // unintentional absence of a value

// let a = null;
// console.log("🚀 ~ a:", a);
// let b;
// console.log("🚀 ~ b:", b);

// ==========================================================================================================================================================================

// Functions

// Function Declarations
// function isEven(a) {
//   if (a % 2 === 0) return true;
//   else return false;
// }

// Function Expressions
// const isEven = function (a) {
//   if (a % 2 === 0) return true;
//   else return false;
// };

// Arrow Functions (ES6 syntax)
// const isEven = (a) => {
//   if (a % 2 === 0) return true;
//   else return false;
// };

// console.log(isEven(6));
// ==========================================================================================================================================================================

// Scoping
// Global Scope:
// Block Scope: {}
// Function Scope:

// let a = 6; // Global Scope

// const isEven = (b) => {
//   console.log("🚀 ~ a1:", a);
//   let result = 0; // block scoped

//   if (b % 2 === 0) {
//     const c = 10; // block scoped
//     var d = 20; // function scope

//     console.log("🚀 ~ a2:", a);

//     result = true;
//   } else {
//     result = false;
//   }
//   //   console.log("🚀 ~ isEven ~ c:", c);
//   console.log("🚀 ~ isEven ~ d1:", d);

//   return result;
// };

// // console.log("🚀 ~ isEven ~ d2:", d);
// console.log("🚀 ~ a3:", a);

// // console.log("🚀 ~ isEven ~ result:", result);

// console.log(isEven(6));

// ==========================================================================================================================================================================

// Control Structures
/**
 * Conditionals: if, else if, ternary, switch
 * Loops: for, while, do...while, forEach, map, filter, reduce ...........
 */

// const arr = [1, 2, 3, 4];
// const res = arr.forEach((ele, idx) => {
//   console.log({ ele, idx });
//   return ele;
// });
// console.log(res);

// const res = arr.map((ele, idx) => {
//   console.log({ ele, idx });
//   if (ele % 2 === 0) return ele;
// });
// console.log(res);

// ==========================================================================================================================================================================

// Closures

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const innerFn = outer();

// innerFn();
// innerFn();
// innerFn();

// ==========================================================================================================================================================================

// console.log(x);
