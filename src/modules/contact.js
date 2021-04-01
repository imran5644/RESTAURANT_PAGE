const createContactItems = (contactDetail, address, phoneNo, day, time) => {
  const contactItems = document.createElement('div');
  contactItems.classList.add('contactItems');

  const contactUs = document.createElement('h1');
  contactUs.textContent = contactDetail;

  const bAddress = document.createElement('p');
  bAddress.textContent = address;

  const bPhoneNo = document.createElement('p');
  bPhoneNo.textContent = phoneNo;

  const bDay = document.createElement('p');
  bDay.textContent = day;

  const bTime = document.createElement('p');
  bTime.textContent = time;

  const restaurantLocation = document.createElement('img');
  restaurantLocation.src = 'images/location.JPG';
  restaurantLocation.alt = 'Special Burger location';

  const locationIcon = document.createElement('i');
  locationIcon.classList.add('fas');
  locationIcon.classList.add('fa-map-marker-alt');

  const clockIcon = document.createElement('i');
  clockIcon.classList.add('fas');
  clockIcon.classList.add('fa-clock');


  const telephoneIcon = document.createElement('i');
  telephoneIcon.classList.add('fa');
  telephoneIcon.classList.add('fa-phone');


  contactItems.appendChild(contactUs);
  contactItems.appendChild(locationIcon);
  contactItems.appendChild(bAddress);
  contactItems.appendChild(telephoneIcon);
  contactItems.appendChild(bPhoneNo);

  contactItems.appendChild(bDay);
  contactItems.appendChild(clockIcon);
  contactItems.appendChild(bTime);
  contactItems.appendChild(restaurantLocation);

  return contactItems;
};

const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  contact.appendChild(createContactItems('Contact Us', 'Address: 1011 Oakwood Ave NE, Massillon, OH 44646', 'Phone No: (999)-444-09090', 'Working Days: Mon-Fri', 'Time: 08:00am-09:00pm'));
  return contact;
};


const contactPage = () => {
  const main = document.getElementById('main');

  main.textContent = '';
  main.appendChild(createContact());
};

export default contactPage;