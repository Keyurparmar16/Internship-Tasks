document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Add Task
  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";

    // Toggle completed
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  });
});
