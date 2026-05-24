// models/cards.js
const { required } = require("joi");
const mongoose = require("mongoose");
//Card Schema
const CardSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 2 },
  subtitle: { type: String, required: true, minlength: 2 },
  description: { type: String, required: true, minlength: 2 },
  phone: { type: String, required: true, minlength: 9 },
  email: { type: String, required: true, minlength: 2 },
  web: { type: String, default: "" },
  image: {
    url: { type: String, required: true },
    alt: { type: String, default: "" },
  },
  bizNumber: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

//Card Model
const CardModel = mongoose.model("cards", CardSchema);
//Export the Card Model
module.exports = CardModel;
