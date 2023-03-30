const fs = require("fs");

console.log("File reading started");
const data = fs.readFile(`${__dirname}/file.md`, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("File reading finished");
