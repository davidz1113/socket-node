const { io } = require('../server')

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
     * el segundo parametro es para enviar una respuesta
     * o un listener al cliente, util para validar y enviar la
     * correcta respuesa al cliente.
     */
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //broadcast se entiende que es para todos los usuarios 
        //que esten conectados al servidor
        client.broadcast.emit('enviarMensaje',data)

        // if (data.usuario) { 
        //     callback({
        //         respuesta: 'todo salio bien'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'todo salio bien MAaal'
        //     });

        // }
    })
})
