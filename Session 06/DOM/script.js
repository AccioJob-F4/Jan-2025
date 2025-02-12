// Targeting

// getElementById()
// const headerDiv = document.getElementById("main-header"); // Singular
// console.log("🚀 ~ headerDiv:", headerDiv);

// getElementsByClassName()
// const listItems = document.getElementsByClassName("list-item"); // Plural
// console.log("🚀 ~ listItems:", listItems[0]);

// getElementsByTagName()
// const paraTag = document.getElementsByTagName("p"); // Plural
// console.log("🚀 ~ paraTag:", paraTag[0]);

// querySelector()
// const headerDivQuery = document.querySelector("#main-header");
// console.log("🚀 ~ headerDivQuery:", headerDivQuery);

// const listItemsQuery = document.querySelector(".list-item");
// console.log("🚀 ~ listItemsQuery:", listItemsQuery);

// const paraTagQuery = document.querySelector("p");
// console.log("🚀 ~ paraTagQuery:", paraTagQuery);

// querySelectorAll()
// const headerDivQueryAll = document.querySelectorAll("#main-header");
// console.log("🚀 ~ headerDivQueryAll:", headerDivQueryAll);

// const listItemsQueryAll = document.querySelectorAll(".list-item");
// console.log("🚀 ~ listItemsQueryAll:", listItemsQueryAll);

// const paraTagQueryAll = document.querySelectorAll("p");
// console.log("🚀 ~ paraTagQueryAll:", paraTagQueryAll);

const headerDiv = document.getElementById("main-header"); // Singular
headerDiv.textContent = "Divyansh Singh";

const listItems = document.getElementsByClassName("list-item"); // Plural
listItems[0].textContent = "Hola this is dynamic now.";

listItems[1].innerHTML = "<p>This is a <strong>bold</strong> move!</p>";

const image = document.getElementsByTagName("img")[0];
image.setAttribute(
  "src",
  "data:image/jpeg;base64,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"
);

const buttonElement = document.getElementsByTagName("button")[0];
buttonElement.addEventListener("click", () => {
  headerDiv.style.color = "red";
  headerDiv.style.backgroundColor = "white";
});

const ul = document.getElementsByTagName("ul")[0];
const listElement = document.createElement("li");
listElement.setAttribute("class", "list-item");
listElement.textContent = "List Item 4";
ul.appendChild(listElement);

ul.removeChild(listItems[2]);

const listElement5 = document.createElement("li");
listElement5.setAttribute("class", "list-item");
listElement5.textContent = "List Item 5";

ul.insertBefore(listElement5, listItems[0]);

const section = document.getElementById("section-1");
section.insertAdjacentHTML("afterbegin", "<p>New message 1 added</p>");
section.insertAdjacentHTML("afterend", "<p>New message 2 added</p>");
section.insertAdjacentHTML("beforebegin", "<p>New message 3 added</p>");
section.insertAdjacentHTML("beforeend", "<p>New message 4 added</p>");
