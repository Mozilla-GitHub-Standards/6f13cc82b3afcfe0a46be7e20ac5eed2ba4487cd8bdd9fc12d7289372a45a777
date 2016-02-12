<?php get_header(); ?>

<div class="below__hero--wrapper"><!-- this div closed out in footer.php -->

	<div class="below__hero--inner">

		<div id="below_hero__nav">

		  <?php
		  	wp_nav_menu(array(
		  		'theme_location' => 'primary',
		  		'menu_class' => 'primary-menu',)
		  	);
		  ?>

	</div>

</div>

<div class="page__main_content">

<h1><?php the_title(); ?></h1>

<?php
	// render the sub-title if supplied
	$header_subtitle = get_field('header_subtitle');
	if($header_subtitle) {
		echo '<h2>' . $header_subtitle . '</h2>';
	}
?>

<div class="header_border"></div>

<?php
	get_template_part('template-parts/content', 'page');
?>

</div>

<?php get_footer(); ?>
