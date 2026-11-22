const user = "Xhand98";
let projectos = document.body.querySelector("#projects");
let title = document.body.querySelector("#title");
let button = document.body.querySelector("#reload")

const KEY = "flavorless";
let was_stored = false;

let repos = localStorage.getItem("repos")



if (repos == null) {
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?type=public&per_page=100`,
  );
  let repositories = await response.json();
  localStorage.setItem("repos", JSON.stringify(repositories))
  repos = JSON.parse(localStorage.getItem("repos"))
} else {
  was_stored = true
  repos = JSON.parse(localStorage.getItem("repos"))
  console.log(repos)
}

if (was_stored == true) {
  title.insertAdjacentHTML("beforeend", " - Cached")
}

button.addEventListener("click", (() => {
  localStorage.removeItem("repos")
  location.reload()
}))

if (repos != null) {
  for (let repo of repos) {
    let description;
    if (repo.description == null) {
      description = "To be written";
    } else description = repo.description;

    if (repo.fork === false) {
      projectos.insertAdjacentHTML("beforeend",
        `<li><i><a href="https://github.com/${repo.full_name}">${repo.name}</a></i>, ${description}`
      );
    }
  }
}
