"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Course = new Schema({
  name: {
    type: String,
    maxLength: 255
  },
  description: {
    type: String,
    maxLength: 600
  },
  image: {
    type: String,
    maxLength: 255
  },
  createAt: {
    type: Date,
    "default": Date.now
  },
  updateAt: {
    type: Date,
    "default": Date.now
  },
  videoId: {
    type: String,
    maxLength: 255
  }
});
module.exports = mongoose.model('Course', Course);