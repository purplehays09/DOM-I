const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "h4":{
    "features-h4":"Features",
    "about-h4":"About",
    "services-h4":"Services",
    "product-h4":"Product",
    "vision-h4":"Vision"
  },
  "p":{
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  "main-content": {
    "middle-img-src": "img/mid-page-accent.jpg",
    "contact-h4" : "Contact"
  },
  "contact": {
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector('nav');

let navLinks = nav.querySelectorAll('nav a');
// console.log(servicesLinks)

let navLinksText = Object.values(siteContent.nav);

navLinks.forEach((tag,i) =>  tag.textContent = navLinksText[i]);

// let servicesLink = nav.querySelector('nav a:nth-of-type(1)')
// let productLink = nav.querySelector('nav a:nth-of-type(2)')
// let visionLink = nav.querySelector('nav a:nth-of-type(3)')
// let featuresLink = nav.querySelector('nav a:nth-of-type(4)')
// let aboutLink = nav.querySelector('nav a:nth-of-type(5)')
// let contactLink = nav.querySelector('nav a:nth-of-type(6)')
let navImg = document.querySelector('#logo-img');

let cta = document.querySelector('section.cta');
let h1Element = cta.querySelector('h1');
let ctaButton = cta.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');
let midImg = document.querySelector('#middle-img')

let contactTitle = document.querySelector('section.contact h4')

let contentH4 = document.querySelectorAll('.text-content h4');
let contentP = document.querySelectorAll('.text-content p');

let contentContact = document.querySelectorAll('.contact p');
let footerP = document.querySelector('footer p');


// console.log(siteContent.h4);
let h4Text = Object.values(siteContent["h4"]);
let pText = Object.values(siteContent["p"]);
let contactText = Object.values(siteContent["contact"])

contentH4.forEach((tag, i) => tag.textContent = h4Text[i]);
contentP.forEach((tag, i) => tag.textContent = pText[i]);
contentContact.forEach((tag,i) => tag.textContent= contactText[i]);

contactTitle.textContent = 'Contact';
footerP.textContent = siteContent.footer.copyright

// console.log(mainContent)

// servicesLink.textContent = siteContent.nav["nav-item-1"];
// productLink.textContent = siteContent.nav["nav-item-2"];
// visionLink.textContent = siteContent.nav["nav-item-3"];
// featuresLink.textContent = siteContent.nav["nav-item-4"];
// aboutLink.textContent = siteContent.nav["nav-item-5"];
// contactLink.textContent = siteContent.nav["nav-item-6"];

console.log(siteContent.nav["img-src"]);
// console.log(navImg)
navImg.src = siteContent.nav["img-src"];
// console.log(navImg)

/* add the h1 text and line breaks
add the text to the button of cta
add the source to the image

maincontent text content h4 and p adding

add image src

add the h4 and p to the main and bottom content
*/


let h1TextArray = siteContent.cta.h1.split(' ');

h1Text = `${h1TextArray[0]}<br> ${h1TextArray[1]}<br> ${h1TextArray[2]} `;

h1Element.innerHTML = h1Text;
ctaButton.textContent = siteContent.cta.button;

ctaImg.setAttribute('src', "img/header-img.png");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// console.log(ctaImg)

