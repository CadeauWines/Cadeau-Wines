$(document).on( 'page:fetch', function() {
  //$('#content').removeClass('show');
});

$(document).on( 'page:change', function() {
  //$('#content').addClass('show');

  $('#menu-button').on('click', function() {
    $('#menu').toggleClass('open');
    $('#menu-button').toggleClass('menu-open');
  });

  if ($('.static-pages-home').length) {
    $('#menu, .container, .cadeau-navbar').addClass('home');

    $(window).scroll( function() {
      var scroll = $(this).scrollTop();

      // No parallax on mobile
      if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        $('.static-pages-home .cover-photo').css("background-position-y", scroll / 2);
        $('.static-pages-home .cover-photo > .header').css({
          "padding-top": 200 + scroll / 2,
          "opacity": 2 - scroll / 150
        });
      }
      if (scroll > 500 - 64 || !($('.static-pages-home').length)) {
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
