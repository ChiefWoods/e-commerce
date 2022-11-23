function validateForm() {
  const nameInput = document.querySelector(".name-input");
  const emailInput = document.querySelector(".email-input");
  const messageInput = document.querySelector(".textarea-message");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!(emailRegex.test(emailInput.value))) {
    alert("Invalid email address!")
    emailInput.value = "";
  } else if (nameInput.value == "" || messageInput.value == "") {
    alert("Please fill in your name and message.");
  } else {
    alert("Message sent!")
  }
}