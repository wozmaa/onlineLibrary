const mongoose = require("mongoose");

const genresSсhema = mongoose.Schema({
    name: String
})

const Genre = mongoose.model("Genre", genresSсhema)

module.exports = Genre