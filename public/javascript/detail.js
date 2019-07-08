function addToCart(id) {
  var qty = document.querySelector('#qty').value;
  sessionStorage.cart = JSON.stringify({
    productID: id,
    qty: qty
  })
  let product = JSON.parse(sessionStorage.cart)
  console.log(product)
  notificationCorner()
}

function notificationCorner() {
  var popUP = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ><div class="toast-header"><strong class="mr-auto">Bootstrap</strong></div><div class="toast-body"> Hello, world!This is a toast message. </div></div>`
  document.querySelector('container').innerHTML += popUP;
  //FIXME:
}