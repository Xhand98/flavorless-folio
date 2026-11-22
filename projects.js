const user = "Xhand98";
let projectos = document.body.querySelector("#projects");

const response = await fetch(
  `https://api.github.com/users/${user}/repos?type=public&per_page=100`,
);
const repos = await response.json();


for (let repo of repos) {
  let description;
  if (repo.description == null) {
    description = "To be written";
  } else description = repo.description;

  if (repo.fork === false) {
    projectos.insertAdjacentHTML("beforeend", `
      <li><i><a href="https://github.com/${repo.full_name}">${repo.name}</a></i>, ${description}
      `
    );
  }
}
