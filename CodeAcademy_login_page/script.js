const emailInput = document.getElementById("user-email");
const passwordInput = document.getElementById("user-password");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value;
  const isValidEmail = validateEmail(email);
  if (isValidEmail) {
    showSuccess(emailInput, "email-error", "Valid email", "green");
  } else {
    showError("Invalid email", "red", "email-error");
  }

  const password = passwordInput.value;
  const isValidPassword = validatePassword(password);
  if (isValidPassword) {
    showSuccess(passwordInput, "password-error", "valid password", "green");
  } else {
    showError("Invalid password", "red", "password-error");
  }
});

function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".")) {
    return false;
  }
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex + 1;
}

function validatePassword(password) {
  return password !== "" && password.length >= 8;
}
function showError(message, color, elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.color = color;
}

function showSuccess(inputElement, elementId, message, color) {
  const errorElement = document.getElementById(elementId);
  inputElement.style.color = color;
  errorElement.style.color = color;
  errorElement.textContent = message;
}
