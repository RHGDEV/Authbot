const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    message.channel.send(args.join(" "));
}

module.exports.help = {
	name: "repeat"
}
