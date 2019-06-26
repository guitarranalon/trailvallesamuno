var runRoadbook = function(){
	var roadbook = {
		points:[
			{
				km: 0,
				kmReal: 0,
				note: 'Salida/Meta'
			},
			{
				km: 0.8,
				kmReal: 0.8,
				note: 'Inicio Senda de los Molinos: empedrado y puentes resbaladizos en caso de lluvia'
			},
			{
				km: 1.6,
				kmReal: 1.8,
				note: 'Empieza la subida'
			},
			{
				km: 2.5,
				kmReal: 2.5,
				note: 'Casas de abajo de El Tendeyón'
			},
			{
				km: 3.6,
				kmReal: 3.5,
				note: 'La Inverniza: avituallamiento líquido'
			},
			{
				km: 5.9,
				kmReal: 5.7,
				note: 'Pico Espines (1.008 m)'
			},
			{
				km: 6.3,
				kmReal: 6.2,
				note: 'Mayáu Porrín'
			},
			{
				km: 7.1,
				kmReal: 7,
				note: 'Pico Cogollu (1.021 m): techo de la prueba y del concejo de Langreo. Contínuo sube y baja hasta el Alto La Mozqueta'
			},
			{
				km: 9.8,
				kmReal: 9.8,
				note: 'Alto la Mozqueta: avituallamiento sólido/líquido. ¡Atención! Cruce de carretera LA-7. Continua el sube y baja'
			},
			{
				km: 12,
				kmReal: 12.1,
				note: 'Mayáu Miguel (860 m): Control de tiempo: máx 3h 15min. ¡Empieza la primera bajada importante!'
			},
			{
				km: 15.4,
				kmReal: 15.4,
				note: 'El Corralón: Cruce de carretera'
			},
			{
				km: 15.6,
				kmReal: 15.6,
				note: 'Comienza la última subida'
			},
			{
				km: 16,
				kmReal: 16,
				note: 'Cresta los Fugaos: ¡se pone pindio!'
			},			
			{
				km: 16.3,
				kmReal: 16.1,
				note: 'La Capilla: avituallamiento líquido. ¡Atención! Cruce de la carretera LA-8'
			},
			{
				km: 17.3,
				kmReal: 17.3,
				note: 'Pico Rondiz (734 m) ¡Empieza la última bajada!'
			},
			{
				km: 19.4,
				kmReal: 19.3,
				note: 'El Fresnedal, cruce de la carretera LA-8'
			},
			{
				km: 19.8,
				kmReal: 19.8,
				note: 'Túnel: entrada por el socavón Emilia a la galería del Ecomuseo'
			},
			{
				km: 21,
				kmReal: 21,
				note: 'Meta'
			}
		]
	};

	(function(){
		var i = 0,
			kmTotal = 21;

		var path = document.getElementById('path'),
			segment = new Segment(path, "0", "100%", true),
			draw = document.getElementById('draw'),
			infoPanel = document.getElementById('info');
			
		segment.draw(0, 0, 0, "cubic-out");
		infoPanel.innerHTML  = roadbook.points[i].note;	
		
		draw.onclick = function(e){
			e.preventDefault();
			
			if (i < roadbook.points.length-1){
				i++;
				segment.draw("0", roadbook.points[i].km*100/kmTotal +"%", ((roadbook.points[i].km-roadbook.points[i-1].km)/2), "cubic-out");
				infoPanel.innerHTML  = '<b>km ' + roadbook.points[i].kmReal + ":</b> " + roadbook.points[i].note;	
			}
		};

	})();
};