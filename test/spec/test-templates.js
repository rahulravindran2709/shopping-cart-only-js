(function () {
  'use strict'
  var describe = window.describe
  var it = window.it
  var expect = window.expect
  var Utils = window.Utils
  var localStorage = window.localStorage
  var after = window.after
  var afterEach = window.afterEach
  var beforeEach = window.beforeEach
  var TemplateRenderer = window.TemplateRenderer
  describe('Template function', function () {
    describe('Adding Template function', function () {
      it('Should add template function', function () {
        var shoppingCartItemTemplate = '<div class="shopping-cart-item"><h3 class="product_name">##cart.p_name##</h3></div>'
        var returnValue = TemplateRenderer.addTemplate('shoppingCartItem', shoppingCartItemTemplate)
        expect(returnValue).to.equal('template successfully added')
      })
    })
    describe('Populating template function ', function () {
      beforeEach(function () {
        var shoppingCartItemTemplate = '<div class="shopping-cart-item"><h3 class="product_name">{{cart.p_name}}</h3></div>'
        TemplateRenderer.addTemplate('shoppingCartItem', shoppingCartItemTemplate)
      })
      afterEach(function () {
        TemplateRenderer.removeAll()
      })
      it('Should populate the data into the template', function () {
        var processedString = TemplateRenderer.processTemplate('shoppingCartItem', {cart: {p_name: 'My name'}})
        expect(processedString).to.not.be.a('undefined')
        expect(processedString).to.equal('<div class="shopping-cart-item"><h3 class="product_name">My name</h3></div>')
      })
      it('Should be able to replace multiple property from given data', function () {
        var mutlipleShoppingTemplate = '<div class="shopping-cart-item"><h3 class="product_name">{{cart.p_name}}</h3><span class="product_description">{{cart.p_description}}</span></div>'
        TemplateRenderer.addTemplate('multipleShoppingCartItem', mutlipleShoppingTemplate)
        var processedString = TemplateRenderer.processTemplate('multipleShoppingCartItem', {cart: {p_name: 'My name', p_description: 'My description'}})
        expect(processedString).to.not.be.a('undefined')
        expect(processedString).to.equal('<div class="shopping-cart-item"><h3 class="product_name">My name</h3><span class="product_description">My description</div>')
      })
    })
  })
})(window)
