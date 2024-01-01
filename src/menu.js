import middleCenteredBox from "./index.js";

export default function createMenu(){
    const menu = document.createElement('div');
    menu.style.margin = "150px";
    menu.setAttribute('id','menu');
    const a = document.createElement('a');
    a.textContent = "MENU";
    a.style.textDecoration = 'none';
    menu.appendChild(a);
    middleCenteredBox.appendChild(menu);
}
