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
          document.getElementById("repositories").innerHTML += <a>1111</a>;
        }
      });
  });
