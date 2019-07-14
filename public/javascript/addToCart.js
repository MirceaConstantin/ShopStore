if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');

} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateQtyCart()
  editAndUpdate();
});

function deleteProd(id, index) {
  //Ajax to get response from server and delete the prod with id requested
  console.log(id)
  fetch(`/api/${id}`, {
      method: 'GET'
    })
    .then(res => res)
    .then((data) => {
      console.log(data);

      let prodTr = document.querySelector(`[data-id="${index}"]`);
      prodTr.nextSibling.remove();
      prodTr.remove();
    })
}

function editAndUpdate() {
  let edit = document.querySelectorAll('.editProduct')
  for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener('click', () => {
      console.log('edit')
    })
  }
}

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
  console.log(message)
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

function addToCart(id, title, poster) {
  let qty = document.querySelector('#qty');
  if (qty == undefined) {
    qty = 1;
  } else {
    qty = Number(qty.value);
  }
  let cart = {
    productID: id,
    productTitle: title,
    qty: qty
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