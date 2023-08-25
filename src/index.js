const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


//IMAGES
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];

const lastImg = document.querySelector('#middle-img');
lastImg.src = siteContent.images['accent-img'];


//FOOTER LINK
const footLink = document.querySelector('footer a');
footLink.textContent = siteContent.footer.copyright;
footLink.classList.add('bold');

//CONTACT
const contactBar = document.querySelector('section.contact');
contactBar.children[0].textContent = siteContent.contact['contact-h4'];
contactBar.children[1].textContent = siteContent.contact.address;
contactBar.children[2].textContent = siteContent.contact.phone;
contactBar.children[3].textContent = siteContent.contact.email;

//TOP CONTENT
const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

//BOTTOM CONTENT
const bottomContent = document.querySelector('.bottom-content');
const h4Bottom = bottomContent.querySelectorAll('h4')
h4Bottom[0].textContent = siteContent['main-content']['services-h4'];
h4Bottom[1].textContent = siteContent['main-content']['product-h4'];
h4Bottom[2].textContent = siteContent['main-content']['vision-h4'];
const pBottom = bottomContent.querySelectorAll('p');
pBottom[0].textContent = siteContent['main-content']['services-content'];
pBottom[1].textContent = siteContent['main-content']['product-content'];
pBottom[2].textContent = siteContent['main-content']['vision-content'];

//CTA BUTTON
const ctaText = document.querySelector('h1')
ctaText.textContent = siteContent.cta.h1;
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;



//NAV LINK
const navLink = document.querySelectorAll('nav a');
navLink[0].textContent = siteContent.nav['nav-item-1']
navLink[1].textContent = siteContent.nav['nav-item-2']
navLink[2].textContent = siteContent.nav['nav-item-3']
navLink[3].textContent = siteContent.nav['nav-item-4']
navLink[4].textContent = siteContent.nav['nav-item-5']
navLink[5].textContent = siteContent.nav['nav-item-6']

navLink[0].classList.add('italic');
navLink[1].classList.add('italic');
navLink[2].classList.add('italic');
navLink[3].classList.add('italic');
navLink[4].classList.add('italic');
navLink[5].classList.add('italic');
