const readline = require("readline-sync")

const food = readline.question('Was moechtest du heute essen?');
console.log(`${food}? Das klingt sehr lecker! :)`);