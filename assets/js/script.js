console.log("Hello World!!!!");
let group = ["Kara", "Giovanna", "Troy", "Dan"];

console.log("Hello " + group);

const settings = {
  async: true,
  crossDomain: true,
  url: "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&keyword=Christmas&output_language=en&language=en",
  method: "GET",
  headers: {
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    "x-rapidapi-key": "343b570cfbmsh84ada70a77fa889p16e201jsn1f05562634fe",
  },
};

$.ajax(settings).done(function (response) {
//   console.log(response);
  let searchResults = JSON.parse(response);
  console.log(searchResults.results);
  console.log(searchResults.title);
});
