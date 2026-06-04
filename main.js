// Login Validation
function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password123") {
    window.location.href = "index.html";
  } else {
    document.getElementById("errorModal").style.display = "block";
    console.log("Invalid credentials");
  }
}

// Hide Modal
function dismissModal() {
  document.getElementById("errorModal").style.display = "none";
}

// Toggle Sidebar Navigation
function toggleNav() {
  const sidebar = document.querySelector(".nav-sidebar");

  if (sidebar.style.width === "200px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "200px";
  }
}
