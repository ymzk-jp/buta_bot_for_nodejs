require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path=require('path');


const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
    console.log(('ready...'));
    const test_text=fs.readFileSync(__dirname+'/log.txt','utf8');
    console.log(test_text);
});

client.on('message', message => {
    // console.log(message);
    // console.log(message.guild.channels);
    fs.appendFile(__dirname+'/log.txt', JSON.stringify(message.guild.channels, null, '    '), 'utf8');
        return;
});