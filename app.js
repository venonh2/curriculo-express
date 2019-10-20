const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const CurriculoController = require('./controllers/curriculo-controller');

const indexRoute = require('./routes/index'); // veja a criação da const para chamar a routa que agr esta isolada
const curriculoRoute = require('./routes/curriculo');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', indexRoute); // eja que ele faz o require da rota dai, ainda tem que esta app a rota
app.get('/curriculo', curriculoRoute);

app.listen(port, err => {
    console.log(`Servidor is listening on ${port}`);
});




