const fs = require("fs");

// Check if temp folder exists and delete it
if (fs.existsSync("temp")) {
  fs.rmSync("temp", { recursive: true });
  console.log("> Deleted temp folder");
}

// Make directory temp
if (!fs.existsSync("temp")) {
  fs.mkdirSync("temp");
  console.log("> Created temp folder");
}

// Clone modules
console.log("> Cloning modules from repo WispTools/wisp-modules");
