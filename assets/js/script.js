console.log("Hello World!!!!");
let group = ["Kara", "Giovanna", "Troy", "Dan"];

console.log("Hello " + group);

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&keyword=Christmas&output_language=en&language=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36"
	}
};

$.ajax(settings).done(function(response) {
	var searchResults = JSON.parse(response);
    console.log(searchResults.results)
});

