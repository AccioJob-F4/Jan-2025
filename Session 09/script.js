const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskCategoryInput = document.getElementById("task-category");
const taskDeadlineInput = document.getElementById("task-deadline");
const taskPriorityInput = document.getElementById("task-priority");

const taskList = document.getElementById("task-list");
const searchBar = document.getElementById("search-bar");
const filterCategory = document.getElementById("filter-category");
const filterStatus = document.getElementById("filter-status");
const sortPriority = document.getElementById("sort-priority");

const themeToggle = document.getElementById("theme-toggle");
const languageSelect = document.getElementById("language-select");
const dashboardBtn = document.getElementById("dashboard-btn");
const dashboardModal = document.getElementById("dashboard-modal");
const closeModal = document.querySelector(".close");

const paginationControls = document.getElementById("pagination-controls");

let tasks = [];
let currentTaskArray = [];
let currentPage = 1;
const pageSize = 5;

document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  displayTasks(tasks);

  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  }

  const language = localStorage.getItem("language") || "en";
  languageSelect.value = language;
  applyTranslations(language);
});

const addTask = (e) => {
  e.preventDefault();
  const task = {
    id: Date.now(),
    name: taskNameInput.value,
    category: taskCategoryInput.value,
    deadline: taskDeadlineInput.value,
    priority: taskPriorityInput.value,
    completed: false,
    subtasks: [],
  };

  console.log(task);

  tasks.push(task);
  saveTasks();
  displayTasks(tasks);
  taskForm.reset();
};

const renderPaginationControls = (totalTasks, currentPage, pageSize) => {
  paginationControls.innerHTML = "";

  const totalPages = Math.ceil(totalTasks / pageSize);

  if (totalPages <= 1) {
    return;
  }

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;

  prevButton.addEventListener("click", () => {
    displayTasks(currentTaskArray, currentPage - 1, pageSize);
  });

  paginationControls.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumberBtn = document.createElement("button");
    pageNumberBtn.textContent = i;
    if (i === currentPage) {
      pageNumberBtn.disabled = true;
    }
    pageNumberBtn.addEventListener("click", () => {
      displayTasks(currentTaskArray, i, pageSize);
    });
    paginationControls.appendChild(pageNumberBtn);
  }

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", () => {
    displayTasks(currentTaskArray, currentPage + 1, pageSize);
  });
  paginationControls.appendChild(nextButton);
};

const displayTasks = (
  taskArray,
  pageNumber = currentPage || 1,
  pageSize = 5
) => {
  taskList.innerHTML = "";
  currentTaskArray = taskArray;
  currentPage = pageNumber;

  if (taskArray.length === 0) {
    taskList.innerHTML = "<p>No tasks to display.</p>";
    paginationControls.innerHTML = "";
    return;
  }

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedTasks = taskArray.slice(startIndex, endIndex);

  paginatedTasks.forEach((task) => {
    const li = renderTask(task);
    taskList.appendChild(li);
  });

  renderPaginationControls(taskArray.length, currentPage, pageSize);
};

const renderSubtask = (subtask) => {
  return `
  <li class="task-item subtask" data-id="${subtask.id}">
  <input type="checkbox" class="complete-task" ${
    subtask.completed ? "checked" : ""
  }>
  <h3 ${subtask.completed ? 'class="completed"' : ""}>${subtask.name}</h3>
  <p>Category: ${subtask.category}</p>
  <p>Deadline: ${subtask.deadline}</p>
  <p>Priority: ${subtask.priority}</p>
  </li>
  `;
};

const renderTask = (task) => {
  const li = document.createElement("li");
  li.classList.add("task-item", task.priority.toLowerCase() + "-priority");
  li.setAttribute("data-id", task.id);

  li.innerHTML = `<input type="checkbox" class="complete-task" ${
    task.completed ? "checked" : ""
  }>
  <h3 ${task.completed ? 'class="completed"' : ""}>${task.name}</h3>
  <p>Category: ${task.category}</p>
  <p>Deadline: ${task.deadline}</p>
  <p>Priority: ${task.priority}</p>
  <div class="task-actions">
    <button class="add-subtask-btn" data-id="${task.id}">Add Subtask</button>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  </div>
  `;

  if (task.subtasks && task.subtasks.length > 0) {
    const accordian = document.createElement("div");
    accordian.classList.add("subtask-accordian");
    accordian.innerHTML = `
      <button class="accordian-toggle">View Subtasks</button>
      <div class="accordian-content">
        <ul>${task.subtasks
          .map((subtask) => {
            return renderSubtask(subtask);
          })
          .join("")}</ul>
      </div>
    `;

    li.appendChild(accordian);
  }

  return li;
};

const modifyTask = (e) => {
  const taskItem = e.target.closest(".task-item");
  const taskId = taskItem.dataset.id;

  if (e.target.classList.contains("delete-btn")) {
    deleteTask(taskId);
  } else if (e.target.classList.contains("edit-btn")) {
    editTask(taskId);
  } else if (e.target.classList.contains("add-subtask-btn")) {
    addSubtask(taskId);
  }
};

const deleteTask = (id) => {
  tasks = removeTaskById(tasks, id);
  saveTask();
  displayTasks(tasks);
};

const removeTaskById = (taskArray, id) => {
  return taskArray.filter((task) => {
    if (task.id === id) {
      return false;
    } else if (task.subtasks && task.subtasks.length > 0) {
      task.subtasks = removeTaskById(task.subtasks, id);
    }
    return true;
  });
};

const editTask = (id) => {
  const task = findTaskById(tasks, id);

  if (task) {
    taskNameInput.value = task.name;
    taskCategoryInput.value = task.category;
    taskDeadlineInput.value = task.deadline;
    taskPriorityInput.value = task.priority;
    deleteTask(id);
  }
};

const findTaskById = (taskArray, id) => {
  for (let task of taskArray) {
    if (task.id === id) {
      return task;
    } else if (task.subtasks && task.subtasks.length > 0) {
      const found = findTaskById(task.subtasks, id);
      if (found) return found;
    }
  }
  return null;
};

const updateDisplayTasks = () => {
  let updatedTasks = tasks.slice();

  const keyword = searchBar.value.toLowerCase();
  if (keyword) {
    updatedTasks = updatedTasks.filter((task) =>
      task.name.toLowerCase().includes(keyword)
    );
  }

  const category = filterCategory.value;
  if (category !== "All") {
    updatedTasks = updatedTasks.filter((task) => task.category === category);
  }

  const status = filterStatus.value;
  if (status === "Completed") {
    updatedTasks = updatedTasks.filter((task) => task.completed);
  } else if (status === "Incomplete") {
    updatedTasks = updatedTasks.filter((task) => !task.completed);
  }

  const sortOrder = sortPriority.value;
  if (sortOrder === "High") {
    updatedTasks = updatedTasks.sort(
      (a, b) => getPriorityLevel(a.priority) - getPriorityLevel(b.priority)
    );
  } else if (sortOrder === "Low") {
    updatedTasks = updatedTasks.sort(
      (a, b) => getPriorityLevel(b.priority) - getPriorityLevel(a.priority)
    );
  }

  currentPage = 1;

  displayTasks(updatedTasks, currentPage);
};

const addSubtask = (parentTaskId) => {
  const subTaskName = prompt("Enter subtask name:");
  if (subTaskName) {
    const parentTask = findTaskById(tasks, parentTaskId);

    if (parentTask) {
      const subtask = {
        id: Date.now(),
        name: subTaskName,
        category: parentTask.category,
        deadline: parentTask.deadline,
        priority: parentTask.priority,
        completed: false,
      };

      parentTask.subtasks.push(subtask);

      saveTasks();

      updateDisplayTasks();
    }
  }
};

const searchTasks = () => {
  const keyword = searchBar.value.toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(keyword)
  );

  displayTasks(filteredTasks);
};

const filterTasks = () => {
  const category = filterCategory.value;
  const status = filterStatus.value;
  let filteredTasks = tasks;

  if (category !== "All") {
    filteredTasks = filteredTasks.filter((task) => task.category === category);
  }
  if (status === "Completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  } else if (status === "Incomplete") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  }

  displayTasks(filteredTasks);
};

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const toggleTaskCompletion = (e) => {
  if (e.target.classList.contains("complete-task")) {
    const taskItem = e.target.closest(".task-item");
    const taskId = taskItem.dataset.id;

    const task = findTaskById(tasks, taskId);

    if (task) {
      task.completed = e.target.checked;
      saveTasks();
      updateDisplayTasks();
    }
  }
};

const getPriorityLevel = (priority) => {
  switch (priority) {
    case "High":
      return 1;
    case "Medium":
      return 2;
    case "Low":
      return 3;
    default:
      return 4;
  }
};

const sortTasksByPriority = () => {
  const sortOrder = sortPriority.value;
  const sortedTasks = [...tasks];
  if (sortOrder === "High") {
    sortedTasks = sortedTasks.sort(
      (a, b) => getPriorityLevel(a.priority) - getPriorityLevel(b.priority)
    );
  } else if (sortOrder === "Low") {
    sortedTasks = sortedTasks.sort(
      (a, b) => getPriorityLevel(b.priority) - getPriorityLevel(a.priority)
    );
  }

  displayTasks(sortedTasks);
};

const toggleTheme = () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
};

taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", modifyTask);
taskList.addEventListener("change", toggleTaskCompletion);
searchBar.addEventListener("input", searchTasks);
filterCategory.addEventListener("change", filterTasks);
filterStatus.addEventListener("change", filterTasks);
sortPriority.addEventListener("change", sortTasksByPriority);
themeToggle.addEventListener("change", toggleTheme);
languageSelect.addEventListener("change", () => {
  const selectedLanguage = languageSelect.value;
  localStorage.setItem("language", selectedLanguage);
  applyTranslations(selectedLanguage);
});
dashboardBtn.addEventListener("click", openDashboard);
closeModal.addEventListener("click", () => {
  dashboardModal.style.display = "none";
});
