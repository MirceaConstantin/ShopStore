window.addEventListener('DOMContentLoaded', () => {
  checkCart()
})

function checkCart() {
  let emptyCart = document.querySelector('#site-footer')
  let cart = document.querySelector('#cart');
  if (localStorage.length == false) {
    emptyCart.style.display = 'none'
    cart.innerHTML = `<div class="container-fluid">
          <div class="text-center">
            <div class="error mx-auto" data-text="Your cart it's empty.">Your cart it's empty.</div>
            <a class="back" href="/">&larr; Back to Index</a>
          </div>
        </div>`
  } else {
    draw()
  }
}

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

function changeVal(el) {
  let qt = parseInt(el.parentNode.children[1].innerHTML)
  let prodPrice = parseInt(el.parentNode.children[4].innerHTML)
  let prodTotal = qt * prodPrice
  el.parentNode.children[3].innerHTML = `${prodTotal} $`
  changeTotal()
}

function changeTotal() {

  let price = 0;
  // Value
  let fullPrice = document.querySelectorAll('.full-price')
  for (let i = 0; i < fullPrice.length; i++) {
    price += parseFloat(fullPrice[i].innerHTML)
  }

  let total = document.querySelector('.total');
  total.children[0].innerHTML = price + ' $';

  // Items
  let items = 0;
  let item = document.querySelectorAll('.qt');
  for (let i = 0; i < item.length; i++) {
    items += parseInt(item[i].innerHTML)
  }

  let totalItems = document.querySelector('.float-left')
  totalItems.children[0].children[0].innerHTML = items
}

function plus() {
  //Plus Button
  let plusBtn = document.querySelectorAll('.qt-plus');
  for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', () => {
      plusBtn[i].parentNode.children[1].innerHTML = parseInt(plusBtn[i].parentNode.children[1].innerHTML) + 1;
      let myCart = JSON.parse(localStorage.getItem('myCart'))
      myCart[i].qty++
      localStorage.setItem('myCart', JSON.stringify(myCart))
      plusBtn[i].parentNode.children[3].classList.add('added');
      let plus = plusBtn[i]
      window.setTimeout(() => {
        plus.parentNode.children[3].classList.remove('added');
        changeVal(plus)
      }, 150)
      updateQtyCart()
    })
  }
}

function minus() {
  //Minus Button
  let minusBtn = document.querySelectorAll('.qt-minus');
  for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', () => {
      let child = minusBtn[i].parentNode.children[1];
      let myCart = JSON.parse(localStorage.getItem('myCart'))
      if (parseInt(child.innerHTML) >= 1) {
        child.innerHTML = parseInt(child.innerHTML) - 1;
        myCart[i].qty--
        localStorage.setItem('myCart', JSON.stringify(myCart))
      }
      minusBtn[i].parentNode.children[3].classList.add("minused");
      let minus = minusBtn[i];
      window.setTimeout(() => {
        minus.parentNode.children[3].classList.remove('minused');
        changeVal(minus)
      }, 150)
      updateQtyCart()
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
          `<h3>${data.message}</h3>`
        setTimeout(() => {
          window.location.href = '/';
        }, 50000);
        if (data.ok) localStorage.clear()
      })
  })
}