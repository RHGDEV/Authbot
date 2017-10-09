const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!message.author.id == 140487710727995392){
         console.log(`[LEAVE ATTEMPT] ${message.author.username}#${message.author.discriminator} | ${message.guild.name} | ${message.channel.name}`);
         break;
       }
    bot.guilds.forEach(async (guil, id) => {
           if(guil.id == args[1]){
              guil.leave()
              return;
           }
      });
      console.log(`[MANUAL LEAVE] Guild not found!`);
      message.channel.send("Guild wasn't found in my list!")
}

module.exports.help = {
	name: "l"
}
