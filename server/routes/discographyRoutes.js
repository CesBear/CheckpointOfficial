const mongoose = require('mongoose');
const Discography = require('../models/Discography');
const Artists = require('../models/Artists');


module.exports = (app) => {

     app.get('/api/artists/:id/discography', async (req, res) => {
        const artists = await Artists.findById(req.params.id, ["name", "discography"]);
        const discography = await Discography.populate(artists,{ path: "discography", select: [] });

        res.send(discography)
    });

    app.get('/api/artists/:id/discography', async (req, res) => {

        const response = await Discography.find({});
        res.send(response);
    });

    app.post(
        '/api/artists/:id/discography',
        async (req, res) => {
            const { albumName, tracks,  price, year, description, productorName } = req.body;

            const discographyPost = new Discography({
                albumName,
                tracks,
                price,
                year,
                description,
                productorName
            });
            const response = await discographyPost.save();
            res.send(response);
        });

    app.put(
        '/api/artists/:id/discography',
        async (req, res) => {
            const {  albumName, tracks,  price, year, description, productorName  } = req.body;
            const response = await Discography.findOneAndUpdate(
                { _id: req.params.id },
                {  albumName, tracks,  price, year, description, productorName  },
                { new: true }
            ).exec();
            res.send(response);
        });


    app.delete('/api/artists/:id', async (req, res) => {
            const response = await Discography.deleteOne({ _id: req.params.id });
        res.send(response);
        }
    );
};