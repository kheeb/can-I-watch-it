console.log("Hello World!!!!");
let group = ["Kara", "Giovanna", "Troy", "Dan"];

console.log("Hello " + group);

// const settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&keyword=Christmas&output_language=en&language=en",
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//     "x-rapidapi-key": "343b570cfbmsh84ada70a77fa889p16e201jsn1f05562634fe",
//   },
};

$.ajax(settings).done(function (response) {
  //   console.log(response);
  let searchResults = JSON.parse(response);
  console.log(searchResults.results);
});


// Assigning IDs to variables

let movieResult = document.querySelector('#movie-result');

let searchTitle = document.querySelector('#searchBar');

let searchBtn = document.querySelector('#searchBtn');


// Function to create card container which will populate the results from search using the API


function getInfo (title, synopsis, poster) {
  let cardContainer = document.createElement('div');
  cardContainer.classList.add('movie-card');

  let movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-info');
  

  let movieTitle = document.createElement('h3')
  movieTitle.classList.add('movie-title');
  movieTitle.textContent = title;
  movieInfo.appendChild(movieTitle);

  let movieSummary = document.createElement('div')
  movieSummary.classList.add('movie-summary')

  let movieSynopsis = document.createElement('p')
  movieSynopsis.classList.add('movie-synopsis');
  movieSynopsis.textContent = synopsis

  let movieImg = document.createElement('img');
  movieImg.classList.add('card-img');
  // Unsure about this - need to check how to add images!!!
  movieImg.setAttribute = poster

  movieSummary.appendChild(movieImg);
  movieSummary.appendChild(movieSynopsis);
  movieTitle.appendChild(movieSummary);
  movieInfo.appendChild(movieTitle);
  cardContainer.appendChild(movieInfo);
  movieResult.appendChild(cardContainer);

}


searchBtn.addEventListener('click', function getInfo() {
  // This is where we would fetch our data and run the search through the API
  // once the button is clicked


})