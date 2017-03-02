$(document).ready(function(){
  
  var hamburgerMenu = $('.btn');
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
    
    if (nav.is(':hidden')) {
      nav.show();
      list.css('flex-direction', 'column');
    } else {
      nav.hide();
    }
    
  });
  
  /*
  $(window).on('resize', function() {
    if ($(window).width() <= 882) {
      hamburgerMenu.removeClass('hidden');
      nav.addClass('hidden');
    } else {
      hamburgerMenu.addClass('hidden');
      nav.removeClass('hidden');
    }
  });
  
  hamburgerMenu.on('click', function() {
    
    if(nav.hasClass('hidden')) {
      nav.show();
    }
    
    
  });
  */
});