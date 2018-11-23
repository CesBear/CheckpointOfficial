const artistsMiddleware = require('../middlewares/artistsMiddleware');
const Artists = require('../models/Artists');

module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.send({ message: 'Api is loading' });
    });

	app.get('/api/artists', async (req, res) => {
		const artists = await Artists.find({});
		res.send(artists)
	});

	app.get('/api/artists/:id', async (req, res) => {
		const artists = await Artists.find({ _id: req.params.id });
		res.send(artists)
	});

	app.post(
		'/api/artists',
        artistsMiddleware.completeData,
        artistsMiddleware.primitiveData,
        artistsMiddleware.validData,

		async (req, res) => {
		const { name, country,  genre, active, foundedYear, bio } = req.body;
		const artistPost = new Artists({
			name,
            country,
            bio,
            genre,
            foundedYear,
            active
		});
		const response = await artistPost.save();
		res.send(response);
	});

	app.put(
		'/api/artists/:id',
        artistsMiddleware.completeData,
        artistsMiddleware.primitiveData,
        artistsMiddleware.validData,
		async (req, res) => {
		const { name, country,  genre, active,foundedYear, bio } = req.body;
            const response = await Artists.findOneAndUpdate(
			{ _id: req.params.id }, 
			{ name, country,  genre, active,foundedYear, bio},
			{ new: true }
		).exec();
            res.send(response);

	});

    app.post(
        '/api/artists/:id',
        artistsMiddleware.completeData,
        artistsMiddleware.primitiveData,
        artistsMiddleware.validData,
        async (req, res) => {
            const { name, country, genre, active,foundedYear, bio } = req.body;
            const response = await Artists.findOneAndUpdate(
                { _id: req.params.id },
                { name, country,  genre, active,foundedYear, bio},
                { new: true }
            ).exec();
            res.send(response);
        });

    app.delete('/api/artists/:id', async (req, res) => {
		const response = await Artists.deleteOne({ _id: req.params.id });
		res.send(response);
		}
	);
};