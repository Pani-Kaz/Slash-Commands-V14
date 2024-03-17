const {
     Client,
     GatewayIntentBits,
     Collection
} = require("discord.js");

const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
})

client.Commands = new Collection()

client.login(process.env.TOKEN);


fs.readdirSync('./events').forEach(file=> {
    const event = require(`./events/${file}`)
    if(event.once) client.once(event.name, (...args) => event.execute(client, ...args))
    else client.on(event.name, (...args) => event.execute(client, ...args))
})

fs.readdirSync('./SlashCommands/').forEach(div => {
    fs.readdirSync(`./SlashCommands/${div}/`).forEach(i=> {
        const command = require(`./SlashCommands/${div}/${i}`)
        client.Commands.set(command.name, command)
    })
})

module.exports = client