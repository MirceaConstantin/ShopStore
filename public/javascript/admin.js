if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
    editProd();
    //newProd();
    //delProd();
  });
}

/* data = {
  title: $("#newProdTitle").val(),
  imagePoster: $("#newProdPoster").val(),
  imagesSlider: $("#newProdSlider").val(),
  trailerGame: $("#newProdTrailer").val(),
  description: $("#newProdDescription").val(),
  price: $("#newProdPrice").val(),
  genre: $("#newProdGenre").val(),
  platform: $("#newProdPlatform").val(),
  stock: $("#newProdStock").val()
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = this.responseText;
    }
  };
  xhttp.open("POST", "/admin", true);
  xhttp.send(data);
} */

function newProd() {
  let input = document.querySelectorAll('#addNewItem .addNewProd');
  document.querySelectorAll('#submit')[0].addEventListener('click', function () {
    event.preventDefault();
    //for (let i = 0; i < input.length; i++) {}
    //loadDoc(data);
  })
}


function editProd() {
  editProd = document.querySelectorAll('.editProduct');
  editProductPanel = document.querySelectorAll('.editProductPanel');
  for (let i = 0; i < editProd.length; i++) {
    editProd[i].addEventListener('click', function () {
      console.log()
    })
  }
}