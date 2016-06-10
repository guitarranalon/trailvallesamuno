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
				km: 3.3,
				kmReal: 3.5,
				note: 'Casas de arriba de El Tendeyón: ¡Atención! 0,5 km de asfalto'
			},
			{
				km: 3.5,
				kmReal: 3.9,
				note: 'Fin del tramo de asfalto'
			},
			{
				km: 6,
				kmReal: 5.9,
				note: 'Pico Espines (1.008 m)'
			},
			{
				km: 6.3,
				kmReal: 6.4,
				note: 'Mayáu Porrín: avituallamiento líquido'
			},
			{
				km: 7.2,
				kmReal: 7.2,
				note: 'Pico Cogollu (1.021 m): techo de la prueba y del concejo de Langreo. Contínuo sube y baja hasta el Alto Urbiés'
			},
			{
				km: 10,
				kmReal: 10.4,
				note: 'Alto Urbiés o Alto la Mozquita: cruce de carretera LA-7. ¡Empieza una dura subida!'
			},
			{
				km: 10.4,
				kmReal: 10.9,
				note: 'Pico las Cruces (955 m). Sube y baja contínuo hasta el Mayáu Miguel'
			},
			{
				km: 12.5,
				kmReal: 13,
				note: 'Mayáu Miguel (860 m): avituallamiento sólido/líquido. ¡Empieza la primera bajada importante!'
			},
			{
				km: 16.8,
				kmReal: 17.6,
				note: '¡Atención! Cruce de la carretera LA-8'
			},
			{
				km: 18.1,
				kmReal: 18.7,
				note: 'Pico Rondiz (734 m): avituallamiento líquido. ¡Empieza la última bajada!'
			},
			{
				km: 20.1,
				kmReal: 21.1,
				note: 'El Fresnedal, cruce de la carretera LA-8'
			},
			{
				km: 20.8,
				kmReal: 21.8,
				note: 'Túnel: entrada por el socavón Emilia a la galería del Ecomuseo'
			},
			{
				km: 22.6,
				kmReal: 22.6,
				note: 'Meta'
			}
		]
	};

	(function(){
		var i = 0,
			kmTotal = 22;

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