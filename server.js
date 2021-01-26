const express = require('express')
const hbs = require('hbs');
require('./hbs/helpers')
const app = express()

const port = process.env.PORT || 3000



app.use(express.static(__dirname + '/public'))


hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Nahuel',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Nahuel',
    });
})

app.listen(port)
console.log(`Se esta escuchando por ${port}`);