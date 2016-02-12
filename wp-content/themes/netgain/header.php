<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
  <title><?php wp_title(); ?></title>

    <script>
    /* COMMENTED OUT FOR NOW UNTIL WE NEAR LAUNCH
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-35600958-1', 'auto');
      ga('send', 'pageview');
	*/
    </script>
</head>

<body <?php body_class(); ?>>

<header>

  <!--Mobile Menu Wrapper -->
  <div class="mobile__nav--wrapper">
    <span class="mobile__site_title"><a href="/">The Netgain Partnership</a></span>
    <!--Mobile Menu Trigger -->
    <div id="nav-icon2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!--Mobile Menu -->
    <div id="mobile__nav">
      <?php
        wp_nav_menu(array(
          'theme_location' => 'primary',
          'menu_class' => 'primary-menu',)
        );
      ?>
    </div>
    <!--End Mobile Menu -->
  </div>
  <!--End Mobile Menu wrapper -->

		<div id="header__full_viewport">

      <div class="header__inner_wrapper">

        <?php
          // render the partners
          get_template_part( 'template-parts/partners' );
        ?>

        <div class="header__content_wrapper">
          <?php
    				// Render header content
    				$header_content = get_field('header_content', $post->ID);
    				echo $header_content;
    			?>
        </div>

        <div id="in_hero__nav">
    			<?php
    				wp_nav_menu(array(
    					'theme_location' => 'primary',
    					'menu_class' => 'primary-menu',)
    				);
    			?>
        </div>

      </div>

		</div>

</header>
