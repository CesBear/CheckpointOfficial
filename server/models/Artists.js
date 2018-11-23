const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistsSchema = new Schema({
   name: {
      type: String,
      required: true
   },
    country: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    active: {
        type: String,
        required: true
    },
    foundedYear: {
       type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    discography: {
        type: [],
        default:[]
    },
   create_date: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('artists', artistsSchema);
