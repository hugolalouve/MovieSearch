window.onload = store;

function store()
{
   document.getElementById('searchButton').onclick = function()
   {
      document.getElementById('movieSearch')
       console.log("http://www.omdbapi.com/?apikey=f4982a00&s=" + movieSearch.value);
   }
}
