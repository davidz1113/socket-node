const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
let io = socketIO(server);

//para saber o escuchar cuando se conectan al servidor
io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido  a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    /**
     * el segundo parametro es para 
     */
    client.on('enviarMensaje', (data, callback) => {
        // console.log(data);
        if (data.usuario) { 
            callback({
                respuesta: 'todo salio bien'
            });
        } else {
            callback({
                respuesta: 'todo salio bien MAaal'
            });

        }
    })
})


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});