const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { // veja como perdeu o function
    res.render('index', { // antes estava sender, ou seja só enviando dados para o servidor, agora o renderdiz que vamos renderimas dados (html)
        title: "Meu primeiro servidor express",
        version: "0.0.0",
    });

});

module.exports = router;