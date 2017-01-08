import socketIo from 'socket.io'


const setupIo = (server) => {
    var io = socketIo.listen(server);
    
    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('a1', function (data) {
            console.log(data);
        });
    });

    return io
}

export default setupIo