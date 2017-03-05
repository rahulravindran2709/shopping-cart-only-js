window.Utils = (function (window) {
  var localStorage = window.localStorage
  var storeLocal = function (key, data) {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data))
    }
    return JSON.parse(localStorage.getItem(key)) || []
  }
  var lookupValueInObjectLocal = function (fieldName, dataObject) {
    try {
      return fieldName.split('.').reduce(function (smallerObject, currentField) {
        console.log('Field name recieved' + currentField + ' object' + JSON.stringify(smallerObject))
        return smallerObject[currentField]
      }, dataObject)
    } catch (error) {
      console.log('Error occurred in lookup' + error)
      return ''
    }
  }
  return { store: storeLocal,
    lookupValueInObject: lookupValueInObjectLocal
  }
})(window)
