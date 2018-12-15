var Play = function () {
	var liAlives = Board.getCells();
	Board.updateCells(liAlives)
}

var init = function () {
	Game.init();
	Game.start();
	Modal.begin();
}

window.onload = init;
