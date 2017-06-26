// this array sets the starting colors and number of buttons
var colorArray = ['red', 'green', 'yellow', 'blue', 'aqua', 'magenta', 'pink', 'white', 'purple', 'orange', 'gray', 'brown', 'black', 'turquoise'];
var randomColor = '';
var numberOfColors = 6;

$(document).ready(function () {

  addBlocksToPage();  // calling this function on page load adds blocks to the page

  // this is the primary game logic.  It gets the data from the clicked color button, which stores the color name, and compares that to the color prompted.
  $('#colorBlockContainer').on('click', '.colorBlock', function () {

    var colorOfBlockSelected = $(this).data().colorOfBlock;

    var $this = $(this); // stores the contents of $(this) into the variable $this, so that I can use it in the setTimeout method

    $(this).css('background-color', '#836A65'); // highlights the block when clicked

    setTimeout(function () {
      $this.css('background-color', colorOfBlockSelected); // changes the color back to the original color after 1 second
    }, 1000);

    $(this).animate({ height: '600px', width: '400px' }, 200); // expands the block on click

    $(this).animate({ height: '120px', width: '120px' }, 200); // immediately contracts the block back to original size

    $('#colorChosen').text(colorOfBlockSelected); // gets the name of the color chosen and displays that name in the #colorChosen h2

    if (randomColor == colorOfBlockSelected) { // compares the color of block selected to the name of the randomColor that was displayed in the #userColorPrompt h2
      $('#answerText').text("That's the correct color!  Nice work!! Pick another color..."); // success message
      chooseNewRandomColor();
    } else {
      $('#answerText').text('Sorry, that is not the correct color.  Try again.'); // error message
    };
  });

  // this operates the adding of new color buttons, which are all stored in the colorArray
  $('#addColorButton').on('click', function () {
    numberOfColors++;
    addBlocksToPage();
  });

  // this operates the removal of color buttons
  $('#removeColorButton').on('click', function () {
    numberOfColors--;
    addBlocksToPage();
  });
});

// this is the code that runs the color prompt. It runs every time.
chooseNewRandomColor();

// this function is used to pick a random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// this function uses randomNumber function to select a random color
function chooseNewRandomColor() {
  var randomNumberSelected = randomNumber(0, numberOfColors - 1);
  randomColor = colorArray[randomNumberSelected];
  $('#userColorPrompt').text(randomColor);
}

// this function adds color blocks to the page on page load
function addBlocksToPage() {
  // this empties colors from the page first
  $('#colorBlockContainer').empty();

  // this appends the buttons on DOM load based on the colorArray
  for (var i = 0; i < numberOfColors; i++) {
    var newColorBlock = $('<button>');
    newColorBlock.css('background-color', colorArray[i]);
    newColorBlock.addClass('colorBlock');
    newColorBlock.data('colorOfBlock', colorArray[i]);
    $('#colorBlockContainer').append(newColorBlock);
  }
  chooseNewRandomColor();
}

