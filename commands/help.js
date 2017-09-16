const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix


module.exports.run = async (bot, message, args) => {

	//let msg = await message.channel.send(`${message.author} My commands have been private messaged to you! `, {tts: true})

	let em = new Discord.RichEmbed()
	 .setColor(`#9B59B6`)
	 .addField(`${prefix}auth`, `You have agreed to the terms and your account will be authorized.`)
	 .addField(`${prefix}info`, `Get your infomation about your account.`)
	 .addField(`${prefix}embed`, `Create some text that's embed!`)
	 .addField(`${prefix}invite`, `Get an invite to invite the bot to your server!`)
	 .addField(`${prefix}repeat`, `let's the bot repeat what you say!`)
	 //.addField("More  commands coming soon", `.`,)
	 .setFooter(`${bot.user.username}'s help system`);

	// message.author.dmChannel.send({embed: em});
	message.channel.send({embed: em});
	// msg.delete()
}

module.exports.help = {
	name: "help"
}
