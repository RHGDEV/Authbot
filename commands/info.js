const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
	let em = new Discord.RichEmbed()
	    .setColor(`#9B59B6`)
	    .setThumbnail(message.author.displayAvatarURL)
	    .addField("Username", `${message.author.username}#${message.author.discriminator}`)
	    .addField("ID", message.author.id)
	    .addField("Date Joined", message.member.joinedAt)
	    .addField("Date Created", message.author.createdAt)
	    .url("https://github.com/CrawlingArc33/Authbot")
	    .setFooter(`${bot.user.username}'s userinfomation system`);
	  message.channel.send({embed: em});
}

module.exports.help = {
	name: "info"
}
