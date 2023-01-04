fetch("https://api.github.com/users/alirezarezayat")
  .then((result) => result.json())
  .then((data) => {
    fetch(data.repos_url)
      .then((result) => result.json())
      .then((data) => {
        for (let variable in data) {
          // console.log(data[variable]);
          // console.log(data[variable].name);
          document.getElementById("repositories").innerHTML += `
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  ${data[variable].name}
                </div>
                <div class="card-body">
                  <h5 class="card-title">Repository :
                    <a id="${data[variable].name}" href="${data[variable].html_url}">${data[variable].name}</a>
                  </h5>
                  <p class="card-text">${data[variable].description}</p>
                  <a  href="https://alirezarezayat.github.io/${data[variable].name}" target="_blank" class="btn btn-primary">${data[variable].name} Page</a>
                </div>
              </div>
            </div>
          `;
        }
        document.getElementById('spinner').remove();
      });
  });

const avatar = document.getElementById("avatar");
if (window.screen.width < 576) avatar.style.width = "33%";

window.addEventListener("scroll", function () {
  // console.log(this.document.activeElement);
  // avatar.style.width = 33 + "%";
  if (this.window.screen.width < 576)
    if (
      // document.body.scrollTop > 50 ||
      // document.documentElement.scrollTop > 50 ||
      this.document.documentElement.scrollTop < 250
    ) {
      avatar.style.width = "33%";
    } else {
      avatar.style.width = "max";
    }
  console.log(avatar.style.width);
});

function onClickAvatar() {
  if (avatar.style.width != "40%") {
    console.log(avatar.style.width);
    if (avatar.style.width == "100%") {
      avatar.style.width = "33%";
    } else avatar.style.width = "40%";
  } else {
    avatar.style.width = "33%";
  }
  // avatar.removeAttribute("style");
}

function onLeaveAvatar() {
  avatar.style.width = "20%";
}

function onMouseOverAvatar() {
  avatar.style.width = "30%";
}
