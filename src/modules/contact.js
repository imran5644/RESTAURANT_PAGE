const createContact = () =>  {
  const contact = document.createElement('div');
  contact.classList.add('contact'); 

  contact.appendChild(createContactItems('Contact Us', 'Address: 1011 Oakwood Ave NE, Massillon, OH 44646', 'Phone No: (999)-444-09090', 'Working Days: Mon-Fri', 'Time: 08:00am-09:00pm'));
  return contact;
}

const createContactItems = (contact_detail, address, phone_no, day, time) => {
  const contactItems = document.createElement('div');
  contactItems.classList.add('contactItems');

  const contact_us = document.createElement('h1');
  contact_us.textContent = contact_detail;

  const b_address = document.createElement('p');
  b_address.textContent = address;

  const b_phone_no = document.createElement('p');
  b_phone_no.textContent = phone_no;

  const b_day = document.createElement('p');
  b_day.textContent = day;

  const b_time = document.createElement('p');
  b_time.textContent = time;

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "images/location.JPG";
  restaurantLocation.alt = "Special Burger location";

  const locationIcon = document.createElement("i");
  locationIcon.classList.add("fas");
  locationIcon.classList.add("fa-map-marker-alt");

  const clockIcon = document.createElement("i");
  clockIcon.classList.add("fas");
  clockIcon.classList.add("fa-clock");


  const telephoneIcon = document.createElement("i");
  telephoneIcon.classList.add("fa");
  telephoneIcon.classList.add("fa-phone");



  contactItems.appendChild(contact_us);
  contactItems.appendChild(locationIcon);
  contactItems.appendChild(b_address);
  contactItems.appendChild(telephoneIcon);
  contactItems.appendChild(b_phone_no);
  
  contactItems.appendChild(b_day);
  contactItems.appendChild(clockIcon);
  contactItems.appendChild(b_time);
  contactItems.appendChild(restaurantLocation);

  return contactItems;

}

const contactPage = () => {
  const main = document.getElementById('main');

  main.textContent = '';
  main.appendChild(createContact());
}

export default contactPage;