//imports para el servidor
const express = require ('express');
const app = express();


//configuracion del puerto
app.set('port', 3000);


//rutas
app.get('/', (req, res) => {
    res.send('<h1> Hola mundo <h1>');
})

app.get('/hola', (req, res) => {
    res.sendFile(__dirname+'/views/proyecto1.html');
}
)

//para escuchar el puerto
app.listen(app.get('port'),() => {
//console.log(__dirname);
console.log('escuchando en el puerto', app.get('port'));
});