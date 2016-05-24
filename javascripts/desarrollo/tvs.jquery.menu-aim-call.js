(function( $ ) {
	
	
			
	function activateSubmenu(row) {
		$(row).find('>a').addClass('abierto').next('ul').stop(false,true).fadeIn(150);		
	}

	function deactivateSubmenu(row) {
		$(row).find('>a').removeClass('abierto').next('ul').stop(false,true).fadeOut(250);
	}
	
	function cerrarTodo(){
	$('#main-nav')
		.find('>ul>li>ul').hide().end()
		.find('.abierto').removeClass('abierto');
		
		return true;
	}
	
	function clickMenuPrincipal(e){
		e.preventDefault();
	}
	
	
	$.fn.menuAimCall = function() {
		var $nav = $('#main-nav'),
			$menu = $nav.find('>ul');
		
		$nav.on('click', '>ul>li>a:not(:last-child)', clickMenuPrincipal);
	
		cerrarTodo();

		$menu.menuAim({
			activate: activateSubmenu,
			deactivate: deactivateSubmenu,
			exitMenu: cerrarTodo,
			submenuDirection:"below"
		});
		
		return this;
	};

	$.menuAimCall = $.fn.menuAimCall;
	
})( jQuery );