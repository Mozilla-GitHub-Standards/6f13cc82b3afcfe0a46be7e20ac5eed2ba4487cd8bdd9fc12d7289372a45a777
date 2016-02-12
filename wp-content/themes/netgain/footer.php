<div class="learn__more--background">

  <div class="learn__more--inner">
    <?php
    	// render pre-footer section
    	echo do_shortcode('[smartblock id=25]');
    ?>
  </div>

</div>

<footer>
  <div class="footer__inner--wrapper">
    
    <div class="footer__contact--title">
      Contact
    </div>
    
    <div class="footer__contact--link">
      <a href="mailto:pereira@knightfoundation.org">pereira@knightfoundation.org</a>
    </div>

    <?php
      // render the partners
      get_template_part( 'template-parts/partners' );
    ?>

  </div>

</footer>

<?php wp_footer(); ?>

</div><!-- /below__hero--wrapper -->

</body>
</html>
