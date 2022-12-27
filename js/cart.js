
function house() {
  window.location.href = "index.html"
}

function newCart() {

  window.location.href = "cart.html"
}
function logout() {
  window.location.href = "home.html"
}

function deleteCart(i) {
  let addCart = JSON.parse(localStorage.getItem("newProducts"))
  addCart.splice(i, 1)
  localStorage.setItem("newProducts", JSON.stringify(addCart))
  renderCart(addCart)
}

function renderCart() {
  let addCart = JSON.parse(localStorage.getItem("newProducts"))

  let data = "";
  for (i = 0; i < addCart.length; i++) {
    data += `
    
    <tr>
      <td>${addCart[i].id}</td>
      <td><img src="${addCart[i].imge}" alt=""></td>
      <td>${addCart[i].name}</td>
      <td> ${(+addCart[i].price).toLocaleString("en-us") +""+ "VND"}</td>
      <td>${addCart[i].quantity}</td>
      <td>${(addCart[i].price * addCart[i].quantity).toLocaleString("en-us") + ""+ "VND"}</td>
      <td><button onclick="deleteCart(${i})" id="delete-button">Xóa</button></td>
     
     </tr>
  
    `

  }
  document.getElementById("addCart").innerHTML = data;
}
renderCart();

function renderReceipt() {
  let receipt = JSON.parse(localStorage.getItem("newProducts"));
  let sum = 0;
  for (i = 0; i < receipt.length; i++) {
    sum += (receipt[i].quantity*receipt[i].price);
  }
  document.getElementById("payment").innerHTML = (sum).toLocaleString("en-us")+" "+"VND";
}

renderReceipt()

function payment(){
  alert("Sản phẩm đã được thanh toán !")
  localStorage.removeItem("newProducts")
}

