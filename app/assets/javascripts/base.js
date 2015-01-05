$(document).on( 'page:fetch', function() {
  $('#content').removeClass('show');
});

$(document).on( 'page:change', function() {
  $('#content').addClass('show');

  $('#menu-button').on('click', function() {
    $('#menu').toggleClass('open');
  });
});
