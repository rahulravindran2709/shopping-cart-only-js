(function () {
  'use strict'
  var describe = window.describe
  var it = window.it
  var expect = window.expect
  var after = window.after
  var before = window.before
  var beforeEach = window.beforeEach
  var Injector = window.injector
  describe('Dependency injector tests', function () {
    describe('Should be able to register a object', function () {
      var testObject = function () {
        return {testProperty: 'someName'}
      }
      var registeredObject
      before(function () {
        registeredObject = Injector.registerObject('testObject', testObject)
      })
      it('Should return the registered object', function () {
        expect(registeredObject).to.not.be.a('undefined')
        expect(registeredObject.length).equal(0)
        expect(registeredObject).to.equal(testObject)
      })
      it('Should have saved the object to object bag instance', function () {
        var objectFromBag = Injector.getObjectFromBag('testObject')
        expect(objectFromBag).to.not.be.a('undefined')
        expect(objectFromBag.length).not.equal(0)
        expect(registeredObject).to.equal(objectFromBag)
      })
      after(function () {
      })
    })

    describe('Should be able to lookup and inject dependencies', function () {
      var object1, registeredObject, dep1, dep2, dep3, registeredDep1, registeredDep2, registeredDep3
      before(function () {
        registeredObject = Injector.registerObject('testObject1', object1)
        registeredDep1 = Injector.registerObject('dep1', dep1)
        registeredDep2 = Injector.registerObject('testObject1', dep2)
        registeredDep3 = Injector.registerObject('testObject1', dep3)
      })
      it('Should be able to inject multiple depedencies as arguments', function () {
        var injectedObject = Injector.inject('testObject1', ['dep1', 'dep2', 'dep3'])
        expect(injectedObject).to.deep.equal(registeredObject)
        expect()
      })
    })
  })
})(window)
