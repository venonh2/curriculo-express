const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const CurriculoController = require('./controllers/curriculo-controller');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res, next){
    res.render('index', { // antes estava sender, ou seja só enviando dados para o servidor, agora o renderdiz que vamos renderimas dados (html)
        title: "Meu primeiro servidor express",
        version: "0.0.0",
    });

});

app.get('/curriculo', (req, res, next) =>{
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});

app.listen(port, err => {
    console.log(`Servidor is listening on ${port}`);
});




