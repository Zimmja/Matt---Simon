const fetchRepo = require("./lib/fetchGithubRepo");

const button = document.querySelector('#apiButton');
const input = document.querySelector('#apiInput');
button.addEventListener('click', () => {
  fetchRepo(input.value, (response) => {
    document.write(`<p>${JSON.stringify(response)}</p>`);
    console.log(response);
  })
})