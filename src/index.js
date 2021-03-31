import homePage from './modules/home';

function createHeader(){
	const header = document.createElement('header');
	header.classList.add('header');

	const restaurantName = document.createElement('h1');  
	restaurantName.classList.add('restaurant-name');
	restaurantName.textContent = 'Special Burgers';

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
		// setActiveButton('homebtn');
		// homePage();
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

function setActiveButton(button){
  const buttons = document.querySelectorAll('.navbar-btn');
  
	buttons.forEach((button) => {
		if (button !== this){
			button.classList.remove('active');
		}
	});
	button.classList.add('active');
}

function createMain(){
	const main = document.createElement('main');
	main.classList.add('main');
	main.setAttribute('id', 'main');
	return main;
}

function createFooter(){
  const footer = document.createElement('footer')
	footer.classList.add('footer');

	footer.textContent = 'Developed with ♥ by Imran Yousaf';

	return footer;
}

function init(){
	const content = document.getElementById('content');
	content.appendChild(createHeader());
	content.appendChild(createMain());
	content.appendChild(createFooter());

	setActiveButton(document.querySelector('.navbar-btn'));
	homePage();
}

init();