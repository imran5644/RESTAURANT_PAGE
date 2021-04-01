const homeSection = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const burgerImage = document.createElement('img');
  burgerImage.src ="images/burger.jpg"
  burgerImage.alt ="burger-image"

  home.appendChild(burgerImage);
  home.appendChild(createParagraph('Eat healthy and Natural Food'));
  return home;
}


const createParagraph = (text) => {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}

const homePage = () => {
  const main = document.getElementById('main');

  main.textContent = "";
  main.appendChild(homeSection());
}

export default homePage;