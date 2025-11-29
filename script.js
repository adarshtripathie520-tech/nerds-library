// SHOW / HIDE PASSWORD
const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;

  // Toggle icon between eye and eye-slash
  toggle.classList.toggle("fa-eye");
  toggle.classList.toggle("fa-eye-slash");
});

// LOGIN BUTTON FUNCTIONALITY
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Your login credentials
    let correctUser = "adarsh";
    let correctPass = "1234";

    if (user === correctUser && pass === correctPass) {
      window.location.href = "dashboard.html";  // Redirect page
    } else {
      alert("Incorrect username or password");
    }
  });
}
