
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODcwMDU3ODgxMzk4MDI2MzEw.YQHOiw.Du0RrUiUAjWTFaCS5cJEpcFWOJg';

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(ch => ch.name === 'benvenuto');

    if (!channel) return;

    channel.send('Nice Dick My Broda');
});

bot.on('message',message =>{
    if (message.content === 'Bob'){
        const attachment = new Discord.MessageAttachment('https://pbs.twimg.com/media/ErBAK3cXEAAqJ8v.png');

        message.channel.send('Shalom', attachment);
    }

    if (message.content === 'alien'){
        
        const attachment = new Discord.MessageAttachment('https://media.tenor.com/images/23bfe82695104bd86fe1b4c0e57d9179/tenor.gif');
        
        message.channel.send('DANCE DANCE', attachment);
    }

})
bot.login(token);