+function( $ ) {
	'use strict';

	var text = 'Uso de cookies: utilizamos cookies de terceros para elaborar información estadística y para recabar información geográfica. Si continúa navegando acepta su uso. ';

	var prepareBlock = function(urlDetalle){
		text += '<a href="' + window.location.protocol + '//' + window.location.host + '/' + urlDetalle + '" title="Ver más detalles">Más información y cambio de configuración</a>';
		text = '<div class="cookiesWarning"><div class="row">' + text + '</div></div>';

		return $(text);
	};

	var loadIframes = function(){
		var $iframes = $('iframe'),
			$elSrc = null;

		if ($iframes.length){
			for(var i=0, max = $iframes.length; i<max; i++){
				$elSrc = ($iframes.eq(i).attr('src')); 
				if (($elSrc === null) || ($elSrc === undefined) || ($elSrc === '')){
					$iframes.eq(i).attr('src', $iframes.eq(i).attr('data-src'));
				}
			}
		}
	};

	var cookiesAccepted = function(alreadyAccepted){
		if (!alreadyAccepted){
			docCookies.setItem('cookiesAccepted', true, Infinity);
		}

		googleAnalytics();
		$(document).off('scroll');
		$('.cookiesWarning').fadeOut(250);
		loadIframes();		
	};

	var scrollListener = function() {
		var amount = $(document).scrollTop();

		if (amount>200){
			cookiesAccepted(false);
		}
	};

	var clickListener = function(e){
		var $this = $(e.target);

		if($this.closest('.cookiesWarning').length === 0){
			cookiesAccepted(false);
		}
	};

	$.fn.cookiesWarning = function(urlDetalle) {
		var areCookiesAccepted = docCookies.getItem('cookiesAccepted');

		if((areCookiesAccepted === null) || (areCookiesAccepted === undefined) || (areCookiesAccepted.toUpperCase() !== 'TRUE')){
			$(document.body).prepend(prepareBlock(urlDetalle));

			$(document).on('scroll', scrollListener)
				.on('click', clickListener);		
		}
		else{
			cookiesAccepted(true);
		}

		return this;
	};

	$.cookiesWarning = $.fn.cookiesWarning;
}( jQuery );

$.cookiesWarning("transversales/detallesCookies.html");
