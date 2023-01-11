 function answerQuestion() {
      // Generate a random number between 0 and 7
      var randomNumber = Math.floor(Math.random() * 8);
      
      // Use the random number to choose a response from the 8-ball
      var response;
      switch (randomNumber) {
        case 0:
          response = "ITS scertain! 100%precen";
          break;
        case 1:
          response = "i guess";
          break;
        case 2:
          response = "no doub abouit (im 8bal)";
          break;
        case 3:
          response = "idk";
          break;
        case 4:
          response = "huh";
          break;
        case 5:
          response = "stupid question.";
          break;
        case 6:
          response = "no";
          break;
        case 7:
          response = "ok (im 8 ball)";
          break;
        default:
          response = "bitch";
      }
      
      // Set the answer text to the 8-ball's response
      document.getElementById("answer").innerHTML = response;
    }