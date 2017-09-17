const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
	let em = new Discord.RichEmbed()
   	 .setDescription(args.join(" "))
	 .setURL("https://github.com/CrawlingArc33/Authbot")
  	 .setColor(`#9B59B6`);
	
    message.channel.send({embed: em});
}

module.exports.help = {
	name: "embed"
}
