$(document).ready(function(){
	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  $('.dropdown').on('show.bs.dropdown', function(e){
  	$('.dropdown-menu').stop(true, true).slideUp(150);
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
     $(this).find("second-drop").first().click(function(){
     	$( "second-drop" ).toggle( "slide" )
     });
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').stop(true, true).slideUp(0);
  });
});