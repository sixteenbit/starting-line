/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute',
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					clip: 'auto',
					position: 'relative',
				} );
				$( '.site-title a, .site-description' ).css( {
					color: to,
				} );
			}
		} );
	} );
}( jQuery ) );

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b21pemVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB3cCwgalF1ZXJ5ICovXG4vKipcbiAqIEZpbGUgY3VzdG9taXplci5qcy5cbiAqXG4gKiBUaGVtZSBDdXN0b21pemVyIGVuaGFuY2VtZW50cyBmb3IgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlLlxuICpcbiAqIENvbnRhaW5zIGhhbmRsZXJzIHRvIG1ha2UgVGhlbWUgQ3VzdG9taXplciBwcmV2aWV3IHJlbG9hZCBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LlxuICovXG5cbiggZnVuY3Rpb24oICQgKSB7XG5cdC8vIFNpdGUgdGl0bGUgYW5kIGRlc2NyaXB0aW9uLlxuXHR3cC5jdXN0b21pemUoICdibG9nbmFtZScsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG5cdFx0XHQkKCAnLnNpdGUtdGl0bGUgYScgKS50ZXh0KCB0byApO1xuXHRcdH0gKTtcblx0fSApO1xuXHR3cC5jdXN0b21pemUoICdibG9nZGVzY3JpcHRpb24nLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuXHRcdFx0JCggJy5zaXRlLWRlc2NyaXB0aW9uJyApLnRleHQoIHRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gSGVhZGVyIHRleHQgY29sb3IuXG5cdHdwLmN1c3RvbWl6ZSggJ2hlYWRlcl90ZXh0Y29sb3InLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuXHRcdFx0aWYgKCAnYmxhbmsnID09PSB0byApIHtcblx0XHRcdFx0JCggJy5zaXRlLXRpdGxlLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcblx0XHRcdFx0XHRjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5zaXRlLXRpdGxlLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcblx0XHRcdFx0XHRjbGlwOiAnYXV0bycsXG5cdFx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0JCggJy5zaXRlLXRpdGxlIGEsIC5zaXRlLWRlc2NyaXB0aW9uJyApLmNzcygge1xuXHRcdFx0XHRcdGNvbG9yOiB0byxcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xufSggalF1ZXJ5ICkgKTtcbiJdLCJmaWxlIjoiY3VzdG9taXplci5qcyJ9
