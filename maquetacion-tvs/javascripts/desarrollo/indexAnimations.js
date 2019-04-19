var indexAnimations = function(){
	var $datosTvs = $('.data').eq(0),
		$datosTvxs = $('.data').eq(1),
		positionDatosTvs = $datosTvs.offset(),
		positionDatosTvxs = $datosTvxs.offset(),
		$excerpts = $('.excerpt');
		
var prepareIndexAnimations = function(){
	var $content = $('#content-block'),
		$elements = $content
						.find('.data > li, .excerpt:not(:first-of-type)>.row>h2, .excerpt>.row>p, .excerpt>.row>.button, .excerpt>.row>img');
	
	$elements.addClass('transparent');
};

	$(function domReady($) {
			prepareIndexAnimations();
		
			$datosTvs.scrollspy({
				min: positionDatosTvs.top - ($(window).height()/2),
				max: positionDatosTvs.top + $(this).height(),
				onEnter: function onEnter(element) {
					window.console.log('Entering ' + element.id);
					
					$datosTvs.find('>li').each(function (i) {
						$(this).delay(i*100).queue(function (next) {
							$(this).removeClass('transparent').addClass('animated bounceIn');
							next(); // just to dequeue
						});
					});
					
					
					
					
					
					
				}
			});
			
			$datosTvxs.scrollspy({
				min: positionDatosTvxs.top - ($(window).height()/2),
				max: positionDatosTvxs.top + $(this).height(),
				onEnter: function onEnter(element) {
					window.console.log('Entering ' + element.id);
					
					$datosTvxs.find('>li').each(function (i) {
						$(this).delay(($datosTvxs.find('>li').length - i)*100).queue(function (next) {
							$(this).removeClass('transparent').addClass('animated bounceIn');
							next(); // just to dequeue
						});
					});					
				}
			});

			for(var i=1, max = $excerpts.length; i<max; i++){
				var $el = $excerpts.eq(i);
				$el.scrollspy({
				
				min: $el.offset().top - ($(window).height()/2),
				max: $el.offset().top + $(this).height(),
				onEnter: function onEnter(element) {
						if (element.classList.contains('alt')){
							$(element).find('h2, p, .button').removeClass('transparent').addClass('animated bounceInLeft');
						} else {
							$(element).find('h2, p, .button').removeClass('transparent').addClass('animated bounceInRight');
						}
						setTimeout(function(){$(element).find('img').removeClass('transparent').addClass('animated bounceInDown');}, 500);
					}
				});
			}			
	});
};
