$(document).ready(function(){
  
  $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
  
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
    
    if (nav.is(':hidden')) {
      nav.show();
      list.css('flex-direction', 'column');
    } else {
      nav.hide();
    }
    
  });
  
});