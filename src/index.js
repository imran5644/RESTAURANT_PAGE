function createHeader(){
	const content = document.querySelector('#content');
	const header = document.createElement('header');
	header.classList.add('header');

	const restaurantName = document.createElement('h1');  
	restaurantName.classList.add('restaurant-name');
	restaurantName.textContent = 'Special Burgers';

	content.appendChild(header);
	header.appendChild(restaurantName);
	header.appendChild(createNav());
	return header;
}

function createNav() {
  const navbar = document.createElement('nav');
	navbar.classList.add('navbar');

	const homebtn = document.createElement('button');
	homebtn.classList.add('home-btn');
	homebtn.textContent = 'Home';
	homebtn.addEventListener('click', (e)=>{
		if (e.target.classList.contains('active')) return;
	})

	const menubtn = document.createElement('button');
	menubtn.classList.add('menu-btn');
	menubtn.textContent = 'Menu';
	menubtn.addEventListener('click', (e)=>{
		if (e.target.classList.contains('active')) return;
	})

	const contactbtn = document.createElement('button');
	contactbtn.classList.add('contact-btn');
	contactbtn.textContent = 'Contact';
	contactbtn.addEventListener('click', (e)=>{
		if (e.target.classList.contains('active')) return;
	})

	navbar.appendChild(homebtn);
	navbar.appendChild(menubtn);
	navbar.appendChild(contactbtn);
	return navbar;
}


window.onload = function() {
    createHeader();
  }