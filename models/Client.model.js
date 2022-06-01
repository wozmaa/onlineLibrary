const mongoose = require("mongoose");

const clientsSсhema = mongoose.Schema({
    name: String,
    rentBook: [
      {
        ref: 'Book',
        type: mongoose.SchemaTypes.ObjectId
      }
    ],
    isBlocked: {
      type: Boolean,
      default: false
    }
    
    
    })
    
    const Client = mongoose.model("Client", clientsSсhema)
    module.exports = Client