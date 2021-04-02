const createMenuItem = (bName, bDescription) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menuItem');

  const burgerName = document.createElement('h1');
  burgerName.textContent = bName;

  const burgerDescription = document.createElement('p');
  burgerDescription.textContent = bDescription;

  const burgerImg = document.createElement('img');
  burgerImg.src = `images/${bName.toLowerCase()}.jpg`;
  burgerImg.alt = `${bName}`;


  menuItem.appendChild(burgerName);
  menuItem.appendChild(burgerImg);
  menuItem.appendChild(burgerDescription);

  return menuItem;
};

const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem(
    'BarbecueBurger',
    'Prepared with ground beef, mixed with onions and barbecue sauce, and then grilled.',
  ));

  menu.appendChild(createMenuItem(
    'ButterBurger',
    'Burgers are often made with a buttered bun, butter as one of the ingredients of the patty or with a pat of butter on top of the burger patty',
  ));

  menu.appendChild(createMenuItem(
    'CheeseBurger',
    'Hamburger accompanied with melted cheese. The cheese is usually sliced, then added a short time before the hamburger finishes cooking to allow it to melt. ',
  ));

  menu.appendChild(createMenuItem(
    'KimchiBurger',
    'A hamburger that includes kimchi in its preparation',
  ));

  menu.appendChild(createMenuItem(
    'RiceBurger',
    'Style of hamburger in which the bun is a compressed cake of rice.',
  ));

  menu.appendChild(createMenuItem(
    'VeggieBurger',
    'Textured vegetable protein, seitan (wheat gluten), Quorn, beans, grains or an assortment of vegetables, which are ground up and formed into patties.',
  ));

  return menu;
};


const menuPage = () => {
  const main = document.getElementById('main');

  main.textContent = '';
  main.appendChild(createMenu());
};

export default menuPage;