import homePage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';

const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'Special Burgers';

  header.appendChild(restaurantName);
  header.appendChild(createNav());
  return header;
};

const createNav = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const homebtn = document.createElement('button');
  homebtn.classList.add('navbar-btn');
  homebtn.textContent = 'Home';
  homebtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homebtn);
    homePage();
  });

  const menubtn = document.createElement('button');
  menubtn.classList.add('navbar-btn');
  menubtn.textContent = 'Menu';
  menubtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menubtn);
    menuPage();
  });

  const contactbtn = document.createElement('button');
  contactbtn.classList.add('navbar-btn');
  contactbtn.textContent = 'Contact';
  contactbtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactbtn);
    contactPage();
  });

  navbar.appendChild(homebtn);
  navbar.appendChild(menubtn);
  navbar.appendChild(contactbtn);
  return navbar;
};

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.navbar-btn');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
};

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');


  const copyright = document.createElement('p');
  copyright.textContent = 'Developed with ♥ by Imran Yousaf';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/imran5644';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');
  githubLink.appendChild(githubIcon);

  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
};

const init = () => {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.navbar-btn'));
  homePage();
};

init();