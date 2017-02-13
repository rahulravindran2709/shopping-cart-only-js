(function (window, $, ShoppingCart, Product) {
  var mapShoppingResponseToModel = function (productsInCart) {
    var cartItems = productsInCart.map(function (product) {
      return new Product(product.p_id, product.p_name, product.p_selected_size,
       product.p_quantity, product.p_price, product.p_style, product.p_selected_color)
    })
    return cartItems
  }
  var getShoppingItemsLocal = function () {
  	var deferred = $.Deferred()
    $.ajax({url: 'http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm', crossDomain: true, dataType: 'jsonp'})
.done(function (data) {
  console.log('sucess' + JSON.stringify(data.productsInCart))
  var cartItems = mapShoppingResponseToModel(data.productsInCart)
  var cart = new ShoppingCart()
  console.log(cartItems)
  cart.cartItems = cartItems
  deferred.resolve(cart)
}).fail(function (error) {
  console.log('failure')
  deferred.reject('failure' + error)
})
    return deferred.promise()
  }
  window.ShoppingCartService = {
    getShoppingItems: getShoppingItemsLocal
  }
})(window, window.jQuery, window.ShoppingCart, window.Product)
