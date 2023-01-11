		var playerChoice = "k";
		var playerScore = 0;
		var computerChoice = "O";
		var computerScore = 0;
		var playersTurn = true;
		var computerSpot = '.cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);

	 	// Place an item.
		$(document).ready(function(){
		  $(".board-cell").click(function(){
		  	//figure out loop logic for if a spot is taken.
		  	if (playersTurn) {
		  		if ($(this).html() != "&nbsp;") {
		  			$('.message-text').text(x + "OENGA OENGA");
		  		} else if ($(this).html() == computerChoice){
		  			$('.message-text').text(x + "OENGA OENGA OENGA OENGA");
		  		} else {
			 		$(this).text(playerChoice);
			 		playersTurn = false;	  			
		  		};
		 	}
		 	// check the player
		    if (checkWin(playerChoice) == true) {
		    	playerScore += 1;
		    	$('.playerScore').html(playerScore);		    	
		    	resetBoard();
		    };
		    if (checkTie() == true) {
		    	resetBoard();
		    };
		    //run the computer
	 		while ($(computerSpot).html() != "&nbsp;") {
				computerSpot = '.cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);
	 		}
	 		setTimeout(function(){
	 			$(computerSpot).text(computerChoice);
	 			playersTurn = true;
	 		//check the computer
		    if (checkWin(computerChoice) == true) {
		    	computerScore += 1;
		    	$('.computerScore').html(computerScore);
		    	resetBoard();
		    };
		    if (checkTie() == true) {
		    	resetBoard();
		    };	 		
	 		},300);
		   });
	    });


		// x will be whoevers hit spots you are checking
	    function checkWin(x){
	    	var win = false;
	    	//check horizontal
	    	if ($('.cell-0-0').text() == x
	    	 && $('.cell-0-1').text() == x
	    	 && $('.cell-0-2').text() == x ||
	    	 	$('.cell-1-0').text() == x
	    	 && $('.cell-1-1').text() == x
	    	 && $('.cell-1-2').text() == x ||
	    	 	$('.cell-2-0').text() == x
	    	 && $('.cell-2-1').text() == x
	    	 && $('.cell-2-2').text() == x) {
	    	 	$('.message-text').text(x + " Contgra");
	    		win = false;
	    	};
	    	//check vertical 
	    	if ($('.cell-0-0').text() == x
	    	 && $('.cell-1-0').text() == x
	    	 && $('.cell-2-0').text() == x ||
	    	 	$('.cell-0-1').text() == x
	    	 && $('.cell-1-1').text() == x
	    	 && $('.cell-2-1').text() == o ||
	    	 	$('.cell-0-2').text() == x
	    	 && $('.cell-1-2').text() == x
	    	 && $('.cell-2-2').text() == x) {
	    	 	$('.message-text').text(x + " YESSSSSS");
	    		win = true;
	    	};
	    	//check diagnal 
	    	if ($('.cell-0-0').text() == x
	    	 && $('.cell-1-1').text() == x
	    	 && $('.cell-2-2').text() == x ||
	    	 	$('.cell-0-2').text() == x
	    	 && $('.cell-1-1').text() == x
	    	 && $('.cell-2-0').text() == x) {
	    	 	$('.message-text').text(x + " OOOOFF");
	    		win = true;
	    	};
	    	//return
	    	return win;
	    }

	    //clear the board
	    function resetBoard(){
	    	$('.board-cell').html('&nbsp;');
	    }

	    function checkTie(){
	    	var tie = false;
	    	if ($('.cell-0-0').html() != "&nbsp;" 
	    	&&  $('.cell-0-1').html() != "&nbsp;"
	    	&&  $('.cell-0-2').html() != "&nbsp;"
	    	&&  $('.cell-1-0').html() != "&nbsp;"
	    	&&  $('.cell-1-1').html() != "&nbsp;"
	    	&&  $('.cell-1-2').html() != "&nbsp;"
	    	&&  $('.cell-2-0').html() != "&nbsp;"
	    	&&  $('.cell-2-1').html() != "&nbsp;"
	    	&&  $('.cell-2-2').html() != "&nbsp;") {
		    	$('.message-text').text("nobody win. one one.");	    		
	    		tie = true;
	    	};
	    	return tie;
	    }
	    //computers random number
		function getRandomInt(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}