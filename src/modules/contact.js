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

  
  contactItems.appendChild(contact_us);
  contactItems.appendChild(b_address);
  contactItems.appendChild(b_phone_no);
  contactItems.appendChild(b_day);
  contactItems.appendChild(b_time);

  return contactItems;

}

const contactPage = () => {
  const main = document.getElementById('main');

  main.textContent = '';
  main.appendChild(createContact());
}

export default contactPage;