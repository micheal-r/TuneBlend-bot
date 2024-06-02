const { token } = require("./src/config.js");
const { ShardingManager } = require("discord.js");
const express = require('express')
const app = express();
const port = 6969

app.get('/', (req, res) => res.send('Micheal is an epik coder'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const manager = new ShardingManager("./src/index.js", {
  respawn: true,
  autoSpawn: true,
  token: token,
  totalShards: 1,
  shardList: "auto",
});

manager
  .spawn({ amount: manager.totalShards, delay: null, timeout: -1 })
  .then((shards) => {
    console.log(`[CLIENT] ${shards.size} shard(s) spawned.`);
  })
  .catch((err) => {
    console.log("[CLIENT] An error has occurred :", err);
  });

manager.on("shardCreate", (shard) => {
  shard.on("ready", () => {
    console.log(`[CLIENT] Shard ${shard.id} connected to Discord's Gateway.`);
  });
});
