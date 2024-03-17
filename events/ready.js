module.exports = {
    name:"ready",
    execute: (client) => {
        console.log(`${client.user.username} está online`)

        // Note: Set commmands
        client?.application.commands.set(client.Commands);
    }
}