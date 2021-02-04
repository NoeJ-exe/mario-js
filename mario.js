var emptyString = ' '
var brick = "#"


printPyramid(5);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */// string brick
function repeatString(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

function printPyramid(height) {
    for(let i = 0;i < height;i ++){
      console.log(repeatString(emptyString,height - i) + repeatString(brick,i+1) + brick);
    }

    // TODO #1
    // print that pyramid!

}
