/* exported pokedex */
/* result = creating a dom tree of a pokedex and pushing it into web page
define new function renderPokemon to create a DOM tree each time it has an input pass through.
  create a new div element (createElement) and attach an attribute class (setAttribute)
  create another new div element (createElement) and attach an attribute class (setAttribute) and
    append to previous div (appendChild)
  create new img element with src attribute and value of pokemon.imageUrl and append to previous div.
  create another new div to hold text elements and append to previous div
  create h2, h3, p element and attach to text div. append each corresponding property to each element.
  return most outer div (first div created)
create a DOM query to query .row class div element.
create for loop to iterate through pokedex array.
create new variable to hold return of each iteration of the function.
append variable to the .row class div element.
*/

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var columnDiv = document.createElement('div');
  columnDiv.setAttribute('class', 'column-third');

  var cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'pokemon-card');
  columnDiv.appendChild(cardDiv);

  var newImg = document.createElement('img');
  newImg.setAttribute('src', pokemon.imageUrl);
  cardDiv.appendChild(newImg);

  var textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'pokemon-card-text');
  cardDiv.appendChild(textDiv);

  var newH2 = document.createElement('h2');
  newH2.textContent = pokemon.name;
  textDiv.appendChild(newH2);

  var newH3 = document.createElement('h3');
  newH3.textContent = '#' + pokemon.number;
  textDiv.appendChild(newH3);

  var newP = document.createElement('p');
  newP.textContent = pokemon.description;
  textDiv.appendChild(newP);

  return columnDiv;

}

var $rowDiv = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  var pokemon = renderPokemon(pokedex[i]);
  $rowDiv.appendChild(pokemon);
}
