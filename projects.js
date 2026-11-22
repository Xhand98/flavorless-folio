const user = "Xhand98";
let projectos = document.body.querySelector("#projects");

const response = await fetch(
  `https://api.github.com/users/${user}/repos?type=public&per_page=100`,
);
const repos = await response.json();

for (let i = 0; i < repos.length; i++) {
  let description;
  if (repos[i]["description"] == null) {
    description = "To be written";
  } else {
    description = repos[i]["description"];
  }

  if (repos[i]["fork"] === false) {
    projectos.insertAdjacentHTML(
      "beforeend",
      `
    <li><i><a href="https://github.com/${repos[i]["full_name"]}">${repos[i]["name"]}</a></i>, ${description}
    `,
    );
  }
}
