import icon from './logo.png';
import menuFunction from './menu.js';
import infoFunction from './info.js';
import contactFunction from './contact.js';

const logoContainer = document.createElement('div');
logoContainer.style.width = "100vw";
logoContainer.style.height = "100vh";
logoContainer.style.overflow = "hidden";
logoContainer.style.backgroundImage = `url(${icon})`;
logoContainer.style.backgroundSize = "cover";
logoContainer.style.backgroundPosition = "center";


const middleContainer = document.createElement('div');
middleContainer.style.display = "flex";
middleContainer.style.justifyContent = "center";
middleContainer.style.alignItems = "center";
middleContainer.style.width = "100%";
middleContainer.style.height = "100%";


logoContainer.appendChild(middleContainer);

const logo = new Image();
logo.src = icon;
logo.style.width = "100%";
logo.style.height = "100%";
logo.style.objectFit = "cover";

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflow = "hidden";

document.body.appendChild(logoContainer);

export default middleContainer;

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Rubik+Doodle+Triangles&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
fontLink.onload = function () {
    document.body.style.fontFamily = 'Roboto, "Rubik Doodle Triangles", sans-serif';
    document.body.style.fontSize = '18px';
}

menuFunction();
infoFunction();
contactFunction();

function createMenuContent() {
    const menuContent = document.createElement('div');

    const ramenDish1 = document.createElement('div');
    ramenDish1.innerHTML = '<h1><b>Classic Ramen</b> <span>$12.50</span></h1>';
    ramenDish1.appendChild(document.createElement('p')).innerHTML = 'Traditional ramen with flavorful broth and assorted toppings';
    menuContent.appendChild(ramenDish1);


    const ramenDish2 = document.createElement('div');
    ramenDish2.innerHTML = '<h1><b>Spicy Miso Ramen</b> <span>$15.50</span></h1>';
    ramenDish2.appendChild(document.createElement('p')).innerHTML = 'Spicy miso-infused ramen with bold flavors and rich broth';
    menuContent.appendChild(ramenDish2);

    const ramenDish3 = document.createElement('div');
    ramenDish3.innerHTML = '<h1><b>Vegan Ramen</b> <span>$14.00</span></h1>';
    ramenDish3.appendChild(document.createElement('p')).innerHTML = 'Delicious vegan ramen with plant-based ingredients';
    menuContent.appendChild(ramenDish3);

    menuContent.style.fontSize = '24px';
    menuContent.style.padding = '20px';
    menuContent.style.display = 'flex'
    menuContent.style.justifyContent = 'center'
    return menuContent;
}

function createInfoContent() {
    const infoContent = document.createElement('div');
    infoContent.style.fontSize = '24px';
    infoContent.style.padding = '20px';
    infoContent.style.display = 'flex';
    infoContent.style.flexDirection = 'column';
    infoContent.style.alignItems = 'center';

    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = '<b>Imaginary Ramen Paradise</b>';
    infoContent.appendChild(restaurantName);

    const address = document.createElement('p');
    address.textContent = '123 Noodle Street, Ramen City';
    infoContent.appendChild(address);

    const openingHours = document.createElement('p');
    openingHours.innerHTML = '<b>Opening Hours:</b> Monday-Sunday, 11:00 AM - 10:00 PM';
    infoContent.appendChild(openingHours);

    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = 'Welcome to Imaginary Ramen Paradise! We strive to provide the best ramen experience in town.';
    infoContent.appendChild(additionalInfo);

    return infoContent;
}

function createContactContent() {
    const contactContent = document.createElement('div');
    contactContent.style.fontSize = '24px';
    contactContent.style.padding = '20px';
    contactContent.style.display = 'flex';
    contactContent.style.flexDirection = 'column';
    contactContent.style.alignItems = 'center';


    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = '<b>Contact Us</b>';
    contactContent.appendChild(contactTitle);

    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = '<b>Email:</b> contact@imaginaryramenparadise.com<br><b>Phone:</b> (555) 987-6543';
    contactContent.appendChild(contactInfo);

    const socialMediaTitle = document.createElement('h2');
    socialMediaTitle.textContent = 'Follow Us on Social Media';
    contactContent.appendChild(socialMediaTitle);

    const socialMediaLinks = document.createElement('div');
    socialMediaLinks.innerHTML = '<a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>';
    contactContent.appendChild(socialMediaLinks);

    const locationMap = document.createElement('div');
    locationMap.innerHTML = '<b>Our Location:</b> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55555.55555555555!2d-74.0066!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594e6c7f09c7%3A0xb8999e85b0de7694!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1643036565732!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    contactContent.appendChild(locationMap);

    return contactContent;
}
const contentContainer = document.createElement('div');
contentContainer.style.position = 'fixed'
contentContainer.style.width = "50vw";
contentContainer.style.height = "80vh";
contentContainer.style.backgroundColor = 'hsla(0, 0%, 0%, 0.5)';
contentContainer.style.color = '#a6c0fe';
const menuButton = document.getElementById('menu');
const infoButton = document.getElementById('info');
const contactButton = document.getElementById('contact');
let firstTime = false;
const moveElements = [menuButton,infoButton,contactButton]
menuButton.addEventListener('click', () => {
    handleButtonClick('menu')
})
infoButton.addEventListener('click', () => {
    handleButtonClick('info')
})
contactButton.addEventListener('click', () => {
    handleButtonClick('contact')
})

function handleButtonClick(buttonType) {
    if (!firstTime) {
        moveElements.forEach((button) => {
            button.style.position = 'relative';
            button.style.bottom = '450px';
            button.style.transition = 'top 0.3s ease-in-out';
            button.style.margin = '100px';
            firstTime = true;
        });

        middleContainer.appendChild(contentContainer);
    }
    contentContainer.innerHTML = '';
    switch (buttonType) {
        case 'menu':
            contentContainer.appendChild(createMenuContent());
            break;
        case 'info':
            contentContainer.appendChild(createInfoContent());
            break;
        case 'contact':
            contentContainer.appendChild(createContactContent());
            break;
        default:
            console.log("Unknown buttonType");
            break;
    }
}