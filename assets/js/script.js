var streamingKara = "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36";
var streamingGiovanna = "87d84436d1mshb6b0d209ecb39b5p1ec3d4jsn7e6c7183a483";
var streamingDaniel = "343b570cfbmsh84ada70a77fa889p16e201jsn1f05562634fe";
var streamingTroy = "b1f2194ce2msh8465b3fd1005b7ap1448f4jsn54d8bc2cedb5";

var omdbKara = "d1d04aa6";

var searchBar;

var service = document.querySelector("#provider").value;

var movieCard = $("#movieInfoResults");

// Assigning IDs to variables

// let movieResult = $('#movie-result');

let searchTitle = $("#searchBar");

let searchBtn = $("#searchBtn");

// Function to create card container which will populate the results from search using the API

function getInfo(title, synopsis) {
  movieCard.empty();
  let cardContainer = $("<div>").addClass("movie-card");

  let movieInfo = $("<div>").addClass("movie-info");

  let movieTitle = $("<h3>").addClass("movie-title").text(title);

  //   movieInfo.append(movieTitle);

  let movieSummary = $("<div>").addClass("movie-summary");

  let movieSynopsis = $("<p>").addClass("movie-synopsis").text(synopsis);

  //   let movieImg = $('<img>').addClass('card-img').attr("src", poster);

  //   movieSummary.append(movieImg);
  //   movieSummary.append(movieSynopsis);
  //   movieTitle.append(movieSummary);
  movieInfo.append(movieTitle).append(movieSynopsis);
  cardContainer.append(movieInfo);
  movieCard.append(cardContainer);
  //   movieResult.appendTo(movieCard);
}

// $(document).ready(function () {
$("#searchBtn").click(function (event) {
  event.preventDefault();
  searchBar = $("#searchBar").val();
  console.log(searchBar);
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
      document.querySelector("#provider").value +
      "&type=movie&page=1&keyword=" +
      searchBar +
      "&output_language=en&language=en",
    method: "GET",
    headers: {
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
      "x-rapidapi-key": "343b570cfbmsh84ada70a77fa889p16e201jsn1f05562634fe",
    },
  }).done(function (response) {
    var searchResults = JSON.parse(response);
    console.log(searchResults.results[0].title);
    getInfo(searchResults.results[0].title, searchResults.results[0].overview);
  });

  $.ajax({
    async: true,
    crossDomain: true,
    currentSearch: "",
    url: "https://www.omdbapi.com/?t=" + searchBar + "&apikey=" + omdbKara,
    method: "GET",
  }).done(function (response) {
    $("#moviePoster").attr("src", response.Poster);
  });
});
// });
