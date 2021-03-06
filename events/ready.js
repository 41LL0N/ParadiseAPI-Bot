const { readdirSync } = require("fs")
const { join } = require("path")
const filePath2 = join(__dirname, "..", "events");
const eventFiles2 = readdirSync(filePath2);
const timers = require("timers");

module.exports = async (client) => {

    let activities = [
        {
            name: 'https://paradisebots.net/api/v1',
            options: {
                type: 'WATCHING',
            }
        },
        {
            name: 'api.help',
            options: {
                type: 'PLAYING',
            }
        }
    ];

    let i = 0;

    console.log(`Signed in as ${client.user.username} || Loaded [${eventFiles2.length}] events & [${client.commands.size}] commands`);

    const PBL = require("paradiseapi.js")
    const pbl = new PBL("788536521543122973", process.env.PARADISEAPI_TOKEN)
     
    pbl.post(client.guilds.cache.array().length, "1")

    timers.setInterval(() => {
        
        i = i == activities.length ? 0 : i;

        client.user.setActivity(activities[i].name, activities[i].options);

        i++;

    }, 30000);
}
