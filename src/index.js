function createHeader(){
const content = document.querySelector('#content');
const header = document.createElement('header');
header.classList.add('header');

const restaurantName = document.createElement('h1');  
restaurantName.classList.add('restaurant-name');
restaurantName.textContent = 'Special Burgers';

header.appendChild(restaurantName);
content.appendChild(header);
console.log(header);
return header;

}

window.onload = function() {
    createHeader();
  }