const config = require('./config.json');
const puppeteer = require('puppeteer');
const { EmbedBuilder } = require('discord.js');
const { REST, Routes, Client, GatewayIntentBits } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const {commands}=require('./liste_cmds.js')
const {pingBOT}=require('./functions/ping')
const {helpBOT}=require('./functions/help')
const {pray_timeBOT}=require('./functions/pray_time');
const { PandaVideo } = require('./functions/send_PANDA');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const rest = new REST({ version: '10' }).setToken(config.tokken);

client.login(config.tokken);




client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Enregistrez les slash commands une fois le client prêt.
  rest.put(
    Routes.applicationGuildCommands(client.user.id, config.IDserv),
    { body: commands }
  ).then(() => {
    console.log('Successfully reloaded application (/) commands.');
  }).catch((error) => {
    console.error(error);
  });
});



client.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'help') {
    helpBOT(interaction,commands)
  }

  if (commandName === 'ping') {
    pingBOT(interaction)
  }
  
/*
if(commandName === 'pray_time'){
 
  pray_timeBOT(interaction)
  

}
*/
if (commandName === 'panda_video') {
  PandaVideo(interaction)
}
  
});










