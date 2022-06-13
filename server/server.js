const express = require('express');
const app = express();
const cors = require('cors')
// Image Model
const imageModel = require('./models/ImageModel')
// Cors Middleware
app.use(cors())
// Body parsing for JSON Objects
app.use(express.json());
// Get Request for images
app.get('/images', (req, res) => {
    imageModel.find({}).then(images => {
        res.status(200).json(images);
    })
});

app.listen(4000,() => console.log('server started'));