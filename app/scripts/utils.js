window.Utils = (function (window) {
  var localStorage = window.localStorage
  var storeLocal = function (key, data) {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data))
    }
    return JSON.parse(localStorage.getItem(key)) || []
  }
  var lookupValueInObjectLocal = function (fieldName, dataObject) {
    console.log('Field name recieved' + fieldName)
    return fieldName.split('.').reduce(function (a, b) {
      return a[b]
    }, dataObject)
  }
  return { store: storeLocal,
    lookupValueInObject: lookupValueInObjectLocal
  }
})(window)
