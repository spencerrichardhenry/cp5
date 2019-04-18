const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const users = require("./users.js");
const User = users.model;


const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  name: String,
  phone: String,
  email: String,
  specialty: String,
  city: String,
});

const Item = mongoose.model('Item', itemSchema);

router.post('/', async (req, res) => {
  console.log("uploading, items.js")
  const item = new Item({
    name: req.body.name,
    title: req.body.title,
    phone: req.body.phone,
    email: req.body.email,
    specialty: req.body.specialty,
    city: req.body.city,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


router.get('/', async (req, res) => {
  try {
    let items = await Item.find().populate('item');
    return res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/:id', auth.verifyToken, User.verify, async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/:id', auth.verifyToken, User.verify, async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.name = req.body.name;
    item.phone = req.body.phone;
    item.email = req.body.email;
    item.specialty = req.body.specialty;
    item.city = req.body.city;
    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  model: Item,
  routes: router,
}