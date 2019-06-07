+function ($) {
	var $colabs = $('#colaboradoresFooter').find('.patrocinadores li');

	/**
	 * Returns a random integer between min (inclusive) and max (inclusive).
	 * The value is no lower than min (or the next integer greater than min
	 * if min isn't an integer) and no greater than max (or the next integer
	 * lower than max if max isn't an integer).
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$.fn.randomCollaborators = function () {
		var n = $colabs.length,
			seleccionados = new Array(),
			rnd;

		if (n > 4) {
			// ocultamos todos los colaboradores
			$colabs.hide();

			// generamos 4 números aleatorios entre 0 y n
			while (seleccionados.length < 4) {
				rnd = getRandomInt(0, n - 1);

				if (seleccionados.indexOf(rnd) === -1) {
					seleccionados.push(rnd);
				}
			}

			for (var i=0, max = seleccionados.length; i < max; i++) {
				$colabs.eq(seleccionados[i]).show();
			}
		}

		return this;
	};

	$.randomCollaborators = $.fn.randomCollaborators;

}(jQuery);
