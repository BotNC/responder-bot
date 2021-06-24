const { Client } = require('discord.js');
const config = require('../config.json');

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES']
});

client.on('ready', () => console.log('Ready!'));

client.on('message', (message) => {
  if (message.author === client.user) return;

  config.responses.forEach((response) => {
    if (message.content.toLowerCase() === response.input.toLowerCase()) {
      message.reply(response.output);
    }
  });
});

client.login(config.token);