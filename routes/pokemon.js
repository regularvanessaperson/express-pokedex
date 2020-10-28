const express = require('express');
const db = require('../models');
const router = express.Router();
const axios = require('axios'); 
const pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/'

 // GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll()
  .then(pokemon =>{
    console.log("checking 123 for the get route")
    res.render("pokemon/index.ejs", {favorites: pokemon})
  })
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  db.pokemon.create(req.body)
  .then(favePokemon=>{
    console.log("yo the post route works")
    res.redirect("/pokemon")
  })
  // TODO: Get form data and add a new record to DB
});


router.get('/:id', (req, res)=>{
  let pokeId = req.params.id
  console.log(req.params)
  axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`)
  .then(response =>{
    let pokeInfo = response.data
    console.log("this is pokeInfo:",response.data)
    res.render('pokemon/show.ejs', {pokeInfo: pokeInfo})
  })


})

module.exports = router;
