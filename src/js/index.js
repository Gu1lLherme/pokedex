/* 
Quando clicar no pokemon na listagem temos que esconder o cartão do pokemon 
aberto e mostra o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos 
1 - listagem
2 - cartão do pokemon

Precisamos criar duas variáveis no JS pra trabalhar com os elemento da tela.

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons.

- remover a classe "aberto" só do cartão que está aberto 
- ao clicar em um pokémon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
- remover a classe ativa que marca o pokémon selecionado 
- adicionar a classe ativo no item da lista selecionado
*/


// Precisamos criar duas variáveis no JS pra trabalhar com os elemento da tela.

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons.
    
    
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        // remover a classe "aberto" só do cartão que está aberto 
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        // ao clicar em um pokémon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativa que marca o pokémon selecionado 
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar a classe ativo no item da lista selecionado

        const pokemonSelecionadoNalistagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNalistagem.classList.add('ativo')

    })
    
})

