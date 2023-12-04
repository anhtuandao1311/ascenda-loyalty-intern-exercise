const chalk = require("chalk");
const fs = require("fs");
const output = fs.readFileSync("./output.json", "utf-8");

const predefinedOutput = fs.readFileSync(
  "./tests/predefinedOutput.json",
  "utf-8"
);

const outputJson = JSON.parse(output);
const predefinedOutputJson = JSON.parse(predefinedOutput);

if (JSON.stringify(outputJson) === JSON.stringify(predefinedOutputJson)) {
  console.log(
    chalk.green(
      "The output.json and predefinedOutput.json files are identical.\n"
    )
  );
} else {
  console.log(
    chalk.red(
      "The output.json and predefinedOutput.json files are not identical.\n"
    )
  );
}
