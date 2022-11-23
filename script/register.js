function togglePassword() {
  const passwordInput = document.querySelector(".password-input");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

const today = new Date().toISOString().slice(0, 10);
const birthdateInput = document.querySelector(".birthdate-input");
birthdateInput.setAttribute("max", today);

function validateRegister() {
  const emailInput = document.querySelector(".email-input");
  const passwordInput = document.querySelector(".password-input");
  const confirmInput = document.querySelector(".confirm-input");
  const usernameInput = document.querySelector(".username-input");
  emailInput.classList.remove("invalid");
  passwordInput.classList.remove("invalid");
  confirmInput.classList.remove("invalid");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!(emailRegex.test(emailInput.value))) {
    alert("Invalid email address!")
    emailInput.value = "";
    emailInput.classList.add("invalid");
    return;
  }
  if (!(passwordRegex.test(passwordInput.value))) {
    alert("Invalid password!");
    passwordInput.value = "";
    confirmInput.value = "";
    passwordInput.classList.add("invalid");
    confirmInput.classList.add("invalid");
    return;
  }
  if (passwordInput.value != confirmInput.value) {
    alert("Incorrect confirmed password! Please make sure both passwords are the same.");
    passwordInput.value = "";
    confirmInput.value = "";
    passwordInput.classList.add("invalid");
    confirmInput.classList.add("invalid");
    return;
  }
  if (usernameInput.value == "") {
    var accountName = emailInput.value;
  } else {
    var accountName = usernameInput.value;
  }
  alert("Registration successful. Welcome " + accountName + "!");
  emailInput.value = passwordInput.value = confirmInput.value = usernameInput.value = birthdateInput.value = "";
}

