const fs = require("fs");
const path = require("path");

const commands = {};

fs.readdirSync(__dirname).forEach(file => {
  if (file !== "index.js" && file.endsWith(".js")) {
    const command = require(path.join(__dirname, file));
    commands[path.basename(file, ".js")] = command;
  }
});

module.exports = commands;