const { 
    REST, Routes
} = require('discord.js');
const config = require('./config.json');
const commands = [
    {
        name: 'ping',
        description: 'responds with pong!'
    }
];

const rest = new REST().setToken(config.token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(config.clientid), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();