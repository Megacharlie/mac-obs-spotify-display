const spotify = require('spotify-node-applescript');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 9090;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.get('/track', (req, res) => {
    spotify.getTrack((err, track) => {
        if (err) {
            res.status(500).json({
                error: true,
                message: 'Spotify failed ' + err.message
            })
            return;
        }
        res.json(track);
    });
});

app.listen(port);

console.log('Listening on port', port);
