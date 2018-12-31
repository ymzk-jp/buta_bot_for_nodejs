/**
 * this bot is alert at 5minits for for 'sandboxbot'
 * 'sandboxbot' is 'my_bot_sandbox' server bot
 */

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path');

const bottoken__for_sandbox = process.env.BOTTOKEN__for_sandbox;
const serverid__my_bot_sandbox = process.env.SERVERID__my_bot_sandbox;
const channelid__ja__test_channel = process.env.CHANNELID__ja__test_channel;

client.login(bottoken__for_sandbox);

client.on('ready', () => {
  console.log('ready...');
  oneMinMesessage();
});

const oneMinMesessage = () => {
  client.channels.get(channelid__ja__test_channel).send('My Message');
}