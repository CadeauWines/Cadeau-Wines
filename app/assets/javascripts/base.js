$(document).on( 'page:fetch', function() {
  $('#content').removeClass('show');
});

$(document).on( 'page:change', function() {
  $('#content').addClass('show');

  $('#menu-button').on('click', function() {
    $('#menu').toggleClass('open');
  });

  $('.products-index').masonry({
    columnWidth: 260,
    itemSelector: '.product-card',
    gutter: 20,
    isFitWidth: true
  });
});
