/*
function callout_animate() {
  var windowTop = jQuery(window).scrollTop();
  var scrollPosManual = jQuery(".callout").offset().top;

  if (windowTop >= scrollPosManual - 500) {
    jQuery('.callout').addClass('active');
  } //else {
    //jQuery('.callout').removeClass('active');
  //}

}

jQuery(window).scroll(function() {
  callout_animate();
});
*/
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

//Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('#nav-icon2').outerHeight();

jQuery(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        jQuery('#mobile__nav, #nav-icon2').removeClass('open');
        jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('shimmer');
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        jQuery('.mobile__nav--wrapper').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('.mobile__nav--wrapper').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
//Hide Container if outside is clicked.
//jQuery(document).mouseup(function (e) {
jQuery(document).on('click' , function (e) {
  var container = jQuery(".mobile__nav--wrapper");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    jQuery('#nav-icon2, #mobile__nav').removeClass('open');
    jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('shimmer');
    jQuery('#header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('pointer');
  }
});

//Hide Fixed nav bar while we're in the header region
function fixed_nav_hide() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();

  if (windowTop < headerHeight) {
    jQuery('.mobile__nav--wrapper').addClass('nav-white');
  } else {
    jQuery('.mobile__nav--wrapper').removeClass('nav-white');
  }
}

function nav_colour() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();
  var scrollPos = jQuery(".page__main_content").outerHeight() + jQuery('header').outerHeight();

  if (windowTop > headerHeight) {
      jQuery('#nav-icon2').addClass('colour');
      jQuery('#mobile__nav').addClass('colour-bg');
  } else {
      jQuery('#nav-icon2').removeClass('colour');
      jQuery('#mobile__nav').removeClass('colour-bg');
  }
}

function nav_uncolour() {
  var windowTop = jQuery(window).scrollTop();
  var headerHeight = jQuery('#header__full_viewport').height();
  var scrollPos = jQuery(".page__main_content").outerHeight() + jQuery('header').outerHeight();
  
  if (windowTop > scrollPos) {
    jQuery('#mobile__nav').removeClass('colour-bg');
    //jQuery('#nav-icon2').removeClass('colour');
  } else if (windowTop < scrollPos && windowTop > headerHeight) {
    jQuery('#mobile__nav').addClass('colour-bg');
    jQuery('#nav-icon2').addClass('colour');
  }
}

//Adding class of "Open" to the mobile nav to apply CSS styles.
jQuery(document).ready(function(){
  jQuery('#nav-icon2').click(function(){
    jQuery(this).toggleClass('open');
    jQuery('#mobile__nav').toggleClass('open');
    jQuery('#header__full_viewport, .page__main_content, .learn__more--background, footer').toggleClass('pointer');
    jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').toggleClass('shimmer');
  });
  fixed_nav_hide();
});

jQuery(window).scroll(function(){
  nav_colour();
  nav_uncolour();
  fixed_nav_hide();
});

jQuery(window).resize(function(){
  jQuery('.mobile__site_title, #header__full_viewport, .page__main_content, .learn__more--background, footer').removeClass('shimmer');
});

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
