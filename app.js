fetch("https://api.github.com/users/alirezarezayat")
  .then((result) => result.json())
  .then((data) => {
    document.getElementById("avatar").src = `${data.avatar_url}`;
    document.getElementById("name").innerHTML = `${data.name}`;
    fetch(data.repos_url)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
    document.getElementById("repositories").innerHTML = data.repos_url;
  });
