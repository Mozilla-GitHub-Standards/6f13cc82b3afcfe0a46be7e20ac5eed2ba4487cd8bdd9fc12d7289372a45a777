<?php

// enqueue all stylesheets and scripts we need
function netgain_scripts(){
	wp_register_style('netgain', get_stylesheet_directory_uri() . '/css/netgain.min.css');
	wp_enqueue_style('netgain');

	wp_enqueue_script('jquery');
	wp_enqueue_script('netgain', get_stylesheet_directory_uri() . '/js/netgain.min.js');
}
add_action('wp_enqueue_scripts', 'netgain_scripts');

// set up the menu
function netgain_setup() {
	register_nav_menus(array(
		'primary' => __('Primary Menu', 'netgain'),
	));    
}
add_action('after_setup_theme', 'netgain_setup');


// add a "not-front" CSS class if this is not the front page
function netgain_class_names($classes) {
	if( !is_front_page() ) $classes[] = 'not-front';
	return $classes;
}
add_filter('body_class','netgain_class_names');
