(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "lib/fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo2 = (repoName, func) => {
        fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((jsonData) => {
          func(jsonData);
        });
      };
      module.exports = fetchGithubRepo2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
  fetchGithubRepo("sinatra/sinatra", (response) => {
    document.write(`<p>${JSON.stringify(response)}</p>`);
    console.log(response);
  });
})();
