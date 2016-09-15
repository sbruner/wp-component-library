( function() {
	'use strict';

	var accordions = document.querySelectorAll( '.accordion' );

	var forEach = function( array, callback, scope ) {
		for ( var i = 0; i < array.length; i++ ) {
			callback.call( scope, i, array[i] ); // passes back stuff we need
		}
	};

	// Loop through each accordion
	forEach( accordions, function( index, accordion ) {
		var accordionContent = accordion.querySelectorAll( '.accordion-content' ),
			accordionHeader  = accordion.querySelectorAll( '.accordion-header' ),
			topIndex         = index + 1;

		accordion.onclick = function( event ) {
			var header = event.target;
			if ( ! header.classList.contains( 'accordion-header') ) {
				return;
			}

			var section = header.parentNode,
				content = section.querySelector( '.accordion-content' );

			if ( content.classList.contains( 'is-active' ) ) {
				header.setAttribute( 'aria-selected', 'false' );
				header.setAttribute( 'aria-expanded', 'false' );
				content.setAttribute( 'aria-hidden', 'true' );
			} else {
				header.setAttribute( 'aria-selected', 'true' );
				header.setAttribute( 'aria-expanded', 'true' );
				content.setAttribute( 'aria-hidden', 'false' );
			}

			content.classList.toggle( 'is-active' );

			content.setAttribute( 'tabindex', -1 );
			content.focus();
		}
	});
} )();
