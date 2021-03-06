(function (window, $, Utils) {
  /** Declare models**/
  /** ShoppingCart module***/
  function ShoppingCart () {
  /** Shopping cart attributes */

    this.cartItems = Utils.store(this.storageKey)
    this.subscribers = []
  }

  ShoppingCart.prototype.toString = function () {
    return JSON.stringify(this)
  }
  ShoppingCart.prototype.storageKey = 'cartData'
  ShoppingCart.prototype.subscribe = function (subscriberFn) {
    this.subscribers.push(subscriberFn)
  }
  ShoppingCart.prototype.publish = function () {
    Utils.store(this.storageKey, this.cartItems)
    this.subscribers.forEach(function (cb) {
      cb(this.cartItems)
    })
  }
  /* All CRUD operations of shoppingcart model */
  ShoppingCart.prototype.addItem = function (cartItem) {
    if (!(cartItem instanceof Product)) {
      return false
    }
    this.cartItems.push(cartItem)
    this.publish()
    return true
  }
  ShoppingCart.prototype.removeItemById = function (productId) {
    this.cartItems = this.cartItems.filter(function (elem) {
      return elem.productId !== productId
    })
    this.publish()
  }
  ShoppingCart.prototype.getCartItemCount = function () {
    return this.cartItems.reduce(function (currentTotal, currentElem) {
      return currentTotal + currentElem.quantity
    }, 0)
  }
  ShoppingCart.prototype.getItemById = function (productId) {
    return this.cartItems.find(function (elem) {
      return elem.productId === productId
    })
  }
  ShoppingCart.prototype.updateItem = function (productId, newValues) {
    var foundItem = this.getItemById(productId)
    this.cartItems = this.cartItems.map(function (currentProduct) {
      var mergedItem = $.extend(foundItem, newValues)
      return foundItem !== currentProduct ? currentProduct : mergedItem
    })
    this.publish()
  }
  ShoppingCart.prototype.getSubTotalPrice = function () {
    return this.cartItems.reduce(function (currentTotal, currentElem) {
      return currentTotal + (currentElem.price * currentElem.quantity)
    }, 0)
  }
  ShoppingCart.prototype.getDiscountValue = function () {
    var cartItemCount = this.getCartItemCount()
    if (cartItemCount >= 10) {
    // 25%
      return 0.25
    } else if (cartItemCount > 3) {
      // 10%
      return 0.1
    } else if (cartItemCount === 3) {
      // 5%
      return 0.05
    }
  }
/* Product module */
  function Product (productId, name, size, quantity, price, style, color) {
/* Product attributes */
    this.productId = productId || ''
    this.name = name || ''
    this.size = size || ''
    this.quantity = quantity || 0
    this.price = price || 0.0
    this.style = style || ''
    this.color = color || ''
  }
  window.Product = Product
  window.ShoppingCart = ShoppingCart
})(window, window.jQuery, window.Utils)
