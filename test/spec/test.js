(function () {
  'use strict'
  var describe = window.describe
  var it = window.it
  var expect = window.expect
  var ShoppingCart = window.ShoppingCart
  var Product = window.Product
  describe('Shopping Cart Module', function () {
    describe('CRUD sanity checks for shopping cart', function () {
      var cart = new ShoppingCart()
      it('Cart items is not null', function () {
        expect(cart.cartItems).to.not.be.a('null')
        expect(cart.cartItems).to.not.be.a('undefined')
      })
      it('Cart items length is 0', function () {
        expect(cart.cartItems.length).to.equal(0)
      })
      it('Should add a cart element', function () {
        expect(cart.cartItems.length).to.equal(0)
        cart.addItem(new Product('1', 'test_product', 'S', 2, 10))
        expect(cart.cartItems.length).to.equal(1)
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
    describe('SubTotal price calculation', function () {
      var cart = new ShoppingCart()
      cart.addItem(new Product('1', 'test_product', 'S', 2, 10))
      cart.addItem(new Product('2', 'test_product_2', 'S', 3, 20))
      it('Should calculate the correct total', function () {
        expect(cart.cartItems.length).to.equal(2)
        expect(cart.getSubTotalPrice()).to.equal(80)
      })
    })
    describe('Discount calculation', function () {
      var cart = new ShoppingCart()
      cart.addItem(new Product('1', 'test_product', 'S', 2, 10))
      cart.addItem(new Product('2', 'test_product_2', 'S', 3, 20))
      it('Should apply the correct discount amount', function () {
        expect(cart.getDiscountValue()).to.equal(0.1)
      })
    })
  })
})(window)
