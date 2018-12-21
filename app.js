// discord.js モジュールのインポート
const Discord = require('discord.js');

// Discord Clientのインスタンス作成
const client = new Discord.Client();
require('dotenv').config();

// トークンの用意
// const token = process.env.TOKEN;
const token = process.env.TOKEN;

// 準備完了イベントのconsole.logで通知黒い画面に出る。
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

// Discordへの接続
client.login(token);