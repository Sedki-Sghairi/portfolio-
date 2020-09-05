const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

const subtitle = document.querySelector('.subtitle');
const strText = subtitle.textContent;
const splitText = strText.split('');
subtitle.textContent = '';
for (let i = 0; i < splitText.length; i++) {
	subtitle.innerHTML += '<span>' + splitText[i] + '</span>';
}
let timer = setInterval(tick, 100);
let c = 0;
function tick() {
	let x = '#';
	for (let i = 0; i < 6; i++) {
		let a = Math.floor(Math.random() * 16);
		x += `${hex[a]}`;
	}
	const span = subtitle.querySelectorAll('span')[c];
	span.classList.add('magic');
	span.style.color = x;
	c++;
	if (c === splitText.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}

// ********** scroll ************

const date = document.getElementById('date');
date.innerHTML = new Date();

const linksContainer = document.querySelector('.links-container');
const Btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

Btn.addEventListener('click', function() {
	const ContainerHeight = linksContainer.getBoundingClientRect().height;
	const linksheight = links.getBoundingClientRect().height;
	if (ContainerHeight === 0) {
		linksContainer.style.height = `${linksheight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

const pop = document.querySelectorAll('.pop');
let levels = [];
pop.forEach((e) => {
	levels.push(e.offsetTop);
});
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const titleBox = document.getElementById('titleBox');
window.addEventListener('scroll', function() {
	let navBarHeight = navbar.getBoundingClientRect().height;
	let scrollHeight = window.pageYOffset;
	for (let i = 0; i < pop.length; i++) {
		if (levels[i] - 450 <= scrollHeight) {
			pop[i].classList.add('appear');
		} else {
			pop[i].classList.remove('appear');
		}
	}
	if (navBarHeight < scrollHeight) {
		navbar.classList.add('fixed-nav');
		titleBox.classList.add('disappear');
	} else {
		navbar.classList.remove('fixed-nav');
		titleBox.classList.remove('disappear');
	}

	if (900 < scrollHeight) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});

const scrolLinks = document.querySelectorAll('.scroll-link');
scrolLinks.forEach((link) => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);
		//calculate heights
		const navheight = navbar.getBoundingClientRect().height;
		const ContainerHeight = linksContainer.getBoundingClientRect().height;
		const checkFixNav = navbar.classList.contains('fixed-nav');
		let position = element.offsetTop - navheight;
		if (!checkFixNav) {
			position = position - navheight;
		}
		if (navheight > 82) {
			position = position + ContainerHeight;
		}
		window.scrollTo({
			left: 0,
			top: position
		});
		linksContainer.style.height = 0;
	});
});
/*
=========
 reviews
=========
*/
const reviews = [
	{
		id: 1,
		name: 'wajdi zorgui',
		job: 'plc developer',
		img: 'images/wajdi.PNG',
		text:
			'Working with Sedki is both fun and inspiring, he loves programming and he understands computers at a fundamental level, and that makes him in my opinion one of the best web developers out there.'
	},
	{
		id: 2,
		name: 'foued kamel',
		job: 'avionav ceo',
		img: 'images/foued.jfif',
		text: 'Sedki is smart and driven, and I highly recommend working with him'
	},
	{
		id: 3,
		name: 'darina bohacova',
		job: 'business owner',
		img: 'images/darina.jpg',
		text: 'If I need a wep related work, I just call Sedki. He always exceeds my expectation!'
	},
	{
		id: 4,
		name: 'soufien ghali',
		job: 'ux designer',
		img: 'images/soufien.JPG',
		text: 'Great designs, great talent, clean code! I highly recommend.'
	}
];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
});

function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}
nextBtn.addEventListener('click', function() {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});
prevBtn.addEventListener('click', function() {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});
