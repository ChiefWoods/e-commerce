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
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) && !(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value))) {
    alert("Invalid email address and password!");
    emailInput.value = "";
    passwordInput.value = "";
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))) {
    alert("Invalid email address!")
    emailInput.value = "";
  } else if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value))) {
    alert("Wrong password!");
    passwordInput.value = "";
  } else {
    alert("Login successful");
  }
}