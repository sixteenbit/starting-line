<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Starting_Line
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
	  <p class="copyright">
		<?php echo sprintf( __( 'Copyright &copy; %s. All rights reserved.', 'starting-line' ), date( 'Y' ) . '. ' . esc_html( get_bloginfo( 'name' ) ) ); ?>
	  </p>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
