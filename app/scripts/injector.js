window.injector = (function () {
  var objectBag = {}
  var registerObjectLocal = function (name, ctr) {
    objectBag[name] = ctr
  }
  var injectLocal = function (dependencies) {
    if (!(dependencies instanceof Array)) {
      console.error('Pass an array of string as input to this method')
      return
    }
  }
  var getObjectFromBagLocal = function (name) {
    return objectBag[name]
  }
  return {
    registerObject: registerObjectLocal,
    inject: injectLocal,
    getObjectFromBag: getObjectFromBagLocal
  }
})()
