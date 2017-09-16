const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let em = new Discord.RichEmbed()
	    .setColor(`#9B59B6`)
	    .setThumbnail(message.author.displayAvatarURL)
	    .addField("Username", `${message.author.username}#${message.author.discriminator}`)
	    .addField("ID", message.author.id)
	    .addField("Date Joined", message.member.joinedAt)
	    .addField("Date Created", message.author.createdAt)
	    .setFooter(`${bot.user.username}'s userinfomation system`);
	  message.channel.send({embed: em});
}

module.exports.help = {
	name: "info"
}
