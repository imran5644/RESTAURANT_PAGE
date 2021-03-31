function homeSection() {
  const home = document.createElement('div');
  home.classList.add('home');

  const burgerImage = document.createElement('img');
  burgerImage.src ="images/burger.jpg"
  burgerImage.alt ="burger-image"

  home.appendChild(burgerImage);
  return home;
}

function homePage() {
  const main = document.getElementById('main');

  main.textContent = "";
  main.appendChild(homeSection());
}

export default homePage;