require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { BOT } = require('./configs');

const commands = [
  new SlashCommandBuilder()
    .setName('map')
    .setDescription('Replies with the current map!'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(BOT.TOKEN);

rest
  .put(Routes.applicationCommands(BOT.CLIENT_ID), {
    body: commands,
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
