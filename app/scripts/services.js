(function (window, $, ShoppingCart, Product) {
  var defaultJson = '{"productsInCart":[{"p_id":"1", "p_name":"cotton tshirt", "p_variation":"solid green", "p_style":"ms13kt1906", "p_selected_color":{"name":"blue", "hexcode":"#1169BD"}, "p_selected_size":{"name":"small", "code":"s"}, "p_available_options":{"colors":[{"name":"green", "hexcode":"#A3D2A1"}, {"name":"yellow", "hexcode":"#F9F8E6"}, {"name":"red", "hexcode":"#ED99A8"} ], "sizes":[{"name":"small", "code":"s"}, {"name":"medium", "code":"m"}, {"name":"large", "code":"l"}, {"name":"extra large", "code":"xl"} ] }, "p_quantity":1, "p_originalprice":11.0, "p_price":11.0, "c_currency":"$"}, {"p_id":"2", "p_name":"print girls tee", "p_variation":"pink rainbow", "p_style":"ms13kt1906", "p_selected_color":{"name":"pink", "hexcode":"#F1DDEF"}, "p_selected_size":{"name":"small", "code":"s"}, "p_available_options":{"colors":[{"name":"green", "hexcode":"#A3D2A1"}, {"name":"yellow", "hexcode":"#F9F8E6"}, {"name":"pink", "hexcode":"#F1DDEF"} ], "sizes":[{"name":"small", "code":"s"}, {"name":"medium", "code":"m"}, {"name":"large", "code":"l"}, {"name":"extra large", "code":"xl"} ] }, "p_quantity":1, "p_originalprice":17.0, "p_price":17.0, "c_currency":"$"}, {"p_id":"3", "p_name":"flower pattern shirt", "p_variation":"blue", "p_style":"ms13kt1906", "p_selected_color":{"name":"blue", "hexcode":"#1169BD"}, "p_selected_size":{"name":"small", "code":"s"}, "p_available_options":{"colors":[{"name":"green", "hexcode":"#A3D2A1"}, {"name":"blue", "hexcode":"#1169BD"}, {"name":"red", "hexcode":"#ED99A8"} ], "sizes":[{"name":"small", "code":"s"}, {"name":"medium", "code":"m"}, {"name":"large", "code":"l"}, {"name":"extra large", "code":"xl"} ] }, "p_quantity":1, "p_originalprice":21.0, "p_price":9.0, "c_currency":"$"}, {"p_id":"4", "p_name":"check pattern tshirt", "p_variation":"mens red", "p_style":"ms13kt1906", "p_selected_color":{"name":"red", "hexcode":""}, "p_selected_size":{"name":"small", "code":"s"}, "p_available_options":{"colors":[{"name":"green", "hexcode":"#A3D2A1"}, {"name":"yellow", "hexcode":"#F9F8E6"}, {"name":"red", "hexcode":"#ED99A8"} ], "sizes":[{"name":"small", "code":"s"}, {"name":"medium", "code":"m"}, {"name":"large", "code":"l"}, {"name":"extra large", "code":"xl"} ] }, "p_quantity":1, "p_originalprice":22.0, "p_price":22.0, "c_currency":"$"} ] }'
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
  var cartItems = mapShoppingResponseToModel(data.productsInCart)
  var cart = new ShoppingCart()
  cart.cartItems = cartItems
  deferred.resolve(cart)
}).fail(function (error) {
  var defaultData = JSON.parse(defaultJson)
  var cartItems = mapShoppingResponseToModel(defaultData.productsInCart)
  var cart = new ShoppingCart()
  cart.cartItems = cartItems
  deferred.resolve(cart)
})
    return deferred.promise()
  }
  window.ShoppingCartService = {
    getShoppingItems: getShoppingItemsLocal
  }
})(window, window.jQuery, window.ShoppingCart, window.Product)
