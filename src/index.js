document.addEventListener("DOMContentLoaded", () => {
  let submitButton = document.getElementById("create-task-form");
  submitButton.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let taskItem = document.getElementById("new-task-description").value;
  event.preventDefault();
  let todoList = document.getElementById("tasks");
  let li = document.createElement("li");
  li.innerHTML = taskItem;
  todoList.appendChild(li);
}
});

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated. 