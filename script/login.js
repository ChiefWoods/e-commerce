var loggedIn = false, username = "";

function togglePassword() {
  const passwordInput = document.querySelector(".password-input");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function validateLogin() {
  const emailInput = document.querySelector(".email-input");
  const passwordInput = document.querySelector(".password-input");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!(emailRegex.test(emailInput.value))) {
    alert("Invalid email address!")
  } else if (!(passwordRegex.test(passwordInput.value))) {
    alert("Wrong password!");
    passwordInput.value = "";
  } else {
    alert("Login successful.");
    username = emailInput.value;
    emailInput.value = "";
    passwordInput.value = "";
    appendWelcome();
  }
}

function appendWelcome() {
  if (!loggedIn) {
    const container = document.querySelector(".container-main");
    const welcome = document.createElement("span");
    welcome.textContent = "Welcome back " + username + "!";
    document.querySelector(".main-section").insertBefore(welcome, container);
    welcome.classList.add("welcome");
    loggedIn = true;
  } else {
    const welcome = document.querySelector(".welcome");
    welcome.textContent = "Welcome back " + username + "!";
  }
}