const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let em = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(`#9B59B6`)
    message.channel.send({embed: em});
}

module.exports.help = {
	name: "embed"
}
