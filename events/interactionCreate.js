const { InteractionType } = require("discord.js")

module.exports = {
    name: "interactionCreate",
    execute: async (client, inter) => {
        if (inter.type == InteractionType.ApplicationCommand) {

            const Command = client.Commands.get(inter.commandName);

            if (!Command) return inter.reply({
                content: `❌ **|** Command not Find!`,
                ephemeral: true
            });

            // Note: Checking if the command can only be used on servers
            if (Command.isGuild && !inter.guild) return inter.reply({
                content: `❌ **|** This command can only be used on one server!`,
                ephemeral: true
            });

            Command.execute(client, inter)

        }
    }
}