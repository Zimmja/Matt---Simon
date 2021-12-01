const fetchGithubRepo = (repoName, func) => {
  fetch(`https://api.github.com/repos/${repoName}`)
    .then((response) => response.json())
    .then((jsonData) => {
      func(jsonData);
    });
};

module.exports = fetchGithubRepo;
