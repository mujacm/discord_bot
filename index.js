const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
require("dotenv").config();

//for testing you can add your own prefix
const prefix = "!";

//if bot is logged in
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//go throught commands folder and store various commands in commands object
const commands = {};
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands[command.name] = command;
}

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  let args = msg.content.slice(prefix.length).split(/ +/);
  let cmd = args.shift();
  if (commands[cmd]) {
    commands[cmd].execute(msg, args);
  } else {
    msg.reply("Enter a valid command.");
  }
});

//change with your
client.login(process.env.LOGIN_VAR);
