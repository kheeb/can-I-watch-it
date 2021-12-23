var Kara = "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36";
var Giovanna = "87d84436d1mshb6b0d209ecb39b5p1ec3d4jsn7e6c7183a483";
var Daniel = "343b570cfbmsh84ada70a77fa889p16e201jsn1f05562634fe";

var searchBar;

var service = "disney";

// API
// const settings = {
//   async: true,
//   crossDomain: true,
//   currentSearch: "",
//   url:
//     "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=" +
//     service +
//     "&type=movie&page=1&title=" +
//     searchBar+
//     "&output_language=en&language=en",
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//     "x-rapidapi-key": "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36",
//   },
// };

// $(document).ready(function () {
  $("#searchBtn").click(function (event) {
      event.preventDefault();
      searchBar = $("#searchBar").val()
        console.log(searchBar)
        // settings.url = "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=" +
        // service +
        // "&type=movie&page=1&title=" +
        // searchBar+
        // "&output_language=en&language=en"
    $.ajax({
        async: true,
        crossDomain: true,
        currentSearch: "",
        url:
          "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=" +
          service +
          "&type=movie&page=1&keyword=" +
          searchBar+
          "&output_language=en&language=en",
        method: "GET",
        headers: {
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
          "x-rapidapi-key": "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36",
        },
      }).done(function (response) {
      var searchResults = JSON.parse(response);
      console.log(searchResults.results);
    });
  });
// });