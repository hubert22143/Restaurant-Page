import middleCenteredBox from "./index.js";

export default function createInfo(){
    const info = document.createElement('div');
    info.style.margin = "150px";
    info.setAttribute('id','info');
    const a = document.createElement('a');
    a.style.textDecoration = "none";
    a.textContent = "INFO";
    info.appendChild(a);
    middleCenteredBox.appendChild(info);
}