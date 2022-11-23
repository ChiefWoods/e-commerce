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
    emailInput.value = "";
  } else if (!(passwordRegex.test(passwordInput.value))) {
    alert("Wrong password!");
    passwordInput.value = "";
  } else {
    alert("Login successful.");
    emailInput.value = "";
    passwordInput.value = "";
  }
}