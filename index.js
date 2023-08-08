const {
     Client,
     GatewayIntentBits,
     Collection
} = require("discord.js");

const fs = require("fs")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
})

client.slash = new Collection()

client.login("TOKEN DO SEU BOT 🙃")


fs.readdirSync('./events').forEach(file=> {
    const event = require(`./events/${file}`)
    if(event.once) client.once(event.name, (...args) => event.execute(client, ...args))
    else client.on(event.name, (...args) => event.execute(client, ...args))
})

fs.readdirSync('./slash/').forEach(div => {
    fs.readdirSync(`./slash/${div}/`).forEach(i=> {
        const command = require(`./slash/${div}/${i}`)
        client.slash.set(command.name, command)
    })
})

module.exports = client