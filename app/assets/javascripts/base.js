$(document).on( 'page:fetch', function() {
  $('#content').removeClass('show');
});

$(document).on( 'page:change', function() {
  $('#content').addClass('show');

  $('#menu-button').on('click', function() {
    $('#menu').toggleClass('open');
  });

  if ($('.static-pages-home').length) {
    $('#menu, .container, .cadeau-navbar').addClass('home');

    $(window).scroll( function() {
      console.log('sd');
      if ($(this).scrollTop() > 500 - 64) {
        $('.cadeau-navbar').removeClass('home');
      } else {
        $('.cadeau-navbar').addClass('home');
      }
    });
  }

  $('.products-index').masonry({
    columnWidth: 260,
    itemSelector: '.product-card',
    gutter: 20,
    isFitWidth: true
  });
});
