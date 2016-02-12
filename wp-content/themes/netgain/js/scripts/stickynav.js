// Adds Stick and Visibility to the below-hero main navigation.
function sticky_relocate() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();

  if (windowTop > headerHeight) {
      jQuery('#below_hero__nav').addClass('stick visible');
  } else {
      jQuery('#below_hero__nav').removeClass('stick visible');
  }
}

// Fades the in-hero navigation out when the viewport has ~200px left of header image.
function sticky_visibility() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();

  if (windowTop > headerHeight - 200) {
    jQuery('#in_hero__nav').addClass('hide');
  } else {
    jQuery('#in_hero__nav').removeClass('hide');
  }

}

jQuery(window).scroll(function(){
  sticky_relocate();
  sticky_visibility();
});
