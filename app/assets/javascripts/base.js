$(document).on( 'page:fetch', function() {
  $('#content').removeClass('show');
});

$(document).on( 'page:update', function() {
  $('#content').addClass('show');
});