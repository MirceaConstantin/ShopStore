var qty = undefined;

function addToCart(id, title) {
  var qty = document.querySelector('#qty');
  if (qty == undefined) {
    qty = 1;
  } else {
    qty = qty.value;
  }
  var cart = {
    productID: id,
    productTitle: title,
    qty: qty
  }
  var myCart;
  if (!myCart) {
    sessionStorage.setItem('item', JSON.stringify(cart))
    myCart = JSON.parse(sessionStorage.item)
    console.log(myCart)
  } else {
    sessionStorage.getItem(myCart.productTitle)
    console.log('else')
  }
}