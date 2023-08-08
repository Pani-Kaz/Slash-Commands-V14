module.exports = {
    name:"ready",
    execute: (client) => {
        console.log(`${client.user.username} está online`)

        client?.application.commands.set(client.slash)
    }
}