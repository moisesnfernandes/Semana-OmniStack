const spot = require('../models/Spot');
module.exports = {
    async Show( req , res ){

        const { user_id } = req.headers;

        const spots = await spot.find({user: user_id});

        return res.json(spots);
    }
}