+function( $ ) {
	var menuButton = $('<button class="openCloseButton"><span class="icon"></span><b>Menú</b></button>'),
		closeButton = $('<button class="closeButton"></button>'), //<span class="icon-close"></span>
		idBloqueMenu = 'mobileMenu',
		clonedMenuClass = 'clonedMenu',
		openedClass = 'openedMenu',
		closedClass = 'closedMenu',
		wrappingMarkup = '<div id="' + idBloqueMenu + '" />',
		$menu = null,
		$menuParent = null;

	function toggleMenu(){
		$menuParent.toggleClass(openedClass + ' ' + closedClass);
		$(document.body).toggleClass(openedClass + ' ' + closedClass);
		$menu.stop(true, false).slideToggle();		
	}

	function clickOpenCloseButton(){
		toggleMenu();
	}

	function clickCloseButton(){
		$menuParent.removeClass(openedClass).addClass(closedClass);
		$(document.body).removeClass(openedClass).addClass(closedClass);
		$menu.stop(true, false).slideUp();
	}

	$.fn.mobileMenu = function(originalMenu) {
		var $destiny, $original, $clone, $cloneParent;

		// select original and destiny
		$original = $(originalMenu);
		$destiny = this;

		// if original and destiny exists...
		if ($original.length && $destiny.length){
			// ... add click event to button
			menuButton.on('click', clickOpenCloseButton);
			menuButton.addClass(closedClass);

			closeButton.on('click', clickCloseButton);

			// ... clone original, wrap, add button and copy to destiny
			$clone = $original.clone();
			$clone.addClass(clonedMenuClass);
			$(document.body).addClass(closedClass);
			$cloneParent = $clone.wrap(wrappingMarkup).parent();
			$cloneParent.prepend(menuButton);
			$cloneParent.prepend(closeButton);
			$cloneParent.appendTo($destiny);
			$cloneParent.addClass(closedClass);

			$clone.hide();
			$menu = $clone;
			$menuParent = $cloneParent;
		}

		return this;
	};	

}( jQuery );