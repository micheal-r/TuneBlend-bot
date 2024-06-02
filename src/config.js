require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    clientID: process.env.CLIENT_ID || "1246538437255888916", // your bot client id
    prefix: process.env.PREFIX || "t!", // bot prefix
    ownerID: process.env.OWNER_ID || "976538165273845830", //your discord id
    SpotifyID: process.env.SPOTIFY_ID || "731ac5bf0603411f80ac446f5c02e290",
    SpotifySecret: process.env.SPOTIFY_SECRET || "cd16a34c385b4fa5915abd596fd4e480",
    mongourl: process.env.MONGO_URL || "mongodb+srv://TuneBlend:TuneBlend@tuneblend-1.nnglhj4.mongodb.net/", // MongoDb URL
    embedColor: process.env.EMBED_COLOR || "0x303236", // embed colour
    logs: process.env.LOGS || "1246539835515342970", // channel id for guild create and delete logs
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1246539835515342970", //error logs channel id
    SearchPlatform: process.env.SEARCH_PLATFORM || "youtube music", // Sets the Search Platform. Possibilities: youtube || youtube music || soundcloud
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube music,youtube,soundcloud", // Sets the order of Slash command's AutoComplete results
    links: {
        img: process.env.IMG || 'https://media.istockphoto.com/id/1193845414/vector/overlapping-one-line-letter-t-logotype.jpg?s=612x612&w=0&k=20&c=l8rRi4CJzTPOFvIek_ANCTZuiAGvo69zBEzhbhMJFlg=', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/SbwbJ4Gbm4', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1246538437255888916&permissions=8&scope=bot%20applications.commands' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lava-v3.ajieblogs.eu.org",
            port: parseInt(process.env.NODE_PORT || "443"),
            password: process.env.NODE_PASSWORD || "https://dsc.gg/ajidevserver",
            secure: parseBoolean(process.env.NODE_SECURE || "true"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
