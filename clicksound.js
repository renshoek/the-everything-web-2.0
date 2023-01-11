      const sounds = [
          'sound/arcade.wav',
          'sound/mystery.wav',
          'sound/win.wav',
          'sound/vigam.wav',
          'sound/sneeze.wav',
          'sound/inter.wav',
          'sound/suprise.mp3',
          'sound/zoop.mp3',
          'sound/hammer.mp3',
          'sound/whistle.wav',
          'sound/honk.wav',
          'sound/honk2.wav',
          'sound/squeek.wav',
          'sound/bok.mp3',
        'sound/cuban.mp3',

      ];

      // 2. Attach an event listener to the document object
      document.addEventListener('click', playRandomSound);

      // 3. Define the event listener callback function
      function playRandomSound() {
          // Generate a random index between 0 and the length of the sounds array
          const randomIndex = Math.floor(Math.random() * sounds.length);

          // Create a new Audio object and set its src to the sound at the random index
          const audio = new Audio(sounds[randomIndex]);

          // Start playing the sound
          audio.play();
      }
