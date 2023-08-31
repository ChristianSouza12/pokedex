const pokemonList = document.getElementById("pokemonList")
const LoadMoreButton = document.getElementById("loadMoreButton")

const maxRecords = 151
const limit = 12
let offset = 0







function loadPokemonItens(offset,limit){


    function convertPokemonToLi(pokemon) {
        return `
        <li class="pokemon ${pokemon.type} bg "'${pokemon.name}')">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
    
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map(((type)=>` <li class="type ${type}">${type}</li>`)).join("")}
                
            </ol>
           
        
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
                


            
        </div>
    
        </li>
        
        
        
        `
    }






    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {

        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
    
    
    })

}


loadPokemonItens(offset,limit)

LoadMoreButton.addEventListener("click",() =>{
    offset += limit

    const qtdRecord = offset + limit

    if(qtdRecord >= maxRecords){
        const newLimit =  maxRecords - offset 
        loadPokemonItens(offset,newLimit)

        LoadMoreButton.parentElement.removeChild(LoadMoreButton)
    }else{
        loadPokemonItens(offset,limit)
    }

    
})


