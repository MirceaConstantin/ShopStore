if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');

} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateQtyCart()
});


function updateQtyCart() {
  let badgeCart = document.querySelector('#badgeCart');
  let totalQty = 0;
  localStorage.getItem('myCart')
  let data = JSON.parse(localStorage.getItem('myCart'))
  for (let i in data) {
    totalQty += Number(data[i].qty);
  }
  if (totalQty == 0) {
    badgeCart.innerHTML = ''
  } else {
    badgeCart.innerHTML = totalQty;
  }
}

function createPopUp(title, qty, poster) {
  let notificationArea = document.querySelector('#notice');
  let notificationTitle = document.createElement('div');
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

function addToCart(id, title, poster, price) {
  let qty = document.querySelector('#qty');
  if (qty == undefined) {
    qty = 1;
  } else {
    qty = Number(qty.value);
  }
  let cart = {
    productID: id,
    productTitle: title,
    qty: qty,
    productPrice: price
  }
  if (localStorage.getItem('myCart')) {
    let checkGame = false;
    let data = JSON.parse(localStorage.getItem('myCart'))
    for (let i = 0; i < data.length; i++) {
      if (data[i].productID == id) {
        checkGame = true;
        data[i].qty += qty;
      }
    }
    if (checkGame == false) {
      data.push(cart);
    }
    localStorage.setItem('myCart', JSON.stringify(data))
  } else {
    console.log('else')
    localStorage.setItem('myCart', JSON.stringify([cart]))
  }
  updateQtyCart();
  createPopUp(title, qty, poster)
}