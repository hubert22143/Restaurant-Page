import middleCenteredBox from "./index.js";
export default function createContact(){
    const contact = document.createElement('div');
    contact.style.margin = "150px";
    contact.setAttribute('id','contact');
    const a = document.createElement('a');
    a.textContent = "CONTACT";
    contact.appendChild(a);
    middleCenteredBox.appendChild(contact);
}