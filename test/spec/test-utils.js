(function () {
  'use strict'
  var describe = window.describe
  var it = window.it
  var expect = window.expect
  var Utils = window.Utils
  var localStorage = window.localStorage
  var after = window.after
  var beforeEach = window.beforeEach
  describe('Utils store function', function () {
    describe('Local storage should store stuff', function () {
      it('Should always return array type', function () {
        var storeValue = Utils.store('someRandomKey')
        expect(storeValue instanceof Array).to.equal(true)
        expect(storeValue.length).to.equal(0)
      })
      it('Should persist value to local', function () {
        var storedData = Utils.store('someKey', { name: 'Rahul' })
        expect(storedData).to.deep.equal(JSON.parse(localStorage.getItem('someKey')))
      })
      after(function () {
        localStorage.removeItem('someKey')
      })
    })
    describe('Object lookup function', function () {
      it('Should be able to lookup a multi level object value', function () {
        var dataObject = {cart: {full_name: {first_name: 'test name'}}}
        var returnedValue = Utils.lookupValueInObject('cart.full_name.first_name', dataObject)
        expect(returnedValue).to.not.be.a('undefined')
        expect(returnedValue).to.not.be.a('null')
        expect(returnedValue).to.equal('test name')
      })
    })
  })
})(window)
