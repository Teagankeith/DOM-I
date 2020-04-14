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
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let nav1 = document.querySelectorAll("nav a");
nav1.forEach(( currentValue, index) => {
  currentValue.textContent = siteContent.nav[`nav-item-${index + 1}`];
  });

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

let buttonEl = document.querySelector('button');
buttonEl.textContent = siteContent["cta"]["button"];

let imageOne = document.getElementById("cta-img");
imageOne.src= "img/header-img.png";

let imageTwo = document.querySelector(".middle-img");
imageTwo.src= "img/mid-page-accent.jpg";
 
let pageHeaders = document.querySelectorAll(".main-content h4");
let pageText = document.querySelectorAll(".main-content p");
let topSections = ['features', 'about', 'services', 'product', 'vision'];
for(let i=0; i< pageHeaders.length; i++){
  pageHeaders[i].textContent = topSections[i];
  pageText[i].textContent = siteContent["main-content"][`${sections[i]}-content`];
}


 let siteInfo = document.querySelector('.contact');
siteInfo.innerHTML = '<h4>Contact</h4><p>123 Way 456 Street<br>Somewhere, USA</p><p>1 (888) 888-8888</p> <p>sales@greatidea.io</p>';

let copyright = document.querySelector('footer');
copyright.innerHTML = 'Copyright Great Idea! 2018';


