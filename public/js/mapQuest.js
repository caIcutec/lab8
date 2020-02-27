function initMap(){
    L.mapquest.key = 'igT3NyvCALWa8VQo6izF0rOEinU0JDM8';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
		center: [32.8755, -117.2323],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

}