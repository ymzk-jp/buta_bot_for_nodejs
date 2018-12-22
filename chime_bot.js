const Discord = require('discord.js');

const client = new Discord.Client();
require('dotenv').config();

const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('ready...');
});

client.on("message",message => {
    if(message.author.bot){
        return;
    }else{
        let msg = message.content;
        let channel = message.channel;
        let author = message.author.username;
        message.reply(msg)
            .then(message => console.log(`Sent message: ${msg}`))
            .catch(console.error);
        return;
   }
}
);

client.login(token);