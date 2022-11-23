function validateSubscribe() {
  const subscribeInput = document.querySelector(".subscribe-input");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!(emailRegex.test(subscribeInput.value))) {
    alert("Invalid email address!")
    subscribeInput.value = "";
  } else {
    alert("Thank you for subscribing to our newsletter!")
  }
}