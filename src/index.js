import { homePage } from "./home.js";

const content = document.querySelector('#content');
console.log(content)
content.appendChild(homePage().div);
