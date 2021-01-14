<?php
/**
 * The searchform.php template.
 *
 * Used any time that get_search_form() is called.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

/*
 * Generate a unique ID for each form and a string containing an aria-label if
 * one was passed to get_search_form() in the args array.
 */
$starting_line_unique_id = wp_unique_id( 'search-form-' );

$starting_line_aria_label = ! empty( $args['aria_label'] ) ? 'aria-label="' . esc_attr( $args['aria_label'] ) . '"' : '';
?>
<form role="search" <?php echo $starting_line_aria_label; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped above. ?> method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div class="input-group">
		<label class="screen-reader-text" for="<?php echo esc_attr( $starting_line_unique_id ); ?>"><?php _e( 'Search for:', 'starting-line' ); // phpcs:ignore: WordPress.Security.EscapeOutput.UnsafePrintingFunction -- core trusts translations ?></label>
		<input type="search" id="<?php echo esc_attr( $starting_line_unique_id ); ?>" class="search-field input-group-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'starting-line' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
		<div class="input-group-button">
			<input type="submit" class="search-submit button" value="<?php echo esc_attr_x( 'Search', 'submit button', 'starting-line' ); ?>" />
		</div>
	</div>
</form>
