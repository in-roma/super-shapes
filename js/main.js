/* 1st Column  */
/* Top frame */
const movingRightToLeft = anime({
	targets: '.conveyor',
	translateX: '-50%',
	loop: true,
	duration: 2000,
	easing: 'linear',
});
// Middle Frame
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

/* 2nd Column  */
/* Bottom frame */
const scaling = anime({
	targets: '#tunnel circle',
	scale: 1.1,
	direction: 'alternate',
	loop: true,
	duration: 450,
	easing: 'easeInOutSine',
	delay: (el, i) => i * 100,
});

/* 3rd Column  */
/* Top frame */

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
