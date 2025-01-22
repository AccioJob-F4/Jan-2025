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
