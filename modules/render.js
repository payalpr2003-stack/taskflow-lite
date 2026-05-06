export function renderTasks(list, tasks) {
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = "<li>No tasks yet</li>";
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <label>
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.text}</span>
      </label>
      <button class="delete-btn">Delete</button>
    `;

    list.appendChild(li);
  });
}