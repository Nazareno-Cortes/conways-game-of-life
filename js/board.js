var Board = {
	rows: 5,
	columns: 5,

	getBoard: function () {
		return document.getElementsByClassName('board')[0];
	},

	getCells: function () {
		var board = Board.getBoard();
		return board.getElementsByTagName('li');
	},

	getliAlivesCells: function () {
		return document.getElementsByClassName('alive');
	},

	createCells: function () {
		var board = Board.getBoard();
		var html = '';
		var cellCount = Board.rows * Board.columns;
		for (var i = 0; i < cellCount; i++) {
			html = html + '<li></li>';
		}
		board.innerHTML = html;
	},

	updateCells: function (boardJS) {
		var board = Board.getBoard();
		var html = '';
		for (var i = 0; i < Board.rows; i++) {
		 for (var j = 0; j < Board.columns; j++){
			if(boardJS[i][j]){
		 		html = html + '<li class="alive"> </li>';
		 	} // end of if
		 	else{
		 		html = html + '<li></li>';
		 	}
		 } // end of for columns
		} // end of for rows
		board.innerHTML = html;
	},

	nextStep: function () {
		var boardHTML = Board.getCells();
		var currentBoard = GameOfLife.getBoardFromHTML(boardHTML, Board.columns);
		var newBoard = GameOfLife.createEmptyBoard(Board.rows, Board.columns);
		GameOfLife.getNextStep(currentBoard, newBoard);
		Board.updateCells(newBoard);
	}, // end to nextStep

	reset: function() {
	    Board.createCells();
	    Game.play.innerHTML = 'Stop'; // the play button changes to the stop button
	    Game.update();
	    Game.start();
    }, // end of reset

    dynamicBoard: function() {
        var board = Board.getBoard();
        var calculo = Board.rows * 26;
        board.style.height = calculo + 'px';
        board.style.width = calculo + 'px';
 }
}
