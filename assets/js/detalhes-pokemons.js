//const pokemonList = document.getElementById('pokemonList')
//const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 1
let offset = 0;

const url = `https://pokeapi.co/api/v2/pokemon/1/`

fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.abilities)
    .then((pokemonListDetails) => console.log(pokemonListDetails))
    .catch((error) => console.log(error))


    /*
  .then((pokemonList) => {
        console.log(pokemonList)
    })
    */