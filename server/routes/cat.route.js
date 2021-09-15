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