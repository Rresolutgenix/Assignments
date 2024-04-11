// This function will be called when the button is clicked
function playCraps() {
    // Generate random numbers for the dice (between 1 and 6)
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
  
    // Calculate the sum
    let sum = die1 + die2;
  
    // Update the game output with clear messages
    let output = "";
    output += "You rolled a " + die1 + " and a " + die2 + " (Sum = " + sum + ")<br>";  // "<br>" for line break
  
    if (sum === 7 || sum === 11) {
      output += "CRAPS! You lose.";
    } else if (die1 === die2 && die1 % 2 === 0) {
      output += "You won!";
    } else {
      output += "You pushed (no win or lose).";
    }
  
    // Display the output on the webpage
    document.getElementById("gameOutput").innerHTML = output;
  }
  
  // Button click event listener - This makes the button call the playCraps function
  document.getElementById("playButton").addEventListener("click", playCraps);
  