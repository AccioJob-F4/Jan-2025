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

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  displayTasks(tasks);
  // Modification: Load theme preference
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  }
  // Modification: Load language preference
  const language = localStorage.getItem("language") || "en";
  languageSelect.value = language;
  applyTranslations(language);
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("accordion-toggle")) {
    const content = e.target.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  }
});

function addTask(e) {
  e.preventDefault();
  const task = {
    id: Date.now(),
    name: taskNameInput.value,
    category: taskCategoryInput.value,
    deadline: taskDeadlineInput.value,
    priority: taskPriorityInput.value, // Modification: Added priority property
    completed: false, // Modification: Added completed property
    subtasks: [], // Modification: Added subtasks property
  };
  tasks.push(task);
  saveTasks();
  displayTasks(tasks);
  taskForm.reset();
  // Modification: Schedule notification (Note: Only works if the app is open)
  if (task.deadline) {
    scheduleNotification(task);
  }
}

// Modification: Added renderPaginationControls function
const renderPaginationControls = (totalTasks, currentPage, pageSize) => {
  paginationControls.innerHTML = ""; // Clear existing controls

  const totalPages = Math.ceil(totalTasks / pageSize);

  // If only one page, don't show pagination controls
  if (totalPages <= 1) {
    return;
  }

  // Create Previous button
  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;

  prevButton.addEventListener("click", () => {
    displayTasks(currentTaskArray, currentPage - 1, pageSize);
  });

  paginationControls.appendChild(prevButton);

  // Create page number buttons
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

  // Create Next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", () => {
    displayTasks(currentTaskArray, currentPage + 1, pageSize);
  });
  paginationControls.appendChild(nextButton);
};

function displayTasks(taskArray, pageNumber = currentPage || 1, pageSize = 5) {
  taskList.innerHTML = ""; // Clear the current task list

  currentTaskArray = taskArray; // Save the current task array
  currentPage = pageNumber; // Save the current page number

  if (taskArray.length === 0) {
    taskList.innerHTML = "<p>No tasks to display.</p>";
    paginationControls.innerHTML = "";
    return;
  }

  // Calculate the start and end indices for slicing the taskArray
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedTasks = taskArray.slice(startIndex, endIndex);

  // Loop through the paginated tasks
  paginatedTasks.forEach((task) => {
    const li = renderTask(task); // Render each task
    taskList.appendChild(li); // Add the task to the DOM
  });

  // Now, we need to render the pagination controls
  renderPaginationControls(taskArray.length, currentPage, pageSize);
}

// Helper function to render subtasks
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

// Modification: Added renderTask function to handle subtasks recursively
const renderTask = (task) => {
  const li = document.createElement("li");
  li.classList.add("task-item", task.priority.toLowerCase() + "-priority");
  li.setAttribute("data-id", task.id); // Set the task ID as a data attribute

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

  // Check if the task has subtasks
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
  }
  // Handle Add Subtask button click
  else if (e.target.classList.contains("add-subtask-btn")) {
    addSubtask(taskId);
  }
};

const deleteTask = (id) => {
  tasks = removeTaskById(tasks, id);
  saveTask();
  displayTasks(tasks);
};

// Modification: Added removeTaskById function to remove tasks recursively
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
    taskPriorityInput.value = task.priority; // Modification: Pre-fill priority
    deleteTask(id);
  }
};

// Modification: Added findTaskById function to find tasks recursively
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

function updateDisplayedTasks() {
  let updatedTasks = tasks.slice(); // Copy the tasks array

  // Apply search filter
  const keyword = searchBar.value.toLowerCase();
  if (keyword) {
    updatedTasks = updatedTasks.filter((task) =>
      task.name.toLowerCase().includes(keyword)
    );
  }

  // Apply category filter
  const category = filterCategory.value;
  if (category !== "All") {
    updatedTasks = updatedTasks.filter((task) => task.category === category);
  }

  // Apply status filter
  const status = filterStatus.value;
  if (status === "Completed") {
    updatedTasks = updatedTasks.filter((task) => task.completed);
  } else if (status === "Incomplete") {
    updatedTasks = updatedTasks.filter((task) => !task.completed);
  }

  // Apply sorting
  const sortOrder = sortPriority.value; // Get the selected sort order (High to Low or Low to High)
  if (sortOrder === "High") {
    // Sort from High to Low (ascending order since High priority has lower value)
    updatedTasks.sort(
      (a, b) => getPriorityLevel(a.priority) - getPriorityLevel(b.priority)
    );
  } else if (sortOrder === "Low") {
    // Sort from Low to High (descending order since Low priority has higher value)
    updatedTasks.sort(
      (a, b) => getPriorityLevel(b.priority) - getPriorityLevel(a.priority)
    );
  }

  // Reset current page to 1
  currentPage = 1;

  // Display the updated tasks
  displayTasks(updatedTasks, currentPage);
}

// Modification: Added addSubtask function
function addSubtask(parentTaskId) {
  const subtaskName = prompt("Enter subtask name:");
  if (subtaskName) {
    // Find the parent task by its ID
    const parentTask = findTaskById(tasks, parentTaskId);

    if (parentTask) {
      // Create the subtask object
      const subtask = {
        id: Date.now(),
        name: subtaskName,
        category: parentTask.category, // Inherit category from parent task
        deadline: parentTask.deadline, // Inherit deadline from parent task
        priority: parentTask.priority, // Inherit priority from parent task
        completed: false,
        subtasks: [], // No subtasks allowed in subtasks
      };

      // Add the subtask to the parent task's subtasks array
      parentTask.subtasks.push(subtask);

      // Save the updated tasks array to localStorage
      saveTasks();

      // Re-render the task list to display the new subtask
      updateDisplayedTasks();
    }
  }
}

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

// Modification: Added toggleTaskCompletion function
function toggleTaskCompletion(e) {
  if (e.target.classList.contains("complete-task")) {
    const taskItem = e.target.closest(".task-item");
    const taskId = taskItem.dataset.id; // Get the task or subtask ID

    // Find the task or subtask by its ID
    const task = findTaskById(tasks, taskId);
    if (task) {
      // Toggle the completed status
      task.completed = e.target.checked;

      // Save the updated tasks to localStorage
      saveTasks();

      // Re-render the tasks list
      updateDisplayedTasks();
    }
  }
}

// Modification: Added getPriorityLevel function
function getPriorityLevel(priority) {
  switch (priority) {
    case "High":
      return 1; // Highest priority
    case "Medium":
      return 2; // Medium priority
    case "Low":
      return 3; // Lowest priority
    default:
      return 4; // For tasks with no priority or invalid priority
  }
}

// Modification: Added sortTasksByPriority function
function sortTasksByPriority() {
  const sortOrder = sortPriority.value; // Get the selected sort order (High to Low or Low to High)
  let sortedTasks = [...tasks]; // Create a copy of the tasks array to sort

  if (sortOrder === "High") {
    // Sort from High to Low (descending order)
    sortedTasks.sort(
      (a, b) => getPriorityLevel(a.priority) - getPriorityLevel(b.priority)
    );
  } else if (sortOrder === "Low") {
    // Sort from Low to High (ascending order)
    sortedTasks.sort(
      (a, b) => getPriorityLevel(b.priority) - getPriorityLevel(a.priority)
    );
  }

  displayTasks(sortedTasks); // Re-render the tasks with the sorted order
}

// Modification: Added toggleTheme (Dark Mode) function
const toggleTheme = () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
};

// Added language support
const translations = {
  en: {
    addNewTask: "Add New Task",
    taskName: "Task Name",
    category: "Category",
    deadline: "Deadline",
    addTask: "Add Task",
    taskList: "Task List",
    searchTasks: "Search tasks...",
    allCategories: "All Categories",
    allTasks: "All Tasks",
    completed: "Completed",
    incomplete: "Incomplete",
    // ... other translations
  },
  es: {
    addNewTask: "Agregar nueva tarea",
    taskName: "Nombre de la tarea",
    category: "Categoría",
    deadline: "Fecha límite",
    addTask: "Agregar tarea",
    taskList: "Lista de tareas",
    searchTasks: "Buscar tareas...",
    allCategories: "Todas las categorías",
    allTasks: "Todas las tareas",
    completed: "Completadas",
    incomplete: "Incompletas",
    // ... other translations
  },
};

const applyTranslations = (language) => {
  document.querySelector("#task-form-section h2").textContent =
    translations[language].addNewTask;
  document.querySelector('label[for="task-name"]').textContent =
    translations[language].taskName;
  document.querySelector('label[for="task-category"]').textContent =
    translations[language].category;
  document.querySelector('label[for="task-deadline"]').textContent =
    translations[language].deadline;
  document.querySelector("#task-form button[type='submit']").textContent =
    translations[language].addTask;
  document.querySelector("#task-list-section h2").textContent =
    translations[language].taskList;
  document.querySelector("#search-bar").textContent =
    translations[language].searchTasks;
  document.querySelector("#filter-category option[value='All']").textContent =
    translations[language].allCategories;
  document.querySelector("#filter-status option[value='All']").textContent =
    translations[language].allTasks;
  document.querySelector(
    "#filter-status option[value='Completed']"
  ).textContent = translations[language].completed;
  document.querySelector(
    "#filter-status option[value='Incomplete']"
  ).textContent = translations[language].incomplete;
};

// Added dashboard functionality
const openDashboard = () => {
  dashboardModal.style.display = "block";
  generateChart();
};

const generateChart = () => {
  const categories = {};
  tasks.forEach((task) => {
    categories[task.category] = (categories[task.category] || 0) + 1;
  });

  const ctx = document.getElementById("tasks-chart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(categories),
      datasets: [
        {
          data: Object.values(categories),
          backgroundColor: ["pink", "orange", "dodgerblue", "teal"],
        },
      ],
    },
  });
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
