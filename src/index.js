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
	homebtn.classList.add('navbar-btn');
	homebtn.textContent = 'Home';
	homebtn.addEventListener('click', (e)=>{
		if (e.target.classList.contains('active')) return;
	})

	const menubtn = document.createElement('button');
	menubtn.classList.add('navbar-btn');
	menubtn.textContent = 'Menu';
	menubtn.addEventListener('click', (e)=>{
		if (e.target.classList.contains('active')) return;
	})

	const contactbtn = document.createElement('button');
	contactbtn.classList.add('navbar-btn');
	contactbtn.textContent = 'Contact';
	contactbtn.addEventListener('click', (e)=>{
		if (e.target.classList.contains('active')) return;
	})

	navbar.appendChild(homebtn);
	navbar.appendChild(menubtn);
	navbar.appendChild(contactbtn);
	return navbar;
}

function createFooter(){
	const content = document.querySelector('#content');
  const footer = document.createElement('footer')
	footer.classList.add('footer');

	footer.textContent = 'Developed with ♥ by Imran Yousaf';

	content.appendChild(footer);
	return footer;
}


window.onload = function() {
    createHeader();
		createFooter();
  }