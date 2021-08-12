fetch("https://api.github.com/users/alirezarezayat")
  .then((result) => result.json())
  .then((data) => {
    document.getElementById("avatar").src = `${data.avatar_url}`;
    document.getElementById("name").innerHTML = `${data.name}`;
    fetch(data.repos_url)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        console.log(data.length());
        console.log(data[0]);
        console.log(data[0].id);
      });
    document.getElementById("repositories").innerHTML = data.repos_url;
  });
