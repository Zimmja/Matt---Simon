const fetchGithubRepo = require("./lib/fetchGithubRepo");

// document.open();
// document.write(fetchGithubRepo("sinatra/sinatra"));
// document.close();

fetchGithubRepo("sinatra/sinatra", (response) => {
  document.write(`<p>${JSON.stringify(response)}</p>`);
  console.log(response);
});
