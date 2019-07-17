window.addEventListener('load', () => {
  let contaienr = document.querySelector('#container')
  let navBar = document.querySelector('#navBar')
  contaienr.style.display = 'block'
  navBar.style.display = 'block'
  preload();
})

window.addEventListener('DOMContentLoaded', () => {
  let contaienr = document.querySelector('#container')
  let navBar = document.querySelector('#navBar')
  contaienr.style.display = 'none'
  navBar.style.display = 'none'
  updateQtyCart()
  addNewProd();
});

function preload() {
  let load = document.querySelector('#load');
  let text = document.querySelector('#text');
  load.style.display = 'none';
  text.style.display = 'none';
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

//Add new product
function addNewProd() {
  document.querySelector('#addNewProd').addEventListener('click', function () {
    event.preventDefault();
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
        body: JSON.stringify(obj),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => res.json())
      .then((data) => {
        let noticeAdmin = document.querySelector('#noticeAdmin');
        let notificationTitle = document.createElement('div');
        notificationTitle.classList.add("noticePanel")
        notificationTitle.innerHTML = `
      <div class="media">
        <img class="mr-3" src=${data.imagePoster} style="width: 20%;">
        <div class="media-body mt-0">
          <h5 class="mt-0 mb-3">${data.title}</h5>
          <span>New produt added.</span>
        </div>
        </div>`
        noticeAdmin.appendChild(notificationTitle)
        setTimeout(() => {
          notificationTitle.remove();
        }, 5000);
        setTimeout(() => {
          location.reload()
        }, 3500);
      })
  })
}

//Edit function
function editAjax(id, index) {
  fetch(`/api/${id}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then((data) => {
      let prodEdit = document.querySelectorAll(`.prodEdit-${index}`)
      prodEdit[0].value = data.title;
      prodEdit[1].value = data.imagePoster;
      prodEdit[2].value = data.imagesSlider;
      prodEdit[3].value = data.trailerGame;
      prodEdit[4].value = data.description;
      prodEdit[5].value = data.price;
      prodEdit[6].value = data.genre;
      prodEdit[7].value = data.platform;
      prodEdit[8].value = data.stock;
      putEditedProds(id, index)
    })
}

function putEditedProds(id, index) {
  document.querySelector(`#editSubmit-${index}`).addEventListener('click', () => {
    console.log(id, index)
    let prodEdit = document.querySelectorAll(`.prodEdit-${index}`)
    let editedProd = {
      title: prodEdit[0].value,
      imagePoster: prodEdit[1].value,
      imagesSlider: prodEdit[2].value.split(/ *[,;]+ */g),
      trailerGame: prodEdit[3].value.replace("watch\?v=", "embed/"),
      description: prodEdit[4].value,
      price: prodEdit[5].value,
      genre: prodEdit[6].value.split(/ *[,;]+ */g),
      platform: prodEdit[7].value.split(/ *[,;]+ */g),
      stock: prodEdit[8].value
    }
    console.log(editedProd)
    fetch(`/api/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editedProd)
      }).then(res => res.json())
      .then(data => console.log('Fetch data: ', data))
  })
}

//Delete with Ajax
function deleteProd(id, index) {
  fetch(`/api/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      let prodTr = document.querySelector(`[data-id="${index}"]`);
      prodTr.nextSibling.remove();
      prodTr.remove();

      let noticeAdmin = document.querySelector('#noticeAdmin');
      let notificationTitle = document.createElement('div');
      notificationTitle.classList.add("noticePanel")
      notificationTitle.innerHTML = `
      <div class="media">
        <img class="mr-3" src=${data.imagePoster} style="width: 20%;">
        <div class="media-body mt-0">
          <h5 class="mt-0 mb-3">${data.title}</h5>
          <span>Product deleted.</span>
        </div>
        </div>`
      noticeAdmin.appendChild(notificationTitle)
      setTimeout(() => {
        notificationTitle.remove()
      }, 5000)
      setTimeout(() => {
        location.reload()
      }, 3500);
    })
}