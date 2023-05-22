const { 
    Client,
    GatewayIntentBits,
    ActivityType,
    EmbedBuilder
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    presence: {
        status: 'online',
        activities: [{
            name: 'a bot for gravy',
            type: ActivityType.Playing
        }]
    },
    failIfNotExists: false,
    allowedMentions: { 
        parse: ['users', 'roles'],
    }
});

client.on('messageCreate', async (message) => {
    if(message.content == 'ping') {
        message.reply({
            content: `Pong ${message.author}`,
            allowedMentions: { parse: [], repliedUser: false }
        })
    }
})

client.on('interactionCreate', async (interaction) => {
    if(interaction.commandName === 'ping') {
        await interaction.reply({
            content: `Pong ${interaction.user}`,
            allowedMentions: { parse: [] }
        })
    }
})

client.on('ready', async (c) => {
    console.log(`${c.user.tag} is logged in!`);

    client.users.send('799128154744291368', {
        embeds: [
            new EmbedBuilder()
            .setDescription('I am online!')
            .setColor('Green')
            .setTimestamp()
        ]
    }).then(() => {}).catch((err) => {
        console.log('Couldnt dm gravy the online message')
        console.log(err)
    })
})
client.login()

