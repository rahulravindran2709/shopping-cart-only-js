(function (window, $, ShoppingCartService, ViewHelper) {
  var init = function () {
    /** Make shopping cart instance by making ajax call**/
    $.when(ShoppingCartService.getShoppingItems()).done(function (data) {
      console.log('Successfully called web service' + data)
      ViewHelper.appendShoppingCartItems(data)
    }).fail(function (err) {
      console.error('Error occurred while trying to get list of shopping items' + err)
    })
  }

  $(document).ready(function () {
    var editButtonElem = $('.edit-button')
    var saveButtonElem = $('.save-button')
    var removeItemButton = $('.remove-button')
    var addItemButton = $('.add-button')
    init()
    /** Event bindings */
    $('.shopping-cart-item ').on('click', '.save-button', function () {

    })
  })
})(window, window.jQuery, window.ShoppingCartService, window.ViewHelper)
