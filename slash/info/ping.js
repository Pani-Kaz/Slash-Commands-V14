module.exports = {
    name:"ping",
    description:"Veja meu ping",
    execute: async (client, inter) => {
        inter.reply({
            content: `Pong! Meu ping é **${client.ws.ping}ms**`
        })
    }
}