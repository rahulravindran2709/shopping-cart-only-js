(function (window, $, ShoppingCartService) {
  var init = function () {
    /** Make shopping cart instance by making ajax call**/
    $.when(ShoppingCartService.getShoppingItems()).done(function (data) {
    })
  }
  init()
  $(document).ready(function () {
    var editButtonElem = $('.edit-button')
    var saveButtonElem = $('.save-button')
    var removeItemButton = $('.remove-button')
    var addItemButton = $('.add-button')
    /** Event bindings */
    $('.shopping-cart-item ').on('click', '.save-button', function () {

    })
  })
})(window, window.jQuery, window.ShoppingCartService)
