const mongoose = require('mongoose');
const { Schema } = mongoose;

const discographySchema = new Schema({
    albumName: String,
    tracks: Number,
    price: Number,
    year: Number,
    description: String,
    productorName: String,
    _idArtist: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'Artists'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('discography', discographySchema);