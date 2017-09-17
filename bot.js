const Discord = require("discord.js");
const fs = require("fs");

const prefix = process.env.BOT_PREFIX

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

const creatorid = process.env.EBALL



fs.readdir("./commands/", (err, files) => {
  if(err) return;

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0){
    return;
  }
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`Loading ${jsfiles.length} cmds!`)

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}:    ${f}`)
    bot.commands.set(props.help.name, props);
  })
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(``);
})

bot.on("ready", () => {
  console.log(`~~~~~~~~~~~~~~~~~  AuthBOT  ~~~~~~~~~~~~~~~~~`);
  console.log(``);
  console.log(`~ Bot Name: ${bot.user.username}`);
  console.log(`~ Prefix: ${prefix}`);
  console.log(`~ Serving: ${bot.guilds.array().length} guild(s)`)
  console.log(`~ Creator id: ${creatorid}`)
  console.log(`~ Bot id: ${bot.user.id}`)
  console.log(``);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(``);
  console.log(``);
  bot.user.setGame(prefix+"help | " + bot.guilds.array().length +" guilds", `https://twitch.tv/AuthBot`);
});

bot.on("message", message => {
    if(message.author.bot) return;
	
    if(message.channel.type === "dm"){
      let nodm = new Discord.RichEmbed().setAuthor(`AuthBot DM's are disabled!`).setDescription(`Please go to a guild to use bot.`).setColor(`#FF0000`).setThumbnail(bot.user.displayAvatarURL).setTimestamp();
	    message.channel.send({embed: nodm});
	return;
    }

    let mArray = message.content.split(" ");
  //  let cmd = mArray[0];
    let args = mArray.slice(1);

    let cmd = bot.commands.get(mArray[0].slice(prefix.length));
    if(cmd){
      // Log this action
      console.log(`MSG | NAME: ${message.author.username} | MSG: ${message.content} | GUILD: ${message.guild} | CHANNEL: ${message.channel.name}`);
      // remove the responder
      message.delete();
       // Run the command
       cmd.run(bot, message, args);
    };
});

bot.on('guildCreate', guild => {
  // Quick Guild update!
  bot.user.setGame(prefix+"help | " + bot.guilds.array().length +" guilds", `https://twitch.tv/AuthBot`);
  // Then tell the console
  console.log(`~~~~~~~~~~~~~~~~~~ JOIN ~~~~~~~~~~~~~~~~~~`);
  console.log(`Owner Name: ${guild.owner.user.username} | Name: ${guild.name} | ID: ${guild.id}`);
  console.log(`~~~`);
})

bot.on('guildDelete', guild => {
  // Quick Guild update!
  bot.user.setGame(prefix+"help | " + bot.guilds.array().length +" guilds", `https://twitch.tv/AuthBot`);
  // Then tell the console
  console.log(`~~~~~~~~~~~~~~~~~~ LEAVE ~~~~~~~~~~~~~~~~~~`);
  console.log(`Owner Name: ${guild.owner.user.username} | Name: ${guild.name} | ID: ${guild.id}`);
  console.log(`~~~`);
})

bot.login(process.env.BOT_TOKEN);
