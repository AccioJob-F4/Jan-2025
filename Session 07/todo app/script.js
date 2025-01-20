const addTaskBtn = document.getElementById("addTaskBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    // deleteBtn.style.marginLeft = "15px";
    // deleteBtn.style.background = "red";
    // deleteBtn.style.color = "white";

    deleteBtn.setAttribute("class", "delete-btn");

    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  } else {
    alert("Please enter a task");
  }
});

todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});
