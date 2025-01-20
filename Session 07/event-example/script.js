// const container = document.getElementsByClassName("container")[0];
// const action = document.getElementsByClassName("action")[0];
// const button = document.getElementById("btn");

// button.addEventListener("click", (buttonEvent) => {
//   console.log("Button Clicked: ", buttonEvent);
//   buttonEvent.stopPropagation();
// });

// action.addEventListener("click", (actionEvent) => {
//   console.log("Action Div Clicked: ", actionEvent);
//   actionEvent.stopPropagation();
// });

// container.addEventListener("click", (containerEvent) => {
//   console.log("Container Div Clicked: ", containerEvent);
// });

const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usernameInput.value === "") return;

  alert("Form submitted by " + usernameInput.value);
  //   fetch()
});
