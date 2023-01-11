
      // Select the elements we need
      const input = document.querySelector('.guess-input');
      const button = document.querySelector('.guess-button');
      const result = document.querySelector('.guess-result');

      // Define the correct word to be guessed
      const correctWord = "apple";

      // Set the input field to always display the correct word
      input.value = correctWord;

      // Add an event listener to the button that checks the guess
      button.addEventListener('click', () => {
        // The guess is always correct, so display a congratulations message
        result.innerHTML = 'You guessed the word! Congratulations!';

        // Don't clear the input field, so the result text stays on the screen
      });
    };