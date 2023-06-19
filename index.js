const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client(); //inicializamos una nueva instancia de conexion 

//este metodo nos genera el codigo qr para crear la session de nuestro whatsapp bot 
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

//este metodo nos avisa cuando la conexion se realiza una vez escaneado nuestro qr en la terminal
client.on('ready', () => {
    console.log('Client is ready!');
});

 //este metodo nos ayudar a capturar todos los mensajes que ingresan a nuestro whatsapp 
client.on('message', message => {
	console.log(message.body);
    //el objeto message trae una propiedad body donde se encuentra el mensaje que ingresa
	if(message.body === 'hola') {
		message.reply('¡Hola! ¿Cómo puedo ayudarte?');
	}
});
client.initialize();