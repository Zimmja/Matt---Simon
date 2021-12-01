const fetchRepo = require("./lib/fetchGithubRepo");

const button = document.querySelector('#apiButton');
const input = document.querySelector('#apiInput');
const repoName = document.querySelector('#repoName');
const profilePic = document.querySelector('#profilePic');
const repoLink = document.querySelector('#repoLink');
const repoStargazers = document.querySelector('#repoStargazers');
const repoForks = document.querySelector('#repoForks');
const repoLanguage = document.querySelector('#repoLanguage');
button.addEventListener('click', () => {
  fetchRepo(input.value, (response) => {
    //document.write(`<p>${JSON.stringify(response)}</p>`);
    repoName.innerText = response.name;
    //profilePic.innerText = response.owner.avatar_url;
    profilePic.src = response.owner.avatar_url;
    repoLink.href = response.html_url;
    repoLink.innerText = response.name;
    repoStargazers.innerText = response.stargazers_count;
    repoForks.innerText = response.forks_count;
    repoLanguage.innerText = response.language;
    console.log(response);
  })
})