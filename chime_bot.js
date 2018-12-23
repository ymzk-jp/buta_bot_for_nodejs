require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('ready...');
    setInterval(function(){ sayText(); }, 60*100);
});

client.login(token);

client.on('message', message => {
    if (message.author.bot) {
        message.react('👍');
        return;
    }
    if (message.channel.type === 'dm') {
        return;
    }
    msg(message);
    return;
});

const msg=(message)=>{
    if (message.author.id === '428019346204524545') {
        message.channel.send("text");
    }
}

const sayText=()=>{
    client.channels.get('525656657749868556').send('My Message');
}