const randomColor = () => {
	const val = '0123456789ABCDEF';
	let hash = '#';
	for (let i = 0; i <= 5; i++) {
		hash = hash + val[Math.floor(Math.random() * 16)];
	}
	return hash;
};

const body = document.querySelector('body');

body.addEventListener('click', (axis) => {
	//Creating new div inside of the body
	const element = document.createElement('div');

	//Adding a new class to the newly created div
	element.classList.add('dots');

	//adding style to the element so that the newly dynamically created dots (divs) will be created at the axis of our cursor pointer.
	element.style.left = `${axis.x - 5}px`;
	element.style.top = `${axis.y - 5}px`;

	//adding the child div inside of the body
	body.appendChild(element);

	//generating random color and assigning the value to the child div (dot) background.
	element.style.backgroundColor = randomColor();
});
