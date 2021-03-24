#!/usr/bin/env node

"use strict";

const ngrok_authtoken = process.env.NGROK_API_TOKEN;

const fs = require("fs"),
    ngrok = require("ngrok");

(async () => {
    const url = await ngrok.connect({
        port: 22023,
        proto: "tcp",
        authtoken: ngrok_authtoken
    });
    fs.writeFile("bin/tunnel.log", `https://theurlis${url}`, err => {
        if (err) throw err;
    });
})();
