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
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navis = document.querySelectorAll('nav a');
navis[0].textContent = siteContent["nav"]["nav-item-1"];
navis[1].textContent = siteContent["nav"]["nav-item-2"];
navis[2].textContent = siteContent["nav"]["nav-item-3"];
navis[3].textContent = siteContent["nav"]["nav-item-4"];
navis[4].textContent = siteContent["nav"]["nav-item-5"];
navis[5].textContent = siteContent["nav"]["nav-item-6"];


const h1s = document.querySelectorAll('h1');
h1s[0].textContent = siteContent["cta"]["h1"];

const buttons = document.querySelectorAll('button');
buttons[0].textContent = siteContent["cta"]["button"];

const h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent["main-content"]["features-h4"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
h4s[2].textContent = siteContent["main-content"]["services-h4"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];
h4s[5].textContent = siteContent["contact"]["contact-h4"];

const words = document.querySelectorAll('p');
words[0].textContent = siteContent["main-content"]["features-content"];
words[1].textContent = siteContent["main-content"]["about-content"];
words[2].textContent = siteContent["main-content"]["services-content"];
words[3].textContent = siteContent["main-content"]["product-content"];
words[4].textContent = siteContent["main-content"]["vision-content"];
words[5].textContent = siteContent["contact"]["address"];
words[6].textContent = siteContent["contact"]["phone"];
words[7].textContent = siteContent["contact"]["email"];
words[8].textContent = siteContent["footer"]["copyright"];

const navColor = document.querySelectorAll('nav a');
navColor[0].style.color = 'green';
navColor[1].style.color = 'green';
navColor[2].style.color = 'green';
navColor[3].style.color = 'green';
navColor[4].style.color = 'green';
navColor[5].style.color = 'green';

/*const newLink = document.createElement('href');
newLink.href = "https://www.google.com/";
document.siteContent.nav.appendChild(newLink);

const addNavigation = document.querySelectorAll('nav');
addNavigation.href = "https://www.google.com/";
nav.appendChild(addNavigation);

const newLink = document.createElement('href');
const node = document.createTextNode("Google");
newLink.href = "https://www.google.com/";
newLink.appendChild(node);


const node = document.getElementsByTagName('nav a');
const nodeChild = document.createElement('a');
nodeChild.href = "https://www.google.com/";
node.appendChild(nodeChild);


const link = document.createElement('a');
link.setAttribute('href', 'https://www.google.com/');
link.setAttribute('name', 'Google');
*/
var newNav = document.createElement("nav");
var newA = document.createElement("a");
newNav.appendChild(newA);
newA.innerHTML = "Google";