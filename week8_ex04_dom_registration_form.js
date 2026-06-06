const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Input fields
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Error message elements
  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const formMessage = document.getElementById("formMessage");

  // Clear previous messages
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  formMessage.textContent = "";

  // Reset borders
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
  confirmPassword.style.border = "";

  let isValid = true;

  // Username validation
  if (username.value.trim() === "") {
    usernameError.textContent = "Username cannot be empty";
    username.style.border = "2px solid red";
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email cannot be empty";
    email.style.border = "2px solid red";
    isValid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Email must contain @";
    email.style.border = "2px solid red";
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === "") {
    passwordError.textContent = "Password cannot be empty";
    password.style.border = "2px solid red";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    password.style.border = "2px solid red";
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm Password cannot be empty";
    confirmPassword.style.border = "2px solid red";
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPassword.style.border = "2px solid red";
    isValid = false;
  }

  // Success message
  if (isValid) {
    formMessage.textContent = "Registration successful!";

    console.log("Username:", username.value);
    console.log("Email:", email.value);

    registrationForm.reset();
  }
});
