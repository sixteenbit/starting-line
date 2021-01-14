/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	const siteNavigation = document.getElementById( 'site-navigation' );

	// Return early if the navigation don't exist.
	if ( ! siteNavigation ) {
		return;
	}

	const button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];

	// Return early if the button don't exist.
	if ( 'undefined' === typeof button ) {
		return;
	}

	const menu = siteNavigation.getElementsByTagName( 'ul' )[ 0 ];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( ! menu.classList.contains( 'nav-menu' ) ) {
		menu.classList.add( 'nav-menu' );
	}

	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
	button.addEventListener( 'click', function() {
		siteNavigation.classList.toggle( 'toggled' );

		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
			button.setAttribute( 'aria-expanded', 'false' );
		} else {
			button.setAttribute( 'aria-expanded', 'true' );
		}
	} );

	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
	document.addEventListener( 'click', function( event ) {
		const isClickInside = siteNavigation.contains( event.target );

		if ( ! isClickInside ) {
			siteNavigation.classList.remove( 'toggled' );
			button.setAttribute( 'aria-expanded', 'false' );
		}
	} );

	// Get all the link elements within the menu.
	const links = menu.getElementsByTagName( 'a' );

	// Get all the link elements with children within the menu.
	const linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

	// Toggle focus each time a menu link is focused or blurred.
	for ( const link of links ) {
		link.addEventListener( 'focus', toggleFocus, true );
		link.addEventListener( 'blur', toggleFocus, true );
	}

	// Toggle focus each time a menu link with children receive a touch event.
	for ( const link of linksWithChildren ) {
		link.addEventListener( 'touchstart', toggleFocus, false );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		if ( event.type === 'focus' || event.type === 'blur' ) {
			let self = this;
			// Move up through the ancestors of the current link until we hit .nav-menu.
			while ( ! self.classList.contains( 'nav-menu' ) ) {
				// On li elements toggle the class .focus.
				if ( 'li' === self.tagName.toLowerCase() ) {
					self.classList.toggle( 'focus' );
				}
				self = self.parentNode;
			}
		}

		if ( event.type === 'touchstart' ) {
			const menuItem = this.parentNode;
			event.preventDefault();
			for ( const link of menuItem.parentNode.children ) {
				if ( menuItem !== link ) {
					link.classList.remove( 'focus' );
				}
			}
			menuItem.classList.toggle( 'focus' );
		}
	}
}() );

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHRjb25zdCBzaXRlTmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1uYXZpZ2F0aW9uJyApO1xuXG5cdC8vIFJldHVybiBlYXJseSBpZiB0aGUgbmF2aWdhdGlvbiBkb24ndCBleGlzdC5cblx0aWYgKCAhIHNpdGVOYXZpZ2F0aW9uICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGJ1dHRvbiA9IHNpdGVOYXZpZ2F0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYnV0dG9uJyApWyAwIF07XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIHRoZSBidXR0b24gZG9uJ3QgZXhpc3QuXG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBidXR0b24gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbWVudSA9IHNpdGVOYXZpZ2F0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAndWwnIClbIDAgXTtcblxuXHQvLyBIaWRlIG1lbnUgdG9nZ2xlIGJ1dHRvbiBpZiBtZW51IGlzIGVtcHR5IGFuZCByZXR1cm4gZWFybHkuXG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBtZW51ICkge1xuXHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggISBtZW51LmNsYXNzTGlzdC5jb250YWlucyggJ25hdi1tZW51JyApICkge1xuXHRcdG1lbnUuY2xhc3NMaXN0LmFkZCggJ25hdi1tZW51JyApO1xuXHR9XG5cblx0Ly8gVG9nZ2xlIHRoZSAudG9nZ2xlZCBjbGFzcyBhbmQgdGhlIGFyaWEtZXhwYW5kZWQgdmFsdWUgZWFjaCB0aW1lIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdHNpdGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC50b2dnbGUoICd0b2dnbGVkJyApO1xuXG5cdFx0aWYgKCBidXR0b24uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcgKSA9PT0gJ3RydWUnICkge1xuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Ly8gUmVtb3ZlIHRoZSAudG9nZ2xlZCBjbGFzcyBhbmQgc2V0IGFyaWEtZXhwYW5kZWQgdG8gZmFsc2Ugd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgbmF2aWdhdGlvbi5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdGNvbnN0IGlzQ2xpY2tJbnNpZGUgPSBzaXRlTmF2aWdhdGlvbi5jb250YWlucyggZXZlbnQudGFyZ2V0ICk7XG5cblx0XHRpZiAoICEgaXNDbGlja0luc2lkZSApIHtcblx0XHRcdHNpdGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoICd0b2dnbGVkJyApO1xuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Ly8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG5cdGNvbnN0IGxpbmtzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2EnICk7XG5cblx0Ly8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoIGNoaWxkcmVuIHdpdGhpbiB0aGUgbWVudS5cblx0Y29uc3QgbGlua3NXaXRoQ2hpbGRyZW4gPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuID4gYScgKTtcblxuXHQvLyBUb2dnbGUgZm9jdXMgZWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZC5cblx0Zm9yICggY29uc3QgbGluayBvZiBsaW5rcyApIHtcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1cycsIHRvZ2dsZUZvY3VzLCB0cnVlICk7XG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlICk7XG5cdH1cblxuXHQvLyBUb2dnbGUgZm9jdXMgZWFjaCB0aW1lIGEgbWVudSBsaW5rIHdpdGggY2hpbGRyZW4gcmVjZWl2ZSBhIHRvdWNoIGV2ZW50LlxuXHRmb3IgKCBjb25zdCBsaW5rIG9mIGxpbmtzV2l0aENoaWxkcmVuICkge1xuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b2dnbGVGb2N1cywgZmFsc2UgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG9yIHJlbW92ZXMgLmZvY3VzIGNsYXNzIG9uIGFuIGVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b2dnbGVGb2N1cygpIHtcblx0XHRpZiAoIGV2ZW50LnR5cGUgPT09ICdmb2N1cycgfHwgZXZlbnQudHlwZSA9PT0gJ2JsdXInICkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Ly8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuXHRcdFx0d2hpbGUgKCAhIHNlbGYuY2xhc3NMaXN0LmNvbnRhaW5zKCAnbmF2LW1lbnUnICkgKSB7XG5cdFx0XHRcdC8vIE9uIGxpIGVsZW1lbnRzIHRvZ2dsZSB0aGUgY2xhc3MgLmZvY3VzLlxuXHRcdFx0XHRpZiAoICdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRcdHNlbGYuY2xhc3NMaXN0LnRvZ2dsZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYgPSBzZWxmLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgKSB7XG5cdFx0XHRjb25zdCBtZW51SXRlbSA9IHRoaXMucGFyZW50Tm9kZTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRmb3IgKCBjb25zdCBsaW5rIG9mIG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4gKSB7XG5cdFx0XHRcdGlmICggbWVudUl0ZW0gIT09IGxpbmsgKSB7XG5cdFx0XHRcdFx0bGluay5jbGFzc0xpc3QucmVtb3ZlKCAnZm9jdXMnICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoICdmb2N1cycgKTtcblx0XHR9XG5cdH1cbn0oKSApO1xuIl0sImZpbGUiOiJuYXZpZ2F0aW9uLmpzIn0=
