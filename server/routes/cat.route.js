const router = require("express").Router();

const mongoose = require('mongoose');
const { exists } = require("../models/Cat.model");

const Cat = require('../models/Cat.model')

/* Falta middleware para rutas que requieran usuario */

router.get(('/adoption'), (req, res) => {
  const allCats = []
  Cat.findAll()
  .then((allTheCats) => {
    allCats.push(allTheCats)
    res.json(allTheCats)
  })
  .catch( err => res.json(err))
})

//  code done on 16/9/21 test_1
router.post(('/newcat'), (req, res) => {
  const {name, image, race, size, birth_date, arrival_date, color, country, city, register_number, description} = req.body;
  Cat.create({name, image, race, size, birth_date, arrival_date, color, country, city, register_number, description})
    .then(newCat=>{
      console.log("Cat created, newCat")
      res.redirect("/")
    })
    .catch(err=> console.log(err))   
});
