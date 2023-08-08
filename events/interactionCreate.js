const { InteractionType } = require("discord.js")

module.exports = {
    name:"interactionCreate",
    execute: async (client, inter) => {
        if(inter.type == InteractionType.ApplicationCommand) {
            const data = client.slash.get(inter.commandName)
            if(!data) return inter.reply({
                content:`Ops, não consegui achar esse comando!`,
                ephemeral:true
            })
            else {
                data.execute(client, inter)
            }
        }
    }
}