//const pokemonList = document.getElementById('pokemonList')
//const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 0
let offset = 1

//const url = `https://pokeapi.co/api/v2/pokemon/1` - url correta
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLiDetail (pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>

        <img src="https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png"
            alt="${pokemon.name}">
    </div>
  </li>
  `
}


const pokemonListDetails = document.getElementById('pokemonListDetails')

fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    //.then((jsonBody) => jsonBody.abilities) - correto
    .then((pokemons) => {

      for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        console.log(convertPokemonToLiDetail(pokemon))
        pokemonListDetails.innerHTML = convertPokemonToLiDetail(pokemon)
      }
    })
    .catch((error) => console.log(error))

    console.log(pokemonListDetails)
    

