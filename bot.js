
const { default: axios, Axios } = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client();



const token = process.env["token"];
if (!token) {
    throw new Error("missing environment variable: DISCORD_TOKEN");
}
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(ch => ch.name === 'benvenuto');
    const attachment = new Discord.MessageAttachment('https://media.tenor.com/images/23bfe82695104bd86fe1b4c0e57d9179/tenor.gif');
    if (!channel) return;

    channel.send('Nice Dick My Broda', attachment);
});

bot.on('message',message =>{
    if (message.content.startsWith('Bob')){
        const attachment = new Discord.MessageAttachment('https://pbs.twimg.com/media/ErBAK3cXEAAqJ8v.png');

        message.channel.send('Shalom', attachment);
    }

    if (message.content.startsWith('alien')){
        
        const attachment = new Discord.MessageAttachment('https://media.tenor.com/images/23bfe82695104bd86fe1b4c0e57d9179/tenor.gif');
        
        message.channel.send('DANCE DANCE', attachment);
    }
    if (message.content === "roll20"){

        
        const valor = Math.floor(Math.random() * 20 + 1)
        message.channel.send("D20 =" + valor);
    }

    if (message.content === "roll12"){

        
        const valor = Math.floor(Math.random() * 12 + 1)
        message.channel.send("D12 =" + valor);
    }

    if (message.content === "roll10"){

        
        const valor = Math.floor(Math.random() * 10 + 1)
        message.channel.send("D10 =" + valor);
    }

    if (message.content === "roll8"){

        
        const valor = Math.floor(Math.random() * 8 + 1)
        message.channel.send("D8 =" + valor);
    }
    if (message.content === "roll6"){

        
        const valor = Math.floor(Math.random() * 6 + 1)
        message.channel.send("D6 =" + valor);
    }
    if (message.content === "roll4"){

        
        const valor = Math.floor(Math.random() * 4 + 1)
        message.channel.send("D4 =" + valor);
    }
    if (message.content === "class"){
        const classes = ["Bardo", "Paladino", "Mago", "Feiticeiro", "Druida","Ladino","Guerreiro","Cozinheiro","Meretriz","Major","Degustador de Casadas"]
        const raças = ["Orc","Elfo","Anão","Judeu","Humano","Palestino","Draconato","Lizard","Tielfing", "Devorador de Mentes"]
        const index1 = Math.floor(Math.random() * 10 )
        const index2 = Math.floor(Math.random() * 9 )
        message.channel.send("Você será um "+ classes[index1] +" " + raças[index2])
    }
    

})

bot.on('message', async (message) => {
    
    if (message.content == "dolar"){
       
        const data = axios.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        const attachment = new Discord.MessageAttachment("https://external-preview.redd.it/HSjXS6tuQkADhWNxgmknCnpishE5iLjkYqAmbCkws7o.jpg?auto=webp&s=76117ee4f0ce9cc3a4ba13b182d800cfba849896");
        data.then((resp) => 
            message.channel.send("Dolar: " + resp.data.USDBRL.low + " Reais" , attachment),
        ).catch((error) => console.log(error))
 
    }

    if (message.content == "euro"){
        const data = axios.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        data.then((resp) => 
            message.channel.send("Euro: " + resp.data.EURBRL.low+ " Reais")
        ).catch((error) => console.log(error))
 
    }

    if (message.content == "bitcoin"){
       
        const data = axios.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        data.then((resp) => 
            message.channel.send("Bitcoin: " + resp.data.BTCBRL.low + " Reais")
        ).catch((error) => console.log(error))
 
    }
    if (message.content == "yene"){
       
        const data = axios.get("https://economia.awesomeapi.com.br/last/JPY-BRL")
        data.then((resp) => 
            message.channel.send("Yene: " + resp.data.JPYBRL.low + " Reais")
        ).catch((error) => console.log(error))
 
    }
    if (message.content == "peru"){
       
        const data = axios.get("https://economia.awesomeapi.com.br/last/PEN-BRL")
        data.then((resp) => 
            // message.channel.send("Dolar: " + resp.data.USDBRL.low),
            // message.channel.send("Euro: " + resp.data.EURBRL.low),
            message.channel.send("Peso Peruano: " + resp.data.PENBRL.low + " Reais")
        ).catch((error) => console.log(error))
 
    }
    //
        const prefix = "!";
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        if (command == "busca"){
            const numArgs = args.map(x => parseFloat(x));
            let str = String(numArgs[0])
            if(str.length == 7 ){
                str = "0" + str
            }
            const data = axios.get(`https://cep.awesomeapi.com.br/json/${str}`)
            data.then((resp) => {
                let respFix = "Endereço: " + resp.data.address + ", " + resp.data.district+ ", " + resp.data.city
                message.channel.send(respFix)
            }).catch((error) => console.log(error))
        }
    
        
})
bot.login(token);