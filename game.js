import express from 'express';

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 9091;
const fs = require('fs');
const path = require('path');
const steamGamesFile = path.join(__dirname, 'SteamGames.json');
const steamGamesData = JSON.parse(fs.readFileSync(steamGamesFile, 'utf8'));


//1
app.get('/game', (req, res) => {
    const allGames = steamGamesData.map(game => {
        return {
            name: game.name,
            year: game.year,
            url: game.url
        };
    });

    res.status(200).json(allGames);
});



//2
app.get('/game/select/:year', (req, res) => {
    const yearParam = parseInt(req.params.year);
    const filteredGames = steamGamesData.filter(game => game.year > yearParam);

    res.status(200).json(filteredGames);
});


//*
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})









