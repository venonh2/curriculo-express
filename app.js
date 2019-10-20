const express = require('express'); 
const app = express(); // o use é para executar acõe e não requisiçoes igual o get
const port = 3000;
const path = require('path');
const CurriculoController = require('./controllers/curriculo-controller');
const createError = require('http-errors');

const indexRoute = require('./routes/index'); // veja a criação da const para chamar a routa que agr esta isolada
const curriculoRoute = require('./routes/curriculo');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // esta fazendo referencia ao arquivo css, veja ele usa o use

// as rotas
app.get('/', indexRoute); // eja que ele faz o require da rota dai, ainda tem que esta app a rota
app.get('/curriculo', curriculoRoute); // o noem entre aspas deve estar certo
// erros,
app.use((req, res, next) =>{ // 404
    next(createError(404));
});

app.use((req, res, next) => { //erro handler
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};

    res.status(err.status || 500);
    res.render('error');
});



app.listen(port, err => {
    console.log(`Servidor is listening on ${port}`);
});




