// src/index.js
import './styles.css';
import { contentMenu } from './menu.js';
import { contentHome } from './home.js';
import { contentAbout } from './about.js';

const mainContent = document.querySelector('.content');

const homeContent = contentHome();
const menuContent = contentMenu();
const aboutContent = contentAbout();
mainContent.append(homeContent);

// Home section
const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
	mainContent.textContent = '';
	mainContent.append(homeContent);
});

// Menu section
const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
	mainContent.textContent = '';
	mainContent.append(menuContent);
});

// About section
const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click', () => {
	mainContent.textContent = '';
	mainContent.append(aboutContent);
});
