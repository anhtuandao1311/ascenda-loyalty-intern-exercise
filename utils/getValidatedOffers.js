const chalk = require("chalk");
const isValidJSONData = require("../validations/isValidJSONData");

// get validated offers from input.json, if not valid, give error and exit
function getValidatedOffers(offers) {
  try {
    const data = require("../input.json");
    if (!isValidJSONData(data)) {
      // this error is related to failing the schema validation
      const errors = isValidJSONData.errors
        .map((err) => `${err.instancePath} ${err.message}`)
        .join("\n");
      console.log(chalk.red(`Invalid input.json file:\n${errors}\n`));
      process.exit(1);
    }
    return data.offers;
  } catch (err) {
    // this error is related to not being able to read the file, maybe missing file or incorrect JSON format
    console.error(
      chalk.red(
        "Something is wrong with input.json or the file does not exist. Please re-check and run 'yarn start' again.\n"
      )
    );
    // console.error(err);
    process.exit(1);
  }
}

module.exports = getValidatedOffers;
