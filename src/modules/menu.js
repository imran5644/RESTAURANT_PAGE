function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        'Barbecue burger', 
        'repared with ground beef, mixed with onions and barbecue sauce, and then grilled. Once the meat has been turned once, barbecue sauce is spread on top and grilled until the sauce caramelizes. The bread bun is buttered and also spread with a light layer of barbecue sauce, then toasted on the grill.'));
    
    menu.appendChild(createMenuItem(
        'Butter burger', 
        'burgers are often made with a buttered bun, butter as one of the ingredients of the patty or with a pat of butter on top of the burger patty'));
    
    menu.appendChild(createMenuItem(
        'Cheeseburger',
        'Hamburger accompanied with melted cheese. The cheese is usually sliced, then added a short time before the hamburger finishes cooking to allow it to melt. '
    ));

    menu.appendChild(createMenuItem(
        'Kimchi burger',
        'A hamburger that includes kimchi in its preparation'
    ));

    menu.appendChild(createMenuItem(
        'Rice burger',
        'Style of hamburger in which the bun is a compressed cake of rice. The MOS Burger fast-food restaurant chain introduced the rice burger in 1987,and it has become a popular food item'
    ));

    menu.appendChild(createMenuItem(
        'Veggie burger',
        'Veggie burger, garden burger, or tofu burger uses a meat analogue, a meat substitute such as tofu, textured vegetable protein, seitan (wheat gluten), Quorn, beans, grains or an assortment of vegetables, which are ground up and formed into patties.'
    ));

    return menu;
}

function createMenuItem(b_name, b_description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const burgerName = document.createElement('h1');
    burgerName.textContent = b_name;

    const burgerDescription = document.createElement('p');
    burgerDescription.textContent = b_description;

    const burgerImg = document.createElement('img');
    burgerImg.src = 'images/';
    burgerImg.alt = `${b_name}`;

    menuItem.appendChild(burgerImg);
    menuItem.appendChild(burgerName);
    menuItem.appendChild(burgerDescription);

    return menuItem;
}

function menuPage() {
    const main = document.getElementById('main');
    
    main.textContent = '';
    main.appendChild(createMenu());
}

export default menuPage;