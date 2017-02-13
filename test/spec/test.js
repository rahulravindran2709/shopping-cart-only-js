(function () {
  'use strict'
  var describe = window.describe
  var it = window.it
  var expect = window.expect
  var ShoppingCart = window.ShoppingCart
  var Product = window.Product
  var localStorage = window.localStorage
  var after = window.after
  var beforeEach = window.beforeEach
  var before = window.before
  describe('Shopping Cart Module', function () {
    var cart
    beforeEach(function () {
      localStorage.removeItem('cartData')
      cart = new ShoppingCart()
    })
    describe('Sanity checks for shopping cart instance', function () {
      it('Cart items is not null', function () {
        expect(cart.cartItems).to.not.be.a('null')
        expect(cart.cartItems).to.not.be.a('undefined')
      })
      it('Cart items length is 0', function () {
        expect(cart.cartItems.length).to.equal(0)
      })
    })
    describe('CRUD operations on shopping cart', function () {
      beforeEach(function () {
        cart.addItem(new Product('1', 'test_product', 'S', 2, 10))
      })
      it('Should add a cart element', function () {
        expect(cart.cartItems.length).to.equal(1)
        cart.addItem(new Product('2', 'test_product', 'S', 2, 10))
        expect(cart.cartItems.length).to.equal(2)
      })
      it('Should be able to fetch the cart item', function () {
        var currentItem = cart.getItemById('1')
        expect(currentItem).to.not.be.a('null')
        expect(currentItem.name).to.be.equal('test_product')
      })
      it('Should update the value of the item', function () {
        expect(cart.cartItems.length).to.equal(1)
        cart.updateItem('1', { name: 'test_product1' })
        expect(cart.cartItems.length).to.equal(1)
        expect(cart.cartItems[0].name).to.not.be.a('undefined')
        expect(cart.cartItems[0].name).to.not.be.a('null')
        expect(cart.cartItems[0].name).to.equal('test_product1')
      })

      it('Should report the correct number of items present in the cart', function () {
        expect(cart.getCartItemCount()).to.equal(2)
      })

      it('Should remove element from cart', function () {
        expect(cart.cartItems.length).to.equal(1)
        cart.removeItemById('1')
        expect(cart.cartItems.length).to.equal(0)
      })
    })
    describe('Publish scubscribe mechanism', function () {
      var count
      beforeEach(function () {
        count = 0
        cart.subscribe(function () {
          count++
        })
      })
      it('Should update subscribers queue with a given function', function () {
        expect(cart.subscribers.length).to.equal(1)
      })
      it('Should execute the subscriber function when publish is invoked', function () {
        cart.publish()
        expect(count).to.equal(1)
      })
    })
    /** Tests for price and discounts */
    describe('SubTotal price calculation', function () {
      beforeEach(function () {
        cart.addItem(new Product('1', 'test_product', 'S', 2, 10))
        cart.addItem(new Product('2', 'test_product_2', 'S', 3, 20))
      })

      it('Should calculate the correct total', function () {
        expect(cart.cartItems.length).to.equal(2)
        expect(cart.getSubTotalPrice()).to.equal(80)
      })
    })
    describe('Discount calculation', function () {
      beforeEach(function () {
        cart.addItem(new Product('1', 'test_product', 'S', 2, 10))
        cart.addItem(new Product('2', 'test_product_2', 'S', 3, 20))
      })

      it('Should apply the correct discount amount', function () {
        expect(cart.getDiscountValue()).to.equal(0.1)
      })
    })
  })
})(window)
