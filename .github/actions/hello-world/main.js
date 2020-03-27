const core = require("@actions/core");

const first = core.getInput("first-greeting");
const second = core.getInput("second-greeting");
const third = core.getInput("third-greeting");

console.log(`Hello ${first}`);
console.log(`Hello ${second}`);

if (third) {
  console.log(`Hello ${third}`);
}
