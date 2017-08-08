let dragStart = false;
let originX = null;
let offsetX = 0;
let offsetY = 0;

function onDragStart(event){
	event.preventDefault();
	originX = event.clientX;
	originY = event.clientY;
	dragStart = true;
}
function onDragMove(event){
	if(!dragStart){
		return;
	}
	const currentX = event.clientX;
	const deltaX = currentX-originX;
	const translateX = offsetX + deltaX;
	const currentY = event.clientY;
	const deltaY = currentY-originY;
	const translateY = offsetY + deltaY;
	event.currentTarget.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
}
function onDragEnd(event){
	offsetX += event.clientX-originX;
	offsetY += event.clientY-originY;
	dragStart = false;
}

const penny = document.querySelector('#penny');
penny.addEventListener('pointerdown', onDragStart);
penny.addEventListener('pointermove', onDragMove);
penny.addEventListener('pointerup', onDragEnd);
