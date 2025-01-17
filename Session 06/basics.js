// Synchronous --> Code doesn't demand some time but is executed immediately.
// Asynchronous --> Code demands some time and is executed after that delay is completed.

// Event Loop
/*
 * Call Stack
 * Task Queue or Macrotask Queue --> setTimeout, setInterval, I/O Operations, UI Rendering Events
 * Microtask Queue --> High Priority --> Promises, API's
 */

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//   })
//   .then(() => {
//     console.log("Promise 2");
//   });

// console.log("End");

console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setTimeout(() => {
  console.log("setTimeout 2");
}, 1000);

setTimeout(() => {
  console.log("setTimeout 3");
}, 0);

console.log("End");
