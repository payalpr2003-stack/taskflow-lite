import { loadTasks, saveTasks } from "./modules/storage.js";
import { renderTasks } from "./modules/render.js";
import { validateTaskInput } from "./modules/validation.js";

let tasks = loadTasks();

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

// Initial render
renderTasks(list, tasks);

// Add Task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateTaskInput(input.value)) return;

  tasks.push({
    id: Date.now(),
    text: input.value,
    completed: false
  });

  saveTasks(tasks);
  renderTasks(list, tasks);
  input.value = "";
});

// Delete + Toggle
list.addEventListener("click", (e) => {
  const li = e.target.closest(".task");
  if (!li) return;

  const id = Number(li.dataset.id);
  const index = tasks.findIndex(t => t.id === id);

  if (e.target.classList.contains("delete-btn")) {
    tasks.splice(index, 1);
  }

  if (e.target.type === "checkbox") {
    tasks[index].completed = e.target.checked;
  }

  saveTasks(tasks);
  renderTasks(list, tasks);
});