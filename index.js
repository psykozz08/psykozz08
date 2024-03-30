const discord = require("discord.js");
const client = new discord.Client({ intents: [] });
const config = require("./config.json");

const ping = new discord.SlashCommandBuilder()
    .setName('ping')
    .setDescription('commande de ping')

const commands = [ping.toJSON()];
  
  const rest = new  discord.REST({ version: '10' }).setToken(config.token);
  
  try {
    console.log('Started refreshing application (/) commands.');
  
     rest.put(discord.Routes.applicationCommands(config.client_id), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

client.once('ready', () =>{
    console.log("LFDM est en ligne !")
});


client.login(config.token)