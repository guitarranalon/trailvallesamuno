var progressBarsAnimations = function(selector){
	var $tiposCaminos = $(selector),
			$progressBars = $tiposCaminos.find('.progress-bar'),
			position = $tiposCaminos.offset();
 
	$progressBars.attr('style', 'width: 0');
		
	$(function domReady($) {
		// for each element with the class 'color'
			$tiposCaminos.scrollspy({
				min: position.top - ($(window).height()/2),
				max: position.top + $(this).height(),
				onEnter: function onEnter(element) {
					window.console.log('Entering ' + element.id);
					
					for(var i=0, max = $progressBars.length; i<max; i++){
						$progressBars.eq(i).attr('style', 'width: ' + $progressBars.eq(i).attr('aria-valuenow') + '%');
					}
				}
			});
	});
};