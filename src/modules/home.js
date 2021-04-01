const homeSection = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const burgerImage = document.createElement('img');
  burgerImage.src ="images/burger.jpg"
  burgerImage.alt ="burger-image"

  home.appendChild(createParagraph('Eat healthy and Natural Food', 'Discover your taste'));
  home.appendChild(burgerImage);

  return home;
}


const createParagraph = (text, headtext) => {
  const paraItem = document.createElement('div');
  paraItem.classList.add('paraItem');

  const para = document.createElement('p');
  para.classList.add('para');
  para.textContent = headtext;

  const para2 = document.createElement('p');
  para2.classList.add('para2');
  para2.textContent = text;

  paraItem.appendChild(para);
  paraItem.appendChild(para2);

  return paraItem;
}

const homePage = () => {
  const main = document.getElementById('main');

  main.textContent = "";
  main.appendChild(homeSection());
}

export default homePage;