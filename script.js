function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    renderTasks();
    taskInput.value = '';
  }
}

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

window.onload = renderTasks;