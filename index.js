// Require the necessary discord.js classes
console.clear();
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { BOT, APEX_API } = require('./lib/configs');
const axios = require('axios').default;
const { getCurrentMap } = require('./fetch');
const { current_map, general_error } = require('./embeds');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  client.user.setActivity('Use /map', { type: 'PLAYING' });
  console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  console.log('=== Command name:');
  console.log(commandName);

  try {
    const { current, next } = await getCurrentMap();
    console.log('=================');
    return await interaction.reply({ embeds: [current_map(current, next)] });
  } catch (error) {
    console.log(error);
    return await interaction.reply({ embeds: [general_error()] });
  }
});

// Login to Discord with your client's token
client.login(BOT.TOKEN);
