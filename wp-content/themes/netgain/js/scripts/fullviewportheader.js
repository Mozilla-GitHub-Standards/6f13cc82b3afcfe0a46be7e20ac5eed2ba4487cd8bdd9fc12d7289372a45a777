jQuery(document).ready(function($){
 // Defining a function to set size for #hero
    function fullscreen(){
        jQuery('#header__full_viewport').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }

    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();
    });

});
