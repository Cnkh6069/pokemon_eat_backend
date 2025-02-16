"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */ await queryInterface.bulkInsert("pokemons", [
      {
        name: "Bulbasaur",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ivysaur",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venusaur",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charmander",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charmeleon",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charizard",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Squirtle",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wartortle",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blastoise",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caterpie",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Metapod",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Butterfree",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weedle",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kakuna",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beedrill",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pidgey",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pidgeotto",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pidgeot",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rattata",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Raticate",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spearow",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fearow",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ekans",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Arbok",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pikachu",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Raichu",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sandshrew",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sandslash",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoran♀",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidorina",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoqueen",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoran♂",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidorino",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoking",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clefairy",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clefable",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vulpix",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ninetales",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jigglypuff",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wigglytuff",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zubat",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golbat",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oddish",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gloom",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vileplume",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paras",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parasect",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venonat",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venomoth",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diglett",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dugtrio",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Meowth",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Persian",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Psyduck",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golduck",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mankey",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Primeape",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Growlithe",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Arcanine",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poliwag",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poliwhirl",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poliwrath",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Abra",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kadabra",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alakazam",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Machop",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Machoke",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Machamp",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bellsprout",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weepinbell",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Victreebel",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tentacool",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tentacruel",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Geodude",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Graveler",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golem",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ponyta",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rapidash",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Slowpoke",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Slowbro",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magnemite",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magneton",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Farfetch’d",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Doduo",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dodrio",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seel",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dewgong",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grimer",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Muk",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shellder",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cloyster",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gastly",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Haunter",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gengar",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Onix",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Drowzee",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hypno",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Krabby",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kingler",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voltorb",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Electrode",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Exeggcute",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Exeggutor",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cubone",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marowak",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hitmonlee",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hitmonchan",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lickitung",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Koffing",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weezing",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rhyhorn",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rhydon",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chansey",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tangela",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kangaskhan",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Horsea",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seadra",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Goldeen",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seaking",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Staryu",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Starmie",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mr. Mime",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scyther",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jynx",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Electabuzz",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magmar",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pinsir",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tauros",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magikarp",
        rarity: "Common",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gyarados",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lapras",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ditto",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eevee",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vaporeon",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jolteon",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flareon",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Porygon",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Omanyte",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Omastar",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kabuto",
        rarity: "Uncommon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kabutops",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aerodactyl",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Snorlax",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Articuno",
        rarity: "Legendary",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zapdos",
        rarity: "Legendary",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Moltres",
        rarity: "Legendary",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dratini",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dragonair",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dragonite",
        rarity: "Rare",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mewtwo",
        rarity: "Legendary",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mew",
        rarity: "Mythical",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */ await queryInterface.bulkDelete("pokemons", null, {});
  },
};
