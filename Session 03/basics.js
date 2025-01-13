// Arrays
/*
* shift
* unshift
* pop
* push
* includes
* splice
* slice
start index is inclusive in nature
end index is exclusive in nature
* flat

* forEach
* map
* filter
* reduce
*/

// const fruits = [
//   "banana",
//   "cherry",
//   "kiwi",
//   "mango",
//   "pineapple",
//   "grapes",
//   "guava",
// ];

// Array.splice(start, deleteCount, ...items)

// const removed = fruits.splice(1, 2);
// console.log("🚀 ~ removed:", removed);
// console.log("🚀 ~ fruits:", fruits);

// fruits.splice(1, 0, "strawberry", "watermelon");
// console.log("🚀 ~ fruits:", fruits);

// fruits.splice(2, 2, "A", "B");
// console.log("🚀 ~ fruits:", fruits);

// Array.slice(start, end)

// console.log(fruits.includes("Cherry"));

// console.log(fruits);
// const copiedFruits = fruits.slice();
// console.log(fruits);
// const copiedFruitsStart = fruits.slice(2);
// console.log(fruits);
// const copiedFruitsStartEnd = fruits.slice(2, 5);
// console.log(fruits);

// console.log(copiedFruits);
// console.log(copiedFruitsStart);
// console.log(copiedFruitsStartEnd);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[2][1]);

// [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(matrix.flat());

// const outputArray = [];
// matrix.forEach((ele, idx) => {
//   ele.forEach((innerEle, innerIdx) => {
//     // outputArray.push(matrix[idx][innerIdx]);
//     outputArray.push(innerEle);
//   });
// });

// console.log(outputArray);

// ========================================================================================

// Objects
/*
* DOT Notation and Bracket Notation 

* Object.keys()
* Object.values()
* Object.entries()
* delete

* for...in
* Object.entries() with for...of
*/

// ========================================================================================

// Strings
let text = "Hello, Javascript!";
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.slice(7, 17));
// console.log(text.replace("Javascript", "World"));
// // text[7] = "A";
// console.log(text);

// let sentence = "The quick brown fox, jumps over, the lazy dog.";

// console.log(sentence.includes("fox"));
// console.log(sentence.includes("divyansh"));
// console.log(sentence.includes("Fox"));

// console.log(sentence.split(","));

// Template Literals
// let fName = "Divyansh";
// let lName = "Singh";
// let age = 25;

// const sentence = fName + " " + lName + " is my full name and my age is " + age;
// const templateSentence = `${fName} ${lName} is my full name and my age is ${age}`;
// console.log("🚀 ~ sentence:", sentence);
// console.log("🚀 ~ templateSentence:", templateSentence);

// console.log(sentence.length); // 11

// console.log(sentence.split(" ").length);

// const splittedWord = sentence.split(" ");
// console.log("🚀 ~ splittedWord:", splittedWord);
// const originalString = splittedWord.join(" ");
// console.log("🚀 ~ originalString:", originalString);

// let str = "Javascript";
// // tpircsavaJ
// const splittedCharArray = str.split("");
// console.log("🚀 ~ splittedCharArray:", splittedCharArray);
// const reversedSplittedCharArray = splittedCharArray.reverse();
// console.log("🚀 ~ reversedSplittedCharArray:", reversedSplittedCharArray);
// const reversedString = reversedSplittedCharArray.join("");
// console.log("🚀 ~ reversedString:", reversedString);
