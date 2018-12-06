var Game = {
	next: null,
	play: null,
	board: null,
	cells: null,
	interval: null,
	reset: null,
	init: function () {
		Board.createCells();
		Game.Board = Board.getBoard();
		Game.cells = Board.getCells();
		Game.next = document.getElementById('next');
		Game.play = document.getElementById('play');
	  Game.reset = document.getElementById('reset');
	},

	start: function () {
		for (var i = 0; i < Game.cells.length; i++){
			Game.cells[i].onclick = Cell.toggle;
		}
		Game.next.onclick = Board.nextStep;
		Game.play.onclick = Game.update;
		Game.reset.onclick = Board.reset;
	},

	update: function () {
		if (Game.play.innerHTML === 'Play') {
	       Game.interval = setInterval(Board.nextStep, 500);
	       Game.play.innerHTML = 'Stop';
				 Game.next.disabled = true;
	     }
			 else {
	       clearInterval(Game.interval);
	       Game.play.innerHTML = 'Play';
				 Game.next.disabled = false;
	     }
	}
};
