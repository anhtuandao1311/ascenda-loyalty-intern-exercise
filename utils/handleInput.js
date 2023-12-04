const chalk = require("chalk");
const getValidatedOffers = require("../utils/getValidatedOffers");
const isValidDate = require("../utils/isValidDate");
const processOffers = require("../utils/processOffers");

const offers = getValidatedOffers();

function handleInput(rl, mainLogic) {
  return (input) => {
    if (!isValidDate(input)) {
      console.log(chalk.red("Invalid date. Please try again.\n"));
      return mainLogic();
    } else {
      try {
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
