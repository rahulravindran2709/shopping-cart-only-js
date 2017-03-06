window.ViewHelper = (function ($, TemplateRenderer) {
  var init = function () {
    var shoppingCartItemTemplate = '<div class="shopping-cart-item"><h3 class="product_name">{{name}}</h3><a href="javascript:void(0)">X</a></div>'
    TemplateRenderer.addTemplate('shoppingCartItem', shoppingCartItemTemplate)
  }
  init()
  var appendShoppingCartItemsLocal = function (productData) {
    var completeString = productData.cartItems.reduce(function (shoppingItems, currentProduct) {
      return shoppingItems + TemplateRenderer.processTemplate('shoppingCartItem', currentProduct)
    }, '')
    console.log('Complete String obtained' + completeString)
    $(completeString).appendTo('.shopping-items-container')
  }
  var removeShoppingCartItemsLocal = function (id) {

  }
  return {
    appendShoppingCartItems: appendShoppingCartItemsLocal,
    removeShoppingCartItems: removeShoppingCartItemsLocal
  }
})(window.jQuery, window.TemplateRenderer)
