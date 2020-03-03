const doc = document;

const canvas = doc.querySelector ('#canv');
const ctx = canvas.getContext ('2d');

var system = {
	width: canvas.getAttribute ('width'),
	height: canvas.getAttribute ('height'),
	currentTool: '',
	currentColor: 'black' ,
	brushSize: 5
}

function reRenderSys (obj, elem, action) {
	obj[elem] = action;
	console.log (obj)
}

function getCoords (evt) {
	let coors = {};
	let x = evt.offsetX;
	let y = evt.offsetY;

	doc.querySelector ('#xCoord').innerText = x;
	doc.querySelector ('#yCoord').innerText = y;
}

canvas.addEventListener ('mousemove', getCoords);

function switchTool(button) {
	return button.id
}

function switchSize(button) {
	return doc.querySelector ('#size-select').value
}

function switchColor(button) {
	return doc.querySelector ('#color').value
}

function mouseActions (evt) {
	if (evt.target.classList.contains ('tool-button')) {
		reRenderSys (system, 'currentTool', switchTool(evt.target))
		console.log ('some tool')
	} else if (evt.target.id === 'size-select') {
		reRenderSys (system, 'brushSize', switchSize(evt.target))
		console.log ('size selected')
	} 
}

function startDraw (evt) {
	if (system.currentTool === 'brush'){
		drawLines (evt);
		system.currentColor = doc.querySelector ('#color').value;

	} else if (system.currentTool === 'clen') {
		system.currentColor = '#ffffff';
		drawLines (evt);
	} else if (system.currentTool === 'no-pryam'){
		drawLines (evt);
		system.currentColor = doc.querySelector ('#color').value;
	} else if (system.currentTool === 'pryam'){
		drawLines (evt);
		system.currentColor = doc.querySelector ('#color').value;
	} else if (system.currentTool === 'line') {
		drawLines (evt);
		system.currentColor = doc.querySelector ('#color').value;
	} else if (system.currentTool === 'krug') {
		drawLines (evt);
		system.currentColor = doc.querySelector ('#color').value;
	}
}

function endDraw () {
	canvas.onmousemove = null
}

function drawLines (evt) {
	canvas.onmousemove = (evt) => {
		ctx.beginPath ()
		ctx.fillStyle = system.currentColor
		if (system.currentTool === 'no-pryam'){
			ctx.strokeStyle = system.currentColor;
			ctx.stroke();
			ctx.strokeRect(doc.querySelector ('#xCoord').innerText, doc.querySelector ('#yCoord').innerText, system.brushSize*2, system.brushSize)

		}   else if (system.currentTool === 'pryam'){

			ctx.fillRect(doc.querySelector ('#xCoord').innerText, doc.querySelector ('#yCoord').innerText, system.brushSize*2, system.brushSize)

		} else if (system.currentTool === 'line') {
			let v = doc.querySelector('#xCoord').innerText;
			let d = doc.querySelector('#yCoord').innerText;
			ctx.beginPath();
			ctx.fill(); // *14
			ctx.moveTo(v, d);
			ctx.lineTo(v-=20, d-=100);
			ctx.lineTo(v+=40, d+=60);
			ctx.lineTo(v+=20, d-=80);
			ctx.lineTo(v+=20, d+=80);
			ctx.lineTo(v+=40, d-=60);
			ctx.lineTo(v-=20, d+=100);
			ctx.lineTo(v-=80, d);
			ctx.strokeStyle = system.currentColor;
			ctx.stroke();
		}else if (system.currentTool === 'krug') {
			let v = doc.querySelector('#xCoord').innerText;
			let d = doc.querySelector('#yCoord').innerText;
			ctx.beginPath();
			ctx.arc(v, d, system.brushSize, 0 * Math.PI, 2 * Math.PI, true);
			ctx.fill();
			ctx.strokeStyle = system.currentColor;
			ctx.stroke();
		}
		else {
			ctx.fillRect(doc.querySelector('#xCoord').innerText, doc.querySelector('#yCoord').innerText, system.brushSize, system.brushSize)
		}
	}
}


doc.addEventListener ('click', mouseActions);

doc.querySelector('#color').addEventListener ('input', (evt) => {
	reRenderSys (system, 'currentColor', switchColor(evt.target))
});

canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);
