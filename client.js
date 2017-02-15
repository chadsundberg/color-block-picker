$(document).ready(function(){

// this array sets the color, order, and number of buttons
  var colorArray = ['red', 'green', 'yellow', 'blue'];

// this appends the buttons on DOM load based on the colorArray
  for (var i = 0; i < colorArray.length; i++) {
    var button = $('<button>');
    button.text(i);
    button.data('index', i);
    button.css('background-color', colorArray[i]);
    $('#blockRow').append(button);
  }

// using the randomNumber function to pick a random index
var randomButtonIndex = randomNumber(0, colorArray.length-1);

// listens for click on a button
$('button').on('click', function(){

    var clickedButtonIndex = $(this).data().index;
    var nameOfCo
})











  var pick = randomNumber(0, 3);

  console.log(pick);

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
  $('#redBlock').on('click', function(){
          $('.game-console').append("Red");
          if (colorArray.name === "red" && parseFloat(colorArray.number) == pick) {
            $('.game-console').append("Success!  Please pick another color!");
          } else {
            $('.game-console').append("<p>Incorrect!</p>");
          }
  });

  $('#greenBlock').on('click', function(){
          $('.game-console').append("Green");
          if (colorArray.name === "green" && colorArray.number == pick) {
            $('.game-console').append("Success!  Please pick another color!");
          } else {
            $('.game-console').append("<p>Incorrect!</p>");
          }
  });

  $('#yellowBlock').on('click', function(){
          $('.game-console').append("Yellow");
          if (colorArray.name === "yellow" && colorArray.number == pick) {
            $('.game-console').append("Success!  Please pick another color!");
          } else {
            $('.game-console').append("<p>Incorrect!</p>");
          }
  });

  $('#blueBlock').on('click', function(){
          $('.game-console').append("Blue");
          if (colorArray.name === "blue" && colorArray.number == pick) {
            $('.game-console').append("Success!  Please pick another color!");
          } else {
            $('.game-console').append("<p>Incorrect!</p>");
          }
  });


    //   $('body').append(newSubBlock);
    // };
});




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
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
