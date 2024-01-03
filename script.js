let imgElem = document.querySelector(".profile-picture img");
let btn = document.getElementById("btn");
let card = document.querySelector(".card");
let userIn = document.querySelector(".userInput");
let p = document.querySelector(".warning");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("username").value;
  let prof = document.getElementById("proff").value;
  
  if (input === ''){
    p.innerHTML = 'Invalid username';
    setTimeout(() => {
      p.innerHTML = '';
    }, 1000);
    return;
  }
  userIn.classList.add('hide');
  card.classList.remove('hide');
  
  const reqURL = `https://api.github.com/users/${input}`;
  let objData = {};
  const xhr = new XMLHttpRequest();
  xhr.open("GET", reqURL);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const stringData = this.responseText;
      objData = JSON.parse(stringData);

      card.innerHTML = `
      <div class="profile-picture">
        <img src="${objData.avatar_url}" alt="">
      </div>

      <h1 class="name">${objData.name}</h1>
      <p>${prof}</p>

      <div class="socials">
        <a href="#">
          <img src="Images/instagram.svg" alt="">
        </a>
        <a href="https:/x.com/${objData.twitter_username}">
          <img src="Images/tweeter.svg" alt="">
        </a>
        <a href="https:/github.com/${input}">
          <img src="Images/github.svg" alt="">
        </a>
      </div>

      <div class="profile-info">
        <h3>GitHub Profile Information</h3>
        <span>Public Repositorie : ${objData.public_repos}</span> 
        <span>Followers: ${objData.followers}</span>
        <span>Following: ${objData.following}</span>
      </div>
      `;
    }
  };
  xhr.send();
});
