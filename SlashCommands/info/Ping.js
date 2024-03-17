module.exports = {
    name:"ping",
    description:"Veja meu ping",
    isGuild: false,
    execute: async (client, inter) => {
        inter.reply({
            content: `Pong! Meu ping é **${client.ws.ping}ms**`
        })
    }
}