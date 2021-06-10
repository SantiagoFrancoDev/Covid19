  
window.onload = function() {
	estadoCovid();
}
function estadoCovid(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/6')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		console.log(data)
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let recovered = data.location.latest.recovered;
		let deaths = data.location.latest.deaths;

		                                                            //formato , pone la comas y puntos donde deberia estar para que se vea mas lindo
		document.getElementById('poblacion').innerHTML = population.toLocaleString('en');
		document.getElementById('actualizacion').innerHTML = update.substr(0, 10);
		document.getElementById('recuperados').innerHTML = recovered.toLocaleString('en')
		document.getElementById('casos').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('muertes').innerHTML = deaths.toLocaleString('en');
		document.getElementById('porcentaje').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) ;

	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(estadoCovid, 43200000) 
}
