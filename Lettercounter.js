var aString = "Lighthouse in the house";


function countLetters(input) {
var letterCounts = {};
  // TODO update the returnValue so that it is correct
  // Maybe loop through each letter?
  for (var i = 0; i < input.length; i++) {
    var eachLetter = aString[i];
    // console.log(letterCounts)
    var letter = input[i];

    if (letter === ' ')  {
      continue;
    }
    if (!letterCounts[letter]) {
      letterCounts[letter] = 0;
    }


    // BIG OLD HINT: If a line of code is confusing, break it up onto
    // multiple lines and use WAY MORE variables than you think you need
    // (and name them well)
    letterCounts[letter] += 1;

  }
  return letterCounts;
}

var result = countLetters(aString);

console.log(result)
