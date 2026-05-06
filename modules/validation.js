export function validateTaskInput(text) {
  if (!text || text.trim() === "") {
    alert("Task cannot be empty");
    return false;
  }
  return true;
}