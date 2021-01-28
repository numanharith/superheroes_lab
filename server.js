const express = require('express');
const app = express();
const superheroes = require('./models/superheroes');
const villains = require('./models/villains');
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

// index route
app.get('/', (req, res) => {
    res.render('index', {
        superheroes: superheroes,
        villains: villains
    });
});

// superhero's show route
app.get('/superheroes/:index', (req, res) => {
    res.render('showHero', {
        superhero: superheroes[req.params.index],
        villain: villains[req.params.index]
    });
});

// villain's show route
app.get('/villains/:index', (req, res) => {
    res.render('showVillain', {villain: villains[req.params.index]});
});

app.listen(port, () => {
    console.log('Here to save the day...')
});