module.exports = (() => {

    const completeData = (req, res, next) => {
        const { name, country, genre, active, foundedYear, bio } = req.body;

        if (!name) return res.send('Name is missing.');
        if (!country) return res.send('Country value is missing.');
        if (!bio) return res.send('bio number is missing.');
        if (!genre) return res.send('Genre is missing');
        if (!foundedYear) return res.send('Founded Year is missing');
        if (!active) return res.send('Founded Year is missing');

        next();
    };

    const primitiveData = (req, res, next) => {
        const { name, country, genre, active, foundedYear, bio  } = req.body;

        if (typeof(name) != 'string') return res.send('The name should be only text.');
        if (typeof(country) !='string') return res.send('The country should be only text.');
        if (typeof(bio) !='string') return res.send('The bio should be only text.');
        if (typeof(genre) !='string') return res.send('The genre should be only text.');
        if (typeof(foundedYear) !='number') return res.send('The year should be numeric.');
        if (typeof(active) !='string') return res.send('The active field should be only text.');

        next();
    };

    const validData = (req, res, next) => {
        const { name, country, genre, active, bio } = req.body;

        if (name.trim().length > 30) return res.send('Name field  limited to 30 chars length max.');
        if (active.trim().length > 10) return res.send('Active field limited to 10 chars length max.');
        if (country.trim().length > 30) return res.send('Country field limited to 30 chars length max.');
        if (bio.trim().length > 100) return res.send('Bio field  limited to 100 chars length max.');
        if (genre.trim().length > 50) return res.send('Genre field  limited to 50 chars length max.');
        next();
    };

    return {
        completeData,
        primitiveData,
        validData,
    }
})();