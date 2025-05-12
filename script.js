function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const task = taskInput.value.trim();

  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => li.remove();
    taskList.appendChild(li);
    taskInput.value = '';
  }
}