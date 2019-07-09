window.addEventListener('DOMContentLoaded', () => {
  let badgeCart = document.querySelector('#badgeCart');
  localStorage.getItem('myCart')
  var totalQty = 0;
  var data = JSON.parse(localStorage.getItem('myCart'))
  for (let i in data) {
    totalQty += data[i].qty;
  }
  badgeCart.innerHTML = totalQty;
});

function createPopUp(title, qty, poster) {
  var notificationArea = document.querySelector('#notice');
  var notificationTitle = document.createElement('div');
  notificationTitle.classList.add("noticePanel")
  notificationTitle.innerHTML = `
  <div class="media">
    <img class="mr-3" src=${poster} style="width: 20%;">
    <div class="media-body mt-0">
      <h5 class="mt-0 mb-3">${title}</h5>
      <span>${qty} added to your cart.</span>
    </div>
    </div>`
  notificationArea.appendChild(notificationTitle)
  setTimeout(() => {
    notificationTitle.remove()
  }, 5000)
}

function addToCart(id, title, poster) {
  var qty = document.querySelector('#qty');
  if (qty == undefined) {
    qty = 1;
  } else {
    qty = qty.value;
  }
  var cart = {
    productID: id,
    productTitle: title,
    qty: qty
  }
  if (localStorage.getItem('myCart')) {
    var checkGame = false;
    var data = JSON.parse(localStorage.getItem('myCart'))
    for (let i = 0; i < data.length; i++) {
      if (data[i].productID == id) {
        checkGame = true;
        data[i].qty++
      }
    }
    if (checkGame == false) {
      data.push(cart);
    }
    localStorage.setItem('myCart', JSON.stringify(data))
  } else {
    localStorage.setItem('myCart', JSON.stringify([cart]))
  }

  let badgeCart = document.querySelector('#badgeCart');
  var totalQty = 0;
  for (let i in data) {
    totalQty += data[i].qty;
  }
  badgeCart.innerHTML = totalQty;
  createPopUp(title, qty, poster)
}