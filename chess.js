const boardCanvas = document.getElementById('boardCanvas');
const board = boardCanvas.getContext('2d');
const pieceCanvas = document.getElementById('pieceCanvas');
const pieces = pieceCanvas.getContext('2d');

const squareDim = boardCanvas.width / 8;
const darkSquare = 'lightgreen';
const lightSquare = 'hotpink';
const darkPiece = 'white';
const lightPiece = 'white';
const pieceVerticalOffset = 23;
pieces.lineWidth = 2;
pieces.font = `${squareDim}px Arial`;
pieces.textAlign = '';
let boardState = [
	['br', 'bp', '', '', '', '', 'wp', 'wr'],
	['bk', 'bp', '', '', '', '', 'wp', 'wk'],
	['bb', 'bp', '', '', '', '', 'wp', 'wb'],
	['bq', 'bp', '', '', '', '', 'wp', 'wq'],
	['bK', 'bp', '', '', '', '', 'wp', 'wK'],
	['bb', 'bp', '', '', '', '', 'wp', 'wb'],
	['bk', 'bp', '', '', '', '', 'wp', 'wk'],
	['br', 'bp', '', '', '', '', 'wp', 'wr'],
]
let lastPosX = 0;
let lastPosY = 0;
let pickupOffsetX = 0;
let pickupOffsetY = 0;
let holding = '';

// Draw board
function init() {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (i % 2 == j % 2) {
				board.fillStyle = lightSquare;
			} else {
				board.fillStyle = darkSquare;
			}
			let x = i*squareDim;
			let y = j*squareDim;
			board.fillRect(x, y, squareDim, squareDim);
		}
	}
}

function drawPieces() {
	pieces.clearRect(0, 0, pieceCanvas.width, pieceCanvas.height);
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			let x = i*squareDim;
			let y = j*squareDim;
			drawPiece(boardState[i][j], 
					  x + squareDim/2, 
					  y + squareDim - pieceVerticalOffset);
		}
	}
}

function drawPiece(str, x, y) {
	if (str[0] == 'b') {
		pieces.fillStyle = darkPiece;
	} else {
		pieces.fillStyle = lightPiece;
	}
	let chessPiece = "";
	switch (str[1]) {
		case 'p': chessPiece = '\u265f'; break;
		case 'r': chessPiece = '\u265c'; break;
		case 'k': chessPiece = '\u265e'; break;
		case 'b': chessPiece = '\u265d'; break;
		case 'q': chessPiece = '\u265b'; break;
		case 'K': chessPiece = '\u265a'; break;
		default: break;
	}
	pieces.fillText(chessPiece, x, y);
	pieces.strokeText(chessPiece, x, y);
}

pieceCanvas.addEventListener('mousedown', e => {
	e.preventDefault();
	let x = Math.floor(e.offsetX/squareDim);
	let y = Math.floor(e.offsetY/squareDim);
	lastPosX = x;
	lastPosY = y;
	pickupOffsetX = e.offsetX % 100 - 50;
	pickupOffsetY = e.offsetY % 100 - 50;
	[holding, boardState[x][y]] = [boardState[x][y], ''];
});

pieceCanvas.addEventListener('mouseup', e => {
	if (holding != '') {
		let x = Math.floor((e.offsetX - pickupOffsetX)/squareDim);
		let y = Math.floor((e.offsetY - pickupOffsetY)/squareDim);
		if (boardState[x][y][0] != holding[0]) {
			boardState[x][y] = '';
		}
		if (boardState[x][y][0] == holding[0]) {
			[holding, boardState[lastPosX][lastPosY]] = ['', holding];
		} else {
			[holding, boardState[x][y]] = ['', holding];
		}
		drawPieces();
	}
});

pieceCanvas.addEventListener('mousemove', e => {
	if (holding != '') {
		drawPieces();
		drawPiece(holding, 
				  e.offsetX - pickupOffsetX, 
				  e.offsetY - pickupOffsetY + squareDim/2 - pieceVerticalOffset);
	}
})

pieceCanvas.addEventListener('mouseleave', e => {
	if (holding != '') {
		[holding, boardState[lastPosX][lastPosY]] = ['', holding];
		drawPieces();
	}
})

document.getElementById('reset').addEventListener('click', e => {
	boardState = [
		['br', 'bp', '', '', '', '', 'wp', 'wr'],
		['bk', 'bp', '', '', '', '', 'wp', 'wk'],
		['bb', 'bp', '', '', '', '', 'wp', 'wb'],
		['bq', 'bp', '', '', '', '', 'wp', 'wq'],
		['bK', 'bp', '', '', '', '', 'wp', 'wK'],
		['bb', 'bp', '', '', '', '', 'wp', 'wb'],
		['bk', 'bp', '', '', '', '', 'wp', 'wk'],
		['br', 'bp', '', '', '', '', 'wp', 'wr'],
	]
	drawPieces();
})

init();
drawPieces();