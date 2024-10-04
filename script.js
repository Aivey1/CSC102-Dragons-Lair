// Function to enable/disable the Start button
function startImageMovement() {
    // Disable the Start button
    document.getElementById("start-button").disabled = true;
    // Enable the Stop button
    document.getElementById("stop-button").disabled = false;
    // Call the function to move the meme image
    moveImage();
  }
  
  // Function to enable/disable the Stop button
  function stopImageMovement() {
    // Disable the Stop button
    document.getElementById("stop-button").disabled = true;
    // Enable the Start button
    document.getElementById("start-button").disabled = false;
    // Call the function to stop moving the meme image
    stopImage();
  }
  
  // Function to move the meme image
  function moveImage() {
    // Get the meme image element
    var memeImage = document.getElementById("meme-image");
    // Set the initial position of the image
    var x = 0;
    var y = 0;
    // Set the movement interval
    var interval = setInterval(function() {
      // Move the image to a new position
      x += 10;
      y += 10;
      memeImage.style.top = y + "px";
      memeImage.style.left = x + "px";
      // Check if the image has reached the edge of the screen
      if (x > window.innerWidth || y > window.innerHeight) {
        // Stop the movement
        clearInterval(interval);
      }
    }, 100);
  }
  
  // Function to stop moving the meme image
  function stopImage() {
    // Get the meme image element
    var memeImage = document.getElementById("meme-image");
    // Stop the movement by clearing the interval
    clearInterval(memeImage.interval);
  }