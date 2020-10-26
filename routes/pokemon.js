const express = require('express');
const db = require('../models');
const router = express.Router();

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

module.exports = router;
