'use strict';

const contactsList = document.getElementById('contactsList');
const SpecialContactsList = document.getElementById('SpecialContactsList');
const searchBar = document.getElementById('searchBar');

let goContacts = [];
let goSpecialContacts = [];
let searchString = [];
let filteredContacts = [];

let contactElements = [];
let contactSpecialElements = [];

/********************
 SEARCHBAR
 *********************/

searchBar.addEventListener('keyup', (e) => {
  searchString = e.target.value.toLowerCase();
  filteredContacts = goContacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchString);
  });
  displayContacts(filteredContacts);
});

/********************
 LOAD and DISPLAY
 *********************/
const loadContacts = async () => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    goContacts = await res.json();
    displayContacts(goContacts);
    displaySpecialContacts(goSpecialContacts);
  } catch (err) {
    console.error(err);
  }
};

const displayContacts = (contacts) => {
  const htmlString = contacts
    .map((contact) => {
      return `
            <li >
            <span><img class="blue" src="https://ui-avatars.com/api/?name=${contact.name}" alt="image avatar" ></span>
                <span>${contact.name}</span>
                <span class="aka">Aka: ${contact.username}</span>
                <span class="email">${contact.email}</span>
                <span><a id="btn-add" class="heart" data-tooltip="Aggiungi a Speciali" contactid="${contact.id}" href="#example">❤</a></span>
                </li>
                `;
    })
    .join('');
  contactsList.innerHTML = htmlString;

// Events Contacts
  contactElements = document.querySelectorAll('.heart');
  contactElements.forEach((el) => {
    el.addEventListener('click', (event) => {
      let id = event.target.getAttribute('contactid');

      let obj = goContacts.find((el) => {
        return el.id === parseInt(id);
      });
      let alreadyPrefered = goSpecialContacts.findIndex((el) => {
        return el.id === parseInt(id);
      });
      if (alreadyPrefered == -1) {
        event.target.innerHTML = '❤️️';
        goSpecialContacts.push(obj);
        displaySpecialContacts(goSpecialContacts);
      } else {
        event.target.innerHTML = '❤';
        goSpecialContacts.splice(alreadyPrefered, 1);
        displaySpecialContacts(goSpecialContacts);
      }
    });
  });
};


/***************************

create SPECIAL Contacts

******************************/

const displaySpecialContacts = (contacts) => {
  const htmlString = contacts
    .map((contact) => {
      return `
            <li id="example" class="">
            <span><img class="blue" src="https://ui-avatars.com/api/?name=${contact.name}" alt="image avatar" ></span>
                <span>${contact.name}</span>
                <span class="aka">Aka: ${contact.username}</span>
                <span class="email">${contact.email}  </span>
                <span><a id="" class="special-element" data-tooltip="Rimuovi da Speciali" contactid="${contact.id}" href="">❤️️</a></span>
            </li>
            `;
    })
    .join('');
  SpecialContactsList.innerHTML = htmlString;

  // Events Special Contacts
  contactSpecialElements = document.querySelectorAll('.special-element');
  contactSpecialElements.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      let id = event.target.getAttribute('contactid');

      let alreadyPrefered = goSpecialContacts.findIndex((el) => {
        return el.id === parseInt(id);
      });
      let elementInContactsList = document.querySelector(
        'a[contactid="' + id + '"]'
      );
      elementInContactsList.innerHTML = '❤';
      goSpecialContacts.splice(alreadyPrefered, 1);
      displaySpecialContacts(goSpecialContacts);
    });
  });
};



//  button TOP

const showOnPx = 50;
const backToTopButton = document.getElementById('btnTrigger');

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

//  create Footer

const footerEl = document.createElement('footer');
footerEl.className = 'myFooter';
footerEl.innerHTML = '<strong>Powered by Anice</strong>';
document.body.append(footerEl);

loadContacts();

// Modal
 var modal = document.getElementById("myModal");
        
 var btn = document.getElementById("myBtn");
 
 var span = document.getElementsByClassName("close")[0];
 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

const saveBtn = document.getElementById("save");
saveBtn.addEventListener('click', (el) => {
  const nameCont = document.getElementById("name");
  const userNameCont = document.getElementById("username");
  const mailCont = document.getElementById("email");
  if (nameCont.value !== '' && userNameCont.value !== '' && mailCont.value !== ''){

    console.log(nameCont.value, userNameCont.value, mailCont.value)
    goContacts.sort((a, b) => (a.id > b.id) ? 1 : -1)
    let lastElIndex = goContacts[goContacts.length -1].id
    console.log(lastElIndex)
    goContacts.push({
      id:lastElIndex +1,
      name:nameCont.value, 
      username: userNameCont.value,
      email: mailCont.value
    })
    displayContacts(goContacts);
  }
  nameCont.value = '' 
  userNameCont.value = '' 
  mailCont.value = ''

  modal.style.display = "none";
})