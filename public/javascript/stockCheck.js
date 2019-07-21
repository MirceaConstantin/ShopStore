window.addEventListener('DOMContentLoaded', () => {
  console.log('Ready')
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
  plus(myCart)
  minus(myCart)
}

function plus() {
  //Plus Button
  let myCart = JSON.parse(localStorage.getItem('myCart'))
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
      var minus = minusBtn[i];
      window.setTimeout(() => {
        minus.parentNode.children[3].classList.remove('minused');
        changeVal(minus)
      }, 150)
    })
  }
}

function slideUp() {}

function slideRight() {}

function remove() {
  let remove = document.querySelectorAll('.remove');
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', () => {
      remove[i].parentNode.parentNode.classList.add('.removed');
      window.setTimeout(() => {
        console.log('click')
      })
    })
  }
  $(".remove").click(function () {
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(
      function () {
        el.parent().parent().slideUp('fast', function () {
          el.parent().parent().remove();
          if ($(".product").length == 0) {
            if (check) {
              $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal();
        });
      }, 200);
  });
}

var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;

  el.parent().children(".full-price").html(eq + "€");

  changeTotal();
}

function changeTotal() {

  var price = 0;

  $(".full-price").each(function (index) {
    price += parseFloat($(".full-price").eq(index).html());
  });

  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) * 100) / 100;

  if (price == 0) {
    fullPrice = 0;
  }

  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function () {


});