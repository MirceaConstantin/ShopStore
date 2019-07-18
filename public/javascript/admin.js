window.addEventListener('DOMContentLoaded', () => {
  addNewProd()
});

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
        headers: {
          'Content-Type': 'application/json'
        }
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

//Update product with PUT
function putEditedProds(id, index) {
  document.querySelector(`#editSubmit-${index}`).addEventListener('click', () => {
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
    fetch(`/api/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editedProd),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then((data) => {
        let noticeAdmin = document.querySelector('#noticeAdmin');
        let notificationTitle = document.createElement('div');
        notificationTitle.classList.add("noticePanel")
        notificationTitle.innerHTML = `
      <div class="media">
        <img class="mr-3" src=${data.imagePoster} style="width: 20%;">
        <div class="media-body mt-0">
          <h5 class="mt-0 mb-3">${data.title}</h5>
          <span>Product hase been updated.</span>
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
  })
}

//Delete with Ajax
function deleteProd(id, index) {
  fetch(`/api/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((data) => {
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