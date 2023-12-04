const chalk = require("chalk");
const readline = require("readline");
const handleInput = require("./utils/handleInput");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainLogic() {
  rl.question(
    `Please enter your check-in date (${chalk.bold.yellow(
      "YYYY-MM-DD"
    )} only): `,
    handleInput(rl, mainLogic)
  );
}

mainLogic();
