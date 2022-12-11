document.addEventListener("DOMContentLoaded", () => {
  let submitButton = document.getElementById("create-task-form");
  submitButton.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let list = document.getElementById("new-task-description").submit();
  event.preventDefault();
}
});

