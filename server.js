const express =  require('express');
var app = express();

var server = require('http').Server(app);
const bodyParser =  require('body-parser');
const router = require('./network/routes');
const db = require('./db');
const socket=require('./socket');
const cors = require('cors');
const config = require('./config');
const asyncCallback = require('./public/learning-node/callback');
const promise = require('./public/learning-node/promise');
const asyncAwait =  require('./public/learning-node/async-await');
const eventEmitter = require('./public/learning-node/event-emitter');

db(config.dbUrl);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);

// Configurar cabeceras y cors
app.use(cors());
socket.connect(server);
router(app);

app.use(config.publicRoute, express.static('public'));
/*
app.use('/', function(req, resp){
    resp.send("hola");
});
*/


/*
Arquitectura Orientada a objetos: permite manipular 
código asíncrono
*/
//asyncCallback.asyncCall();
//promise.promiseMethod();
// asyncAwait.asyncAwait();
//eventEmitter.eventEmitter();


server.listen(config.port, function() {
    console.log('la aplication esta escuchando en el port '+config.host+":"+config.port);
});

