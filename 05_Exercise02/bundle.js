(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "lib/fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo = (repoName2, func) => {
        fetch(`https://api.github.com/repos/${repoName2}`).then((response) => response.json()).then((jsonData) => {
          func(jsonData);
        });
      };
      module.exports = fetchGithubRepo;
    }
  });

  // index.js
  var fetchRepo = require_fetchGithubRepo();
  var button = document.querySelector("#apiButton");
  var input = document.querySelector("#apiInput");
  var repoName = document.querySelector("#repoName");
  var profilePic = document.querySelector("#profilePic");
  var repoLink = document.querySelector("#repoLink");
  var repoStargazers = document.querySelector("#repoStargazers");
  var repoForks = document.querySelector("#repoForks");
  var repoLanguage = document.querySelector("#repoLanguage");
  button.addEventListener("click", () => {
    fetchRepo(input.value, (response) => {
      repoName.innerText = response.name;
      profilePic.src = response.owner.avatar_url;
      repoLink.href = response.html_url;
      repoLink.innerText = response.name;
      repoStargazers.innerText = response.stargazers_count;
      repoForks.innerText = response.forks_count;
      repoLanguage.innerText = response.language;
      console.log(response);
    });
  });
})();
