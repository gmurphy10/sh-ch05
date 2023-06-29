$('.show-filters').on('click', function() {

// Mobile view - Show & hide fliter list on click
if ($('.filters-list').is(':visible')) {
  $('.filters-list').slideUp()
  $('.show-filters').text('Show filters')
} else {
  $('.filters-list').slideDown()
  $('.show-filters').text('Hide filters')
}

return false

})

$('.filters-list a').on('click', function() {
  
  var filter = $(this).attr('data-filter')

  // Hide products & show the products with filter
  $('.product').hide()
  $(filter).show()

  // Remove selected class from filter
  $('.filters-list a').removeClass('selected')
    // clicked filter link
  $(this).addClass('selected')










  return false

})
