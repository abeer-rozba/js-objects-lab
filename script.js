import pokemon from './data.js';

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

console.dir(pokemon, { maxArrayLength: null })

// Exercise 1:
console.log(pokemon[58].name);

// Exercise 2:
console.log(game);

// Exercise 3:
game.difficulty = "Medium"

// Exercise 4:
for (let item of pokemon) {
  if (item.starter) {
    game.party.push(item)
    break
  }
}

// Exercise 5:
for (let item of pokemon) {
  if (item.name === "Charmander") {
    game.party.push(item)
    break
  }
}

for (let item of pokemon) {
  if (item.type === "water") {
    game.party.push(item)
    break
  }
}

for (let item of pokemon) {
  if (item.hp === 35 && item.name !== "Ekans") {
    game.party.push(item)
    break
  }
}


// Exercise 6:

game.gyms.forEach((item) => {
  if (item.difficulty < 3) {
    item.completed = true
  }
})


// Exercise 7:
game.party.splice(0, 1, pokemon[1])
game.party.splice(1, 1, pokemon[4])
game.party.splice(2, 1, pokemon[7])
game.party.splice(3, 1, pokemon[25])

// Exercise 8:
game.party.forEach((item) => {
  console.log(item.name);
})

// Exercise 9:
pokemon.forEach((item) => {
  if (item.starter) {
    console.log(item.name);
  }
})

// Exercise 10:
game.catchPokemon = (pokemonObj) => {}

game.party.pokemonObj = {}

game.catchPokemon(pokemon[51])

// Exercise 11:
game.catchPokemon = (pokemonObj) => {
  game.items[1].quantity--
}

game.catchPokemon(pokemon[10])
console.log(game.items);

// Exercise 12:
game.gyms.forEach((item) => {
  if (item.difficulty < 6) {
    item.completed = true
  }
})

// Exercise 13:
game.gymStatus = () => {
  const gymTally = [
    {completed: 0, incomplete: 0}
  ]

  for (let item of game.gyms) {
    if (item.completed) {
      gymTally[0].completed++
    }
    else { gymTally[0].incomplete++}
  }

  console.log(gymTally[0]);
}

game.gymStatus()

// Exercise 14:
game.partyCount = () => {
  let total = 0
  for (let item of game.party) {
    total++
  }

  return total
}

console.log(game.partyCount());

// Exercise 15:
game.gyms.forEach((item) => {
  if (item.difficulty < 8) {
    item.completed = true
  }
})

console.dir(game.gyms)

// Exercise 16:
console.log(game);