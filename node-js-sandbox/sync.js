const fs = require("fs");

console.log("File reading started");

const data = fs.readFileSync(`${__dirname}/file.md`, "utf8");
console.log(data);

console.log("File reading finished");
