// API keys
var streamingKara = "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36";
var streamingGiovanna = "87d84436d1mshb6b0d209ecb39b5p1ec3d4jsn7e6c7183a483";
var streamingDaniel = "343b570cfbmsh84ada70a77fa889p16e201jsn1f05562634fe";
var streamingTroy = "b1f2194ce2msh8465b3fd1005b7ap1448f4jsn54d8bc2cedb5";

var omdbKara = "d1d04aa6";

// Assigning IDs to variables
var service = document.querySelector("#provider").value;

var movieCard = $("#movieInfoResults");

let searchTitle = $("#searchBar");

let searchBtn = $("#searchBtn");

// Function to create card container which will populate the results from search using the API

function getInfo(title, synopsis) {
  movieCard.empty();

// This hides the movie synopsis card until a title is searched
  let movieDescription = document.getElementById("movieDescription");
  movieDescription.style.display = "block";

// shows information and title
  
  let cardContainer = $("<div>").addClass("movie-card");

  let movieInfo = $("<div>").addClass("movie-info");

  let movieTitle = $("<h3>").addClass("movie-title").text(title);

  let movieSummary = $("<div>").addClass("movie-summary");

  let movieSynopsis = $("<p>").addClass("movie-synopsis").text(synopsis);

  movieInfo.append(movieTitle).append(movieSynopsis);
  cardContainer.append(movieInfo);
  movieCard.append(cardContainer);
}

// $(document).ready(function () {
$("#searchBtn").click(function (event) {
  event.preventDefault();
  searchBar = $("#searchBar").val();
  console.log(searchBar);
  
 // Setting up LocalStorage within function
  localStorage.setItem("movie", searchBar);
  let myMovie = localStorage.getItem("movie");
  
  console.log(myMovie)

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
      "x-rapidapi-key": "9bc319ba34mshdb0c70c64984539p15f5efjsn8aa923a6ee36",
    },
  }).done(function (response) {
    var searchResults = JSON.parse(response);

    if (searchResults.results[0].title === undefined)
    function custom_alert( message, title ) {
      
          title = 'Alert';
    
      if ( !message )
          message = 'No Message to Display.';
    
      $('<div></div>').html( message ).dialog({
          title: title,
          resizable: false,
          modal: true,
          buttons: {
              'Ok': function()  {
                  $( this ).dialog( 'close' );
              }
          }
      });
    }
    
    console.log(searchResults.results[0].title);
    console.log(searchResults);
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

// Creating local storage movie options within Footer

//  store value from text area to local storage
$(".saveBtn").on("click" , function(){
    var text = $(this).siblings("textarea").val()
    console.log(text)
    var rank = $(this).siblings("textarea").attr("id")
    localStorage.setItem(rank, text)
})
// get item from storage to page after refreshing
$("#option1").val(localStorage.getItem(option1))
$("#option2").val(localStorage.getItem(option2))
$("#option3").val(localStorage.getItem(option3))
