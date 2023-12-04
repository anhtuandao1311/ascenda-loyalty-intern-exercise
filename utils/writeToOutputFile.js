const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

function writeToOutputFile(fileName, data) {
  const currentDir = __dirname;

  const parentDir = path.resolve(currentDir, "..");

  const filePath = path.join(parentDir, fileName);
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      throw err;
    }
    console.log(
      chalk.greenBright(
        "Wrote data to output.json sucessfully. Please check the file in the root folder.\n"
      )
    );
  });
}

module.exports = writeToOutputFile;
