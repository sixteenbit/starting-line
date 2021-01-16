<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Starting_Line
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function starting_line_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Check whether we're singular.
	if ( is_singular() ) {
		$classes[] = 'singular';
	}

	return $classes;
}
add_filter( 'body_class', 'starting_line_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function starting_line_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'starting_line_pingback_header' );


/**
 * Renames sticky class.
 *
 * @param $classes
 *
 * @return array
 */
function starting_line_change_sticky_class( $classes ) {
	if ( in_array( 'sticky', $classes, true ) ) {
		$classes   = array_diff( $classes, array( 'sticky' ) );
		$classes[] = 'sticky-post';
	}

	return $classes;
}

add_filter( 'post_class', 'starting_line_change_sticky_class' );
