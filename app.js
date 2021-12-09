fetch("https://api.github.com/users/alirezarezayat")
  .then((result) => result.json())
  .then((data) => {
    document.getElementById("avatar").src = `${data.avatar_url}`;
    document.getElementById("fav-icon").href = `${data.avatar_url}`;
    document.getElementById("page-title").innerHTML = `${data.name}`;
    document.getElementById("name").innerHTML = `${data.name}`;
    document.getElementById("bio").innerHTML = `${data.bio}`;
    document.getElementById("my-github-url").href = `${data.html_url}`;
    fetch(data.repos_url)
      .then((result) => result.json())
      .then((data) => {
        for (let variable in data) {
          console.log(data[variable]);
          console.log(data[variable].name);
          document.getElementById(
            "repositories"
          ).innerHTML += `<div id="repos-div-${variable}">
            <li id="repos-${variable}">
              <a id="${data[variable].name}" href="${data[variable].html_url}">
                  ${data[variable].name}
              </a>
            </li>
            <p>
              page of this repository is : 
              <a href="https://alirezarezayat.github.io/${data[variable].name}">
                ${data[variable].name}
              </a>
            </p>
            <p>${data[variable].description}</p>
          </div>`;
        }
      });
  });
