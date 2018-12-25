require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path=require('path');

const TOKEN = process.env.TOKEN__for_sandbox;
const USER_ID__ymzk = process.env.USER_ID_ymzk;
const SERVER_ID__my_bot_sandboxy = process.env.CHANNEL_ID__my_bot_sandboxy;
const CHANNEL_ID__test_channel=process.env.CHANNEL_ID__test_channel;
const COMMAND_PREFIX = process.env.COMMAND_PREFIX;

client.login(TOKEN);

client.on('ready', () => {
    console.log(('ready...'));
    const test_text=fs.readFileSync(__dirname+'/log.txt','utf8');
    // console.log(test_text);
    const format_url = 'https://isc-makeit.esa.io/posts/39';
    const readme_url = 'https://isc-makeit.esa.io/posts/29';
    const message = `\
🐷🐷🐷
@everyone
みなさんはろー！！\n\
元気でブヒｨｨｨか？Make ITといえばそう、開発でブヒｨｨｨね\n\
今日の夜は『チケット駆動開発』の提出日でブヒｨｨｨ\n\
え？提出方法が分からない？ ${format_url}\n\
え？チケット駆動開発忘れた？ ${readme_url}\n\
みんなの提出待ってるブヒｨｨｨ！！！\n\
🐷🐷🐷`;
    const test_message='test';
    // const send_channels=client.channels.get(SERVER_ID__my_bot_sandboxy);
    // const send_channels.find(channel => channel.name === 'てすとちゃんねる');
    // const send_channel=client.guild.channels.get('525656657749868556');
    client.channels.get('527041404455616530').send("メッセージ");
    // send_channel.send(test_message);
});

client.on('message', message => {
    // console.log(message.guild.channels);
    if (message.author.bot) {
        // message.react('🐷');
        // message.react('🐽');
        return;
    }
});

client.on('message', message => {
    const msg=message.guild.channels;
    // console.log(message);
    // console.log(message.guild.channels);
    // fs.appendFile(__dirname+'/log.txt', JSON.stringify(message.guild.channels, null, '    '));
    // fs.appendFile(__dirname+'/log.txt', 'abc');
    // console.log(JSON.stringify(message.guild.channels));
    var text = "var json_data = \n" + JSON.stringify(msg, null, '  ') + ";\n";
    fs.appendFile(__dirname+'/log.txt', msg, 'utf-8', ((err)=>{}));
    return;
});