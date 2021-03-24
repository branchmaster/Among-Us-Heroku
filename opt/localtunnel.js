#!/usr/bin/env node

const fs = require("fs"),
      localtunnel = require("localtunnel");
      
(async () => {
  const tunnel = await localtunnel({
    port: 22023
  });
  fs.writeFile("bin/tunnel.log", tunnel.url, err => {
    if (err) throw err;
  });
})();
