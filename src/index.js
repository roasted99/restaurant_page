import { homePage } from "./home.js";
import { menu } from "./menu";
import { contact } from "./contact.js";
import './style.css';

const contentBox = document.querySelector('#content');

//create tabs

const tabs = document.createElement('div');

const homeTab = document.createElement('button');
homeTab.classList.add('tablink');
homeTab.setAttribute('data-for-tab', '1');
homeTab.textContent = 'Home';

const menuTab = document.createElement('button');
menuTab.classList.add('tablink');
menuTab.setAttribute('data-for-tab', '2');
menuTab.textContent = 'Menu';

const contactUsTab = document.createElement('button');
contactUsTab.classList.add('tablink');
contactUsTab.setAttribute('data-for-tab', '3');
contactUsTab.textContent = 'Contact Us';

tabs.append(homeTab, menuTab, contactUsTab);
contentBox.appendChild(tabs);

//Tab Content
const content = document.createElement('div');
content.classList.add('content');
const homeContent = document.createElement('div');
homeContent.classList.add('tab-content');
homeContent.classList.add('activate')
homeContent.setAttribute('data-tab', '1');
homeContent.appendChild(homePage().div);

const menuContent = document.createElement('div');
menuContent.classList.add('tab-content');
menuContent.setAttribute('data-tab', '2');
menuContent.appendChild(menu().menuItem)

const contactUsContent = document.createElement('div');
contactUsContent.classList.add('tab-content');
contactUsContent.setAttribute('data-tab', '3');
contactUsContent.appendChild(contact().header);

content.append(homeContent, menuContent, contactUsContent);
contentBox.appendChild(content);

//Event Listeners for Tabs
function setUpTabs() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {

            const tabContent = document.querySelectorAll('.tab-content');
            const tabButtons = document.querySelectorAll('.tablink');
            const tabNumber = button.dataset.forTab;
            const tabActivate = contentBox.querySelector(`[data-tab="${tabNumber}"]`);

            tabButtons.forEach(btn => btn.classList.remove('activate'));
            tabContent.forEach(tab => tab.classList.remove('activate'));

            button.classList.add('activate');
            tabActivate.classList.add('activate');

        })
    })
}
//setUpTabs()

document.addEventListener('DOMContentLoaded', () => setUpTabs());
