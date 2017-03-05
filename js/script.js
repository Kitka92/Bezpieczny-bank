$(document).ready(function(){
  /*
  var hamburgerMenu = $('#nav-icon3');
  var nav = $('nav');
  var list = nav.find('ul');
  hamburgerMenu.addClass('hidden');

  $(window).on('resize', function() {
    if ($(window).width() <= 882) {
      hamburgerMenu.removeClass('hidden');
      nav.hide();
    } else {
      hamburgerMenu.addClass('hidden');
      nav.show();
    }
  });

  hamburgerMenu.on('click', function() {
    
    $(this).toggleClass('open');
    
    if (nav.is(':hidden')) {
      nav.show();
      list.css('flex-direction', 'column');
    } else {
      nav.hide();
    }
    
  });
  */
  
  var hamburger = $('#nav-icon3');
  var nav = $('nav');
  var list = nav.find('ul');
  
  hamburger.hide();
  
  if ($(window).width() <= 882) {
    hamburger.show();
    nav.hide();
  } else {
    hamburger.hide();
    nav.show();
  }
  
  hamburger.on('click', function() {
    
    $(this).toggleClass('open');
    
    if (nav.is(':hidden')) {
      nav.show();
      list.css('flex-direction', 'column');
    } else {
      nav.hide();
    }
    
  });
  
});