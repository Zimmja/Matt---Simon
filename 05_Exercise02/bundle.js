(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "lib/fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo = (repoName, func) => {
        fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((jsonData) => {
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
  button.addEventListener("click", () => {
    fetchRepo(input.value, (response) => {
      document.write(`<p>${JSON.stringify(response)}</p>`);
      console.log(response);
    });
  });
})();
