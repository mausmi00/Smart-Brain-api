const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '5ced6265d9464f799fc78f4e60a224b5'
});

const handleApiCall = (req, res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
        req.body.input).then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('uable to work with API'))
}

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db.from('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        })
        .catch(err => res.status(400).json('unable to get entries'))
}
module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
};
