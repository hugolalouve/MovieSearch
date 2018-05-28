window.onload = store;

var OMDB = "http://www.omdbapi.com/?apikey=f4982a00&s=";
var kiss = true;

function store()
{
   document.getElementById('searchButton').onclick = function()
   {
      document.getElementById('movieSearch')
        // console.log(OMDB + movieSearch.value);
        fetch(OMDB + movieSearch.value)
          .then(res => res.json())
          .then(posts => console.log(posts))
    }
}
