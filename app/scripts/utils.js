window.Utils = (function (window) {
  var localStorage = window.localStorage
  var storeLocal = function (key, data) {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data))
    }
    return JSON.parse(localStorage.getItem(key)) || []
  }
  return { store: storeLocal }
})(window)
