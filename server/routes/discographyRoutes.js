const mongoose = require('mongoose');
const Discography = require('../models/Discography');


module.exports = (app) => {

    app.get('/api/disco', async (req, res) => {
        const disco = await Discography.find({});
        res.send(disco)
    });

    app.get('/api/disco/artist/:artistId', async (req, res) => {
        try {
            const disco = await Discography.find({ _idArtist: req.params.artistId });
            res.send(disco)
        }
        catch(error) {
            res.send(error.message);
        }
    });

    app.post(
        '/api/disco',
        async (req, res) => {
            try {
                const newDisco = new Discography(req.body);
                const response = await newDisco.save();
                res.send(response);
            }
            catch(error) {
                res.send(error.message);
            }
    });
};