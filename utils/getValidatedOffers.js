const chalk = require("chalk");
const isValidJSONData = require("../validations/isValidJSONData");

function getValidatedOffers(offers) {
  try {
    const data = require("../input.json");
    if (!isValidJSONData(data)) {
      const errors = isValidJSONData.errors
        .map((err) => `${err.instancePath} ${err.message}`)
        .join("\n");
      console.log(chalk.red(`Invalid input.json file:\n${errors}\n`));
      process.exit(1);
    }
    return data.offers;
  } catch (err) {
    console.error(
      chalk.red(
        "Something is wrong with input.json. Please re-check the files and run 'npm start' again.\n"
      )
    );
    // console.error(err);
    process.exit(1);
  }
}

module.exports = getValidatedOffers;
