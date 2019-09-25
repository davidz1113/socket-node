var socket = io();

/**
 * Los eventos (on) son para escuchar
 * los (emit) son para enviar informacion
 * 
*/

//conexion desde el front end
socket.on('connect', function () {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
})

//PAra enviar o emitir informacion
socket.emit('enviarMensaje',
    {
        usuario: 'David',
        mensaje: 'Hola mundo'
    }
    , function (response) { //en la respuesta llega el mensaje del servidor.
        console.log('response server', response);
    }
);

//escuchar informacion
socket.on('enviarMensaje', function (data) {

    console.log('Servidor', data);
})