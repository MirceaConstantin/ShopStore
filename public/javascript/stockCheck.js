window.addEventListener('DOMContentLoaded', () => {
  draw()

})

function draw() {
  let cart = document.querySelector('#cart');
  let footer = document.querySelector('#site-footer');
  let myCart = JSON.parse(localStorage.getItem('myCart'))
  let totalPrice = 0;
  let totalItems = 0;
  let html = '';
  for (let i in myCart) {
    let totalProdPrice = 0;
    totalProdPrice += Number(myCart[i].price * myCart[i].qty);
    totalItems += Number(myCart[i].qty);
    totalPrice += Number(totalProdPrice);
    let item = `
    <article class="product">
      <header>
        <a class="remove">
          <img src="${myCart[i].productPoster}" alt="${myCart[i].productTitle}">
          <i class="fas fa-trash-alt"></i>
        </a>
      </header>
      <div class="cartContent">
        <a href="/${myCart[i].productTitle}">
          <h1>${myCart[i].productTitle}</h1>
        </a>
      </div>
      <footer class="cartContent">
        <span class="qt-minus">-</span>
        <span class="qt">${myCart[i].qty}</span>
        <span class="qt-plus">+</span>
        <h2 class="full-price">${totalProdPrice} $</h2>
        <h2 class="price">${myCart[i].price} $</h2>
      </footer>
    </article>`
    html += item;
  }
  let footerCart = `
    <div class="float-left">
      <h2>Total items: 
        <span>${totalItems}</span>
      </h2>
    </div>
    <div class="float-right">
      <h1 class="total">Total: 
        <span>${totalPrice} $</span>
      </h1>
      <a class="checkOutBtn">Checkout</a>
    </div>
    `
  cart.innerHTML = html;
  footer.firstChild.innerHTML = footerCart;
  plus()
  minus()
  postCart()
}

function changeVal(el) {
  let qt = parseInt(el.parentNode.children[1].innerHTML)
  let prodPrice = parseInt(el.parentNode.children[4].innerHTML)
  let prodTotal = qt * prodPrice
  //console.log(prodTotal)

  changeTotal(prodTotal)
}



function changeTotal(total) {

  let price = 0;

  let totalPrice = document.querySelectorAll('.full-price');
  for (let i = 0; i < totalPrice.length; i++) {}
  console.log(price)
}

function plus() {
  //Plus Button
  let plusBtn = document.querySelectorAll('.qt-plus');
  for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', () => {
      plusBtn[i].parentNode.children[1].innerHTML = parseInt(plusBtn[i].parentNode.children[1].innerHTML) + 1;
      plusBtn[i].parentNode.children[3].classList.add('added');
      let plus = plusBtn[i]
      window.setTimeout(() => {
        plus.parentNode.children[3].classList.remove('added');
        changeVal(plus)
      }, 150)
    })
  }

}

function minus() {
  //Minus Button
  let minusBtn = document.querySelectorAll('.qt-minus');
  for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', () => {
      let child = minusBtn[i].parentNode.children[1];
      if (parseInt(child.innerHTML) > 1) {
        child.innerHTML = parseInt(child.innerHTML) - 1;
      }
      minusBtn[i].parentNode.children[3].classList.add("minused");
      let minus = minusBtn[i];
      window.setTimeout(() => {
        minus.parentNode.children[3].classList.remove('minused');
        changeVal(minus)
      }, 150)
    })
  }
}

function postCart() {
  let checkOutBtn = document.querySelector('.checkOutBtn');
  let myCart = localStorage.getItem('myCart')
  checkOutBtn.addEventListener('click', () => {
    event.preventDefault();
    fetch('/cart', {
        method: 'POST',
        body: myCart,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        let cart = document.querySelector('#cart');
        cart.innerHTML =
          `<h1>${data.message}</h1>`
        setTimeout(() => {
          window.location.href = '/';
        }, 55000);
        localStorage.clear()
      })
  })
}