window.addEventListener('load', () => {
  preload();
})

function preload() {
  let container = document.querySelector('#container')
  let load = document.querySelector('#load');
  container.style.display = 'block'
  load.style.opacity = 0;
  setTimeout(function () {
    load.style.display = 'none';
  }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
  updateQtyCart()
});

function updateQtyCart() {
  let badgeCart = document.querySelectorAll('.badgeCart');
  let totalQty = 0;
  localStorage.getItem('myCart')
  let data = JSON.parse(localStorage.getItem('myCart'))
  for (let i in data) {
    totalQty += data[i].qty;
  }
  for (let i in badgeCart) {
    if (totalQty == 0) {
      badgeCart[i].innerHTML = ''
    } else {
      badgeCart[i].innerHTML = totalQty;
    }
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

function removeAdminPopUp(message) {
  let notificationArea = document.querySelector('#notice');
  if (message == undefined) {
    notificationArea.innerHTML = ''
  } else {
    let notificationTitle = document.createElement('div');
    notificationTitle.classList.add("noticePanel")
    notificationTitle.innerHTML = `
    <div class="media">
      <div class="media-body mt-0">
        <h5 class="mt-0">${message}</h5>
      </div>
      </div>`
    notificationArea.appendChild(notificationTitle)
    setTimeout(() => {
      notificationTitle.remove();
    }, 5000);
  }
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
    price: price,
    productPoster: poster
  }
  if (localStorage.getItem('myCart')) {
    let checkGame = false;
    let data = JSON.parse(localStorage.getItem('myCart'))
    for (let i = 0; i < data.length; i++) {
      if (data[i].productID == id) {
        checkGame = true;
        data[i].qty += qty;
      } else if (data[i].productID != id) {
        localStorage.removeItem(data[i])
      }
    }
    if (checkGame == false) {
      data.push(cart);
    }
    localStorage.setItem('myCart', JSON.stringify(data))
  } else {
    localStorage.setItem('myCart', JSON.stringify([cart]))
  }
  updateQtyCart();
  createPopUp(title, qty, poster)
}