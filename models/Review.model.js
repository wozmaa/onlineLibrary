const mongoose = require("mongoose");

const reviewsSсhema = mongoose.Schema({
    text: String,
    name: {
      ref: 'Client',
      type: mongoose.SchemaTypes.ObjectId
    },
    book: {
      ref: 'Book',
      type: mongoose.SchemaTypes.ObjectId
    }
    })
    
    const Review = mongoose.model("Review", reviewsSсhema)
    module.exports = Review