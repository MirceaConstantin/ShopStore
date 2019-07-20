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
        <h1>${myCart[i].productTitle}</h1>
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
}

let check = false;

function changeVal(el) {
  let qt = parseFloat()
  console.log(el.parentNode.children[4].innerHTML)
  /* var qt = parseFloat(
    el
    .parent()
    .children(".qt")
    .html()
  ); */
  /*   var price = parseFloat(
      el
      .parent()
      .children(".price")
      .html()
    ); */
  /*   var eq = Math.round(price * qt * 100) / 100;

    el
      .parent()
      .children(".full-price")
      .html(eq + "€");

    changeTotal(); */
}

function changeTotal() {
  var price = 0;

  $(".full-price").each(function (index) {
    price += parseFloat(
      $(".full-price")
      .eq(index)
      .html()
    );
  });

  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100;
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
  let removeBtn = document.querySelectorAll('.remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', () => {
      let remove = removeBtn[i];
      remove.parentNode.parentNode.classList.add("remove");
      window.setTimeout(() => {
        remove.parentNode.parentNode.slideUp("fast", () => {
          remove.parentNode.parentNode.remove;
          //If product == 0
        })
      }, 200)
    })
  }


  $(".remove").click(function () {
    var el = $(this);
    el
      .parent()
      .parent()
      .addClass("removed");
    window.setTimeout(function () {
      el
        .parent()
        .parent()
        .slideUp("fast", function () {
          el
            .parent()
            .parent()
            .remove();
          if ($(".product").length == 0) {
            if (check) {
              $("#cart").html(
                "<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>"
              );
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal();
        });
    }, 200);
  });

  //Plus Button
  let plusBtn = document.querySelectorAll('.qt-plus');
  for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', () => {
      let plus = plusBtn[i];
      parseInt(plus.parentNode.children[i].innerHTML)
      plus.parentNode.children[i + 2].classList.add('added')
      window.setTimeout(() => {
        plus.parentNode.children[i + 2].classList.remove('added')
        changeVal(plus)
      }, 150)
    })
  }

  //Minus Button
  let minusBtn = document.querySelectorAll('.qt-minus');
  for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', () => {
      let minus = minusBtn[i].parentNode.children[i];
      if (parseInt(minus.innerHTML) > 1) {
        minus.innerHTML = parseInt(minus.innerHTML) - 1
      }
      minus.parentNode.children[i + 2].classList.add('minused')
      window.setTimeout(() => {
        minus.parentNode.children[i + 2].classList.remove('minused')
        changeVal(minus)
      }, 150)
      //console.log(minus)
    })
  }

  /*   $(".btn").click(function () {
      check = true;
      $(".remove").click();
    }); */
});