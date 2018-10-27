module.exports = function(io){

	io.sockets.on('connection', function( client ){

		client.on('auth_token', function( json ){

			var buffer = Buffer.from( json.token , 'base64').toString('ascii');
			var num = Buffer.from( json.token , 'base64').toString('ascii').length;
			num--;
			buffer = buffer.substring(0, num);
			buffer = Buffer.from( buffer , 'base64').toString('ascii');
			var num = buffer.length;
			buffer = buffer.substring(1, num);
			buffer = Buffer.from( buffer , 'base64').toString('ascii');

			client.join( buffer );
			client.emit('auth_token', { status: 1 });

		});

		client.on('disconnect', function(){
	        console.log('disconectado: ' + client.id);
	    });

	});

}

