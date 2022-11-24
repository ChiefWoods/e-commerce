function exit(event) {
  const link = event.target.parentNode.href;
  window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + link;
}

function decreaseQuantity(event) {
  const parent = event.target.parentNode;
  const quantity = parent.querySelector(".quantity");
  var currentQuantity = parent.querySelector(".quantity").textContent;
  if (currentQuantity <= 1) return;
  quantity.textContent = Number(currentQuantity) - 1;
}

function increaseQuantity(event) {
  const parent = event.target.parentNode;
  const quantity = parent.querySelector(".quantity");
  var currentQuantity = parent.querySelector(".quantity").textContent;
  if (currentQuantity >= 69) {
    alert("Purchase limit reached!")
    return;
  }
  quantity.textContent = Number(currentQuantity) + 1;
}

function addToCart(event) {
  const parent = event.target.parentNode;
  const productName = parent.querySelector(".product-title").textContent;
  const quantity = parent.querySelector(".quantity");
  purchaseQuantity = Number(quantity.textContent);
  alert(purchaseQuantity + " " + productName + " has been added to your cart.");
  quantity.textContent = "1";
  const link = parent.parentNode.parentNode.querySelector(".exit").href;
  window.location = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + link;
}