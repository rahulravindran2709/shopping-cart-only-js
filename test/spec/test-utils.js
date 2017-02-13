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
})(window)
