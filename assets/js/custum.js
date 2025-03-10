// side-tabe
var dropdown = 'nav li:has(ul)',
  dropdown_ul = 'nav li ul',
  nav_ul = 'nav > ul',
  nav_toggle = 'nav .nav-toggle',
  open_class = 'open',
  desktop_class = 'desktop',
  breakpoint = 640,
  anim_delay = 200;


function isDesktop() {
  return ($(window).width() > breakpoint);
}


$(function () {
  $(document).click(function (e) {
    var target = $(e.target).parent();
    var target_ul = target.children('ul');

    if (!isDesktop()) {
      $(dropdown).not(target).removeClass(open_class);
      $(dropdown_ul).not(target_ul).slideUp(anim_delay);

      if (target.is(dropdown)) {
        target.toggleClass(open_class);
        target_ul.slideToggle(anim_delay);
      }

      if (target.is(nav_toggle)) {
        target.toggleClass(open_class);
        $(nav_ul).slideToggle(anim_delay);
      }
    }
  })

  $(window).resize(function () {
    $('body').toggleClass(desktop_class, isDesktop());

    if (isDesktop()) {
      $(dropdown).removeClass(open_class);
      $(dropdown_ul).hide();
      $(nav_toggle).addClass(open_class);
      $(nav_ul).show();
    }
  });

  $(window).resize();
});

// side-tabe





// Bottom-To-Top-Section
// Scroll Top To Bottom
$(document).on('click', '#scrollToTop', function () {
  $('html,body').animate({ scrollTop: 0 }, 500);
  return false;
});
//button control
$(document).scroll(function (e) {
  var scrollPos = $(this).scrollTop();
  if (scrollPos < 100) {
    $('#scrollToTop').addClass('scroll-hide');
  } else {
    $('#scrollToTop').removeClass('scroll-hide');
  }
});
// Scroll Top To Bottom
// Bottom-To-Top-Section
