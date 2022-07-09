'use strict';
let header = document.querySelector('.header');
let showButton = header.querySelector('.header__show');
let title = header.querySelector('.header__title');
let about = header.querySelector('.header__about-me');
let info = header.querySelector('.header__info');
let ava = header.querySelector('.avatar');
let main = header.querySelector('.header__main');
let intro = header.querySelector('.header__intro');

let arr = [];
arr.push(about, info);

function hideNav() {
	for (let el of arr) {
		if (el != null &&
		window.innerWidth >= 900) {
			el.classList.remove('visually-hidden');
		}
	}
}

function hideNavOnStart() {
	for (let el of arr) {
		if (el != null &&
		window.innerWidth < 900) {
			el.classList.add('visually-hidden');
		}
		if (el != null &&
		window.innerWidth >= 900) {
			el.classList.remove('visually-hidden');
		}
	}
}

hideNavOnStart();
window.addEventListener('resize', hideNav);

showButton.addEventListener('click', showPopup);
showButton.addEventListener('click', changeStyle);

function showPopup() {
	for (let el of arr) {
		if (el != null &&
			el != title) {
			el.classList.toggle('visually-hidden');
		}
	}
}

function changeStyle() {
	main.classList.toggle('header__main_visible');
	intro.classList.toggle('header__intro_visible');
	// header.classList.toggle('header_no-wrap');
	showButton.classList.toggle('header__show_close');
}