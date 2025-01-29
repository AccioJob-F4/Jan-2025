// // Synchronous Code
// console.log("Start");

// for (let i = 0; i < 1e9; i++) {}

// console.log("End");

// Asynchronous Code
// console.log("Start");

// setTimeout(() => {
//   for (let i = 0; i < 1e9; i++) {}
// }, 1000);

// console.log("End");

// Callbacks
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data Recvd.");
//   }, 2000);
// }

// fetchData((message) => {
//   console.log(message);
// });

// .then(() => {}).catch(() => {}).finally()
// .forEach((ele, idx) => {})
// setTimeout(() => {}, 1000);

// Promises
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Divyansh Singh" });
//     }, 2000);
//   });
// };

// console.log(fetchData());

// fetchData()
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", data);
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   })
//   .finally(() => {
//     console.log("Hehe");
//   });

// Async-Await

// const getData = async () => {
//   try {
//     const data = await fetchData();
//     console.log("🚀 ~ data:", data);
//   } catch (error) {
//     console.log("🚀 ~ error:", error);
//   }
// };

// getData();

// // .then.catch
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((userData) => {
//     console.log("🚀 ~ fetch ~ userData:", userData);

//     fetch(`https://jsonplaceholder.typicode.com/posts/${userData.id}`)
//       .then((resp) => resp.json())
//       .then((postData) => {
//         console.log("🚀 ~ fetch ~ postData:", postData);
//       })
//       .catch((error) => {
//         console.log("🚀 ~ fetch ~ error:", error);
//       });
//   })
//   .catch((error) => {
//     console.log("🚀 ~ .then ~ error:", error);
//   });

// // async-await
// async function fetchUserData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const userData = await response.json();
//     console.log("🚀 ~ fetchUserData ~ userData:", userData);

//     const resp = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${userData.id}`
//     );
//     const postData = await resp.json();
//     console.log("🚀 ~ fetchUserData ~ postData:", postData);
//   } catch (error) {
//     console.log("🚀 ~ fetchUserData ~ error:", error);
//   }
// }

// fetchUserData();

// ==========================================================================================
// Promise.all()

// Promise.all([P1, P2, P3]).then((resp) => {
//   resp-- > [v1, v2, v3];
// });

// // Promise.race()

// Promise.race([P1, P2, P3]).then((resp) => {
//   resp-- > v1;
// });
