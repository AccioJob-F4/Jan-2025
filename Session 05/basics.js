// JS code --> 3 sec

// Promise

// Pending
// Fulfilled / Resolved
// Rejected

// const a = 50;

// Creating a promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (a % 2 === 0) resolve("Divyansh resolved");
//     else reject("Divyansh rejected");
//   }, 3000); // 3000 ms --> 3 sec
// });

// Consuming a promise
// console.log("Start");
// promise
//   .then((message) => {
//     console.log("🚀 ~ .then ~ message:", message);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   });
// console.log("End");

// ==========================================================================================

// API

// const payload = {
//   id: 100,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(payload),
// })
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", data);
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err:", err);
//   });

// API CONTRACT
// Endpoint: "https://jsonplaceholder.typicode.com/posts"
// Method Type: "POST"
// PAYLOAD: {
//     id: <ID>,
//     name: <NAME>
// }
// RESPONSE: {
//   data: {
//     name: "Divyansh",
//     age: 25,
//   },
//   error: null,
// }

// Methods
// GET (default)
// POST

// PATCH
// PUT
// DELETE

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((ele) => {
      //   console.log("🚀 ~ data.forEach ~ ele:", ele);
      console.log(ele.name);
    });
  })
  .catch((error) => {
    console.log({ error });
  });
