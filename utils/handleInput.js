const chalk = require("chalk");
const getValidatedOffers = require("../utils/getValidatedOffers");
const isValidDate = require("../utils/isValidDate");
const processOffers = require("../utils/processOffers");

const offers = getValidatedOffers();

function handleInput(rl, mainLogic) {
  return (input) => {
    // check if check-in date is valid
    if (!isValidDate(input)) {
      console.log(chalk.red("Invalid date. Please try again.\n"));
      return mainLogic();
    } else {
      try {
        // process offers
        processOffers(input, offers);
      } catch (err) {
        console.log(
          chalk.red(
            "Something is wrong. Please re-check the files and run 'npm start' again.\n"
          )
        );
        // console.error(err);
      }
    }
    rl.close();
  };
}

module.exports = handleInput;
