require('dotenv').config();
const { DISCORD_APPLICATION_ID } = process.env;

var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

const discordRPC = require('discord-rpc');
const RPC = new discordRPC.Client({ transport: 'ipc' });
discordRPC.register(APPLICATION_ID);

async function setRPCActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Minecraft Forge 1.19.2`,
        state: `Create Mod`,
        startTimestamp: Date.now(),
        largeImageKey: `server-icon-512x512`,
        largeImageText: `create`,
        smallImageKey: `forge`,
        smallImageText: `Minecraft Forge`,
        instance: false,
        buttons: [
            {
                "label": "Watch me Play",
                "url": "https://twitch.tv/bernhardbmx/"
            }
        ]
    });
}


RPC.login({ clientId: APPLICATION_ID }).catch(console.error);
RPC.on('ready', async () => {
    setRPCActivity();
    console.log(`[RPC] [${datetime}] RPC loaded!`);

    setInterval(() => {
        setRPCActivity();
    }, 15 * 1000);
});