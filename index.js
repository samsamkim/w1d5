var chalk = require("chalk");

var message = chalk.bold.bgYellow.strikethrough("Hello ") + chalk.dim.red.yellow.underline.bgBlue("World");
console.log(message);