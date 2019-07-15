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
  addNewProd();
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

//Add new product
function addNewProd() {
  document.querySelector('#addNewProd').addEventListener('click', function () {
    let title = document.querySelector('[name="title"]').value;
    let imagePoster = document.querySelector('[name="imagePoster"]').value;
    let imagesSlider = document.querySelector('[name="imagesSlider"]').value;
    let trailerGame = document.querySelector('[name="trailerGame"]').value;
    let description = document.querySelector('[name="description"]').value;
    let price = document.querySelector('[name="price"]').value;
    let genre = document.querySelector('[name="genre"]').value;
    let platform = document.querySelector('[name="platform"]').value;
    let stock = document.querySelector('[name="stock"]').value;
    let obj = {
      title: title,
      imagePoster: imagePoster,
      imagesSlider: imagesSlider.split(/ *[,;]+ */g),
      trailerGame: trailerGame.replace("watch\?v=", "embed/"),
      description: description,
      price: price,
      genre: genre.split(/ *[,;]+ */g),
      platform: platform.split(/ *[,;]+ */g),
      stock: stock
    }
    fetch('/admin', {
        method: 'POST',
        data: JSON.stringify(obj)
      })
      .then(res => console.log(res))
      .then((data) => {
        console.log(data)
      })
  })
}

//Edit function
function editAndUpdate() {
  let edit = document.querySelectorAll('.editProduct')
  for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener('click', () => {
      console.log(i, 'edit')
    })
  }
}

function editAjax(id) {
  fetch(`api/${id}`, {
      method: 'GET'
    })
    .then(res => res)
    .then((data) => {
      console.log(data)
    })
}

//Delete with Ajax
function deleteProd(id, index) {
  fetch(`/api/${id}`, {
      method: 'DELETE'
    })
    .then(res => res)
    .then(() => {
      let prodTr = document.querySelector(`[data-id="${index}"]`);
      prodTr.nextSibling.remove();
      prodTr.remove();
    })
}