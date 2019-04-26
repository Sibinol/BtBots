const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() { 
    bot.user.setGame("Vous Juger");
    console.log("Le bot a bien ete connecte")
})

bot.login("NTcxNDI2NzE3MjQ0MDYzNzQ1.XMNtWQ.83tSAbcYZF-VTO7CSwt9OLA1ozY");
