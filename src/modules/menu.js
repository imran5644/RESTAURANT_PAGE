const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        'Barbecue Burger', 
        'Prepared with ground beef, mixed with onions and barbecue sauce, and then grilled.'));
    
    menu.appendChild(createMenuItem(
        'Butter Burger', 
        'Burgers are often made with a buttered bun, butter as one of the ingredients of the patty or with a pat of butter on top of the burger patty'));
    
    menu.appendChild(createMenuItem(
        'Cheese Burger',
        'Hamburger accompanied with melted cheese. The cheese is usually sliced, then added a short time before the hamburger finishes cooking to allow it to melt. '
    ));

    menu.appendChild(createMenuItem(
        'Kimchi Burger',
        'A hamburger that includes kimchi in its preparation'
    ));

    menu.appendChild(createMenuItem(
        'Rice Burger',
        'Style of hamburger in which the bun is a compressed cake of rice.'
    ));

    menu.appendChild(createMenuItem(
        'Veggie Burger',
        'Textured vegetable protein, seitan (wheat gluten), Quorn, beans, grains or an assortment of vegetables, which are ground up and formed into patties.'
    ));

    return menu;
}

const createMenuItem = (b_name, b_description) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const burgerName = document.createElement('h1');
    burgerName.textContent = b_name;

    const burgerDescription = document.createElement('p');
    burgerDescription.textContent = b_description;

    const burgerImg = document.createElement('img');
    burgerImg.src = `images/burgers/${b_name.toLowerCase()}.jpg`;
    burgerImg.alt = `${b_name}`;

    
    menuItem.appendChild(burgerName);
    menuItem.appendChild(burgerImg);
    menuItem.appendChild(burgerDescription);

    return menuItem;
}

const menuPage = () => {
    const main = document.getElementById('main');
    
    main.textContent = '';
    main.appendChild(createMenu());
}

export default menuPage;