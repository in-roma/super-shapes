const duplicateHtml = (element, quantity) => {
	const elementsArr = new Array(quantity).fill(element.innerHTML).join('');
	element.innerHTML = elementsArr;
};

/* 1st Column */

const movingRightToLeft = anime({
	targets: '.conveyor',
	translateX: '-50%',
	loop: true,
	duration: 2000,
	easing: 'linear',
});

const wavePath = document.querySelector('#wave path');
const waveOffSet = anime.setDashoffset(wavePath);

wavePath.setAttribute('stroke-dashoffset', waveOffSet);
anime({
	targets: wavePath,
	strokeDashoffset: [0, waveOffSet],
	duration: 2000,
	delay: anime.random(0, 500),
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});

duplicateHtml(document.querySelector('#crosses'), 10);

anime({
	targets: '#crosses path',
	rotate: '1turn',
	duration: 2000,
	delay: (el, i) => i * 100,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});

/* 2nd Column  */

duplicateHtml(document.querySelector('#dots'), 40);
const allDots = document.querySelectorAll('#allDots .dot');
allDots.forEach((dot) => {
	anime({
		targets: dot,
		rotate: (el, i) => anime.random(90, 360),
		duration: (el, i) => anime.random(250, 550),
		loop: true,
		autoplay: true,
		direction: 'alternate',
		easing: 'easeInOutSine',
	});
});

const scaling = anime({
	targets: '#tunnel circle',
	scale: 1.1,
	direction: 'alternate',
	loop: true,
	duration: 450,
	easing: 'easeInOutSine',
	delay: (el, i) => i * 100,
});

/* 3rd Column */

const pathEl = document.querySelector('#zigzag path');
const offset = anime.setDashoffset(pathEl);

pathEl.setAttribute('stroke-dashoffset', offset);
anime({
	targets: pathEl,
	strokeDashoffset: [offset, 0],
	duration: 3000,
	delay: anime.random(0, 500),
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
	autoplay: true,
});

anime({
	targets: '#flashes .flash',
	backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
	delay: (el, i) => anime.random(50, 100),
	duration: 400,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});

duplicateHtml(document.querySelector('#circles'), 20);
const circles = document.querySelectorAll('#circles .dot');

anime({
	targets: circles,
	scale: [0, 1.2],
	delay: (el, i) => i * 100,
	duration: 250,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});

anime({
	targets: '#squares rect',
	translateX: ['-50%', '-50%'],
	translateY: ['-50%', '-50%'],
	rotate: [45, 0, -45],
	delay: (el, i) => i * 100,
	duration: 800,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});
