const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
	let em = new Discord.RichEmbed()
	    .setColor(`#9B59B6`)
	    //.setThumbnail(bot.user.displayAvatarURL)
	    .setURL("https://github.com/CrawlingArc33/Authbot")
	    .addField("Invite the bot to your discord!", `https://discordapp.com/oauth2/authorize?client_id=333054572945997825&scope=bot&permissions=268528648`)

		.setTimestamp();
	  message.channel.send({embed: em});
}

module.exports.help = {
	name: "invite"
}
