const express = require('express');
const mongoose = require ('mongoose');
const routes = require('./routes');


const app = express();

// req.query = Acessar query pramis (para pesquisa)
// req.params = Acessae epute parms (para edição e delite )
// req.body = Acessar corpo da requisição (para criaçao edição)
mongoose.connect('mongodb://zeus:zeus9651@app01-shard-00-00-nswkz.mongodb.net:27017,app01-shard-00-01-nswkz.mongodb.net:27017,app01-shard-00-02-nswkz.mongodb.net:27017/test?ssl=true&replicaSet=app01-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
app.use(express.json());
app.use(routes);

app.listen(3333);
