//imports js

const path = require('path');
const express = require('express');
const app = express();

var exec = require('child_process').exec;


/*exec('ls', function(err, stdout, stderr) {
    console.log(stdout);
});
exec('touch holamundo.txt', function(err, stdout, stderr) {
    console.log(stdout);
});
exec('ls', function(err, stdout, stderr) {
    console.log(stdout);
});*/



//configuración 
app.set('view engine', 'ejs');
app.set('port', 2000);
app.set('views', path.join(__dirname, 'views'));

//app.use(express.static(path.join(__dirname, "public")));
   

//rutas
app.use(require('./routes/indexR'));

//middleware
app.use(express.static(path.join(__dirname, '/public')));



//escucha

app.listen(app.get('port'), () => {

    console.log('escuchando en el puerto ', app.get('port'));
});

console.log(path.join(__dirname, '/views'));