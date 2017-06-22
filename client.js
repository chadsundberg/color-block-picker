// this array sets the starting colors and number of buttons
  var colorArray = ['red', 'green', 'yellow', 'blue'];
  var randomColor = '';
  var numberOfColors = 4;

$(document).ready(function(){

  addBlocksToPage();

  $('#colorBlockContainer').on('click', '.colorBlock', function(){
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    $('#colorChosen').text(colorOfBlockSelected);
    if (randomColor == colorOfBlockSelected) {
      $('#answerText').text("That's the correct color!  Nice work!! Pick another color...");
      chooseNewRandomColor();
    } else {
      $('#answerText').text('Sorry, that is not the correct color.  Try again.');
    };
  });



});

chooseNewRandomColor();

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

  function chooseNewRandomColor(){
    var randomNumberSelected = randomNumber(0, numberOfColors - 1);
    randomColor = colorArray[randomNumberSelected];
    $('#userColorPrompt').text(randomColor);
  }



  function addBlocksToPage(){

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


// these are my previous attempts...

// colorArray.forEach(function(color, i){
  //   color.number = randomNumber(0, 3);

// var deletedEmployeeSalary = $(this).data('salary');
//   });

  // $('.color-rectangle').on('click', '.color-box',  function(){
  //     // $('.game-console').append(
  //     if ($(this).name === color.name && parseFloat(color.number) == pick) {
  //       $('.game-console').append($(this).name + "Success!  Please pick another color!");
  //     } else {
  //       $('.game-console').append($(this).name + "<p>Incorrect!</p>");
  //       return;
  //     }
  // });
  // $('#redBlock').on('click', function(){
  //         $('.game-console').append("Red");
  //         if (colorArray.name === "red" && parseFloat(colorArray.number) == pick) {
  //           $('.game-console').append("Success!  Please pick another color!");
  //         } else {
  //           $('.game-console').append("<p>Incorrect!</p>");
  //         }
  // });

  // $('#greenBlock').on('click', function(){
  //         $('.game-console').append("Green");
  //         if (colorArray.name === "green" && colorArray.number == pick) {
  //           $('.game-console').append("Success!  Please pick another color!");
  //         } else {
  //           $('.game-console').append("<p>Incorrect!</p>");
  //         }
  // });

  // $('#yellowBlock').on('click', function(){
  //         $('.game-console').append("Yellow");
  //         if (colorArray.name === "yellow" && colorArray.number == pick) {
  //           $('.game-console').append("Success!  Please pick another color!");
  //         } else {
  //           $('.game-console').append("<p>Incorrect!</p>");
  //         }
  // });

  // $('#blueBlock').on('click', function(){
  //         $('.game-console').append("Blue");
  //         if (colorArray.name === "blue" && colorArray.number == pick) {
  //           $('.game-console').append("Success!  Please pick another color!");
  //         } else {
  //           $('.game-console').append("<p>Incorrect!</p>");
  //         }
  // });


    //   $('body').append(newSubBlock);
    // };
// });




  // $('#colorBlock').append(
  //   '<div>' +
  //     '<div>' + $('#redSubBlock').css("color", "red") + '</div>' +
  //     '<div>' + $('#greenSubBlock').css("color", "green") + '</div>' +
  //     '<div>' + $('#yellowSubBlock').css("color", "yellow") + '</div>' +
  //     '<div>' + $('#blueSubBlock').css("color", "blue") + '</div>' +
  //     '</div>'

    // $('#redSubBlock').css("color", "red");
    // $('#greenSubBlock').css("color", "green");
    // $('#yellowSubBlock').css("color", "yellow");
    // $('#blueSubBlock').css("color", "blue");
  // );
