const core = require("@actions/core");
const github = require("@actions/github");

const run = () => {
  return new Promise((resolve, reject) => {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const octokit = new github.GitHub(token);

    return octokit.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jokeBody
    });
  });
};

run()
  .then(console.log)
  .catch(err => core.setFailed(err.message));
