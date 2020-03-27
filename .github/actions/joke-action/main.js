const getJoke = require("./joke");
const core = require("@actions/core");

getJoke().then(joke => {
  console.log(joke);
  core.setOutput("joke-output", joke);
});
