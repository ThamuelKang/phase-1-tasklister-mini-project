
const form = document.getElementById("create-task-form")
const taskValue = document.getElementById("new-task-description")
const todoList = document.getElementById("tasks")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = document.createElement('p')
  newTask.textContent = taskValue.value.trim()
  todoList.append(newTask)
  form.reset()
})

