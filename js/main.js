/* Duplicate function */
const duplicateHtml = (element, quantity) => {
	const elementsArr = new Array(quantity).fill(element.innerHTML).join('');
	element.innerHTML = elementsArr;
};

/* 1st Column */

// Animation moving rectangles
const movingRightToLeft = anime({
	targets: '.conveyor',
	translateX: '-50%',
	loop: true,
	duration: 3000,
	easing: 'linear',
});

// Animation waves
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

// Animation crosses
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

// Animation squares
duplicateHtml(document.querySelector('#dots'), 40);
const allDots = document.querySelectorAll('#dots .dot');
allDots.forEach((dot) => {
	anime({
		targets: dot,
		rotate: (el, i) => anime.random(90, 360),
		duration: (el, i) => anime.random(250, 750),
		loop: true,
		direction: 'alternate',
		easing: 'easeInOutSine',
	});
});

// Animation circles
anime({
	targets: '#tunnel circle',
	scale: 1.2,
	direction: 'alternate',
	loop: true,
	duration: 500,
	easing: 'easeInOutSine',
	delay: (el, i) => i * 100,
});

/* 3rd Column */

// Animation Zizag
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

// Animation Flashes
anime({
	targets: '#flashes .flash',
	backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
	delay: (el, i) => anime.random(50, 100),
	duration: 400,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});

// Animation dots
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

// Animation squares
duplicateHtml(document.querySelector('#squares'), 20);
const squares = document.querySelectorAll('#squares .square');
anime({
	targets: squares,
	scale: [0, 1.2],
	delay: (el, i) => i * 100,
	duration: 250,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine',
});
