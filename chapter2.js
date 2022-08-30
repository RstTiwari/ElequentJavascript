// practise questions from chapter2;
let num = 7;
let squarepattern = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    squarepattern += "*";
  }
  squarepattern += "\n";
}
//console.log(squarepattern);

let hollowSquareFunction = "";
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i === 0 || i === num - 1) {
      hollowSquareFunction += "*";
    } else if (j === 0 || j === num - 1) {
      hollowSquareFunction += "*";
    } else {
      hollowSquareFunction += " ";
    }
  }
  hollowSquareFunction += "\n";
}
//console.log(hollowSquareFunction);

// tringular shape using
let tringleShape = "";
for (let i = 1; i < num; i++) {
  for (let j = 0; j < i; j++) {
    tringleShape += "*";
  }
  tringleShape += "\n";
}
//console.log(tringleShape);

// practising all this things on 20/08/22
let tringular = "";
for (let i = 0; i < 8; i++) {
  for (j = 0; j < i; j++) {
    tringular += "*";
  }
  tringular += "\n";
}
//console.log(tringular);

function triPatter(num) {
  let tringular1 = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      tringular1 += "*";
    }
    tringular1 += "\n";
  }
  return tringular1;
}
//console.log(triPatter(7));

function starPyramid(num) {
  let pattern = "";
  for (let i = 0; i <= num; i++) {
    //console.log("...")
    for (let j = 0; j < i; j++) {
      //console.log("---");
      //console.log(".......");
      pattern += "*";
      //console.log("3",pattern);
    }
    //console.log( clspattern);
    pattern += "\n";
    //console.log( "5" ,pattern);
  }
  return pattern;
}
//console.log(starPyramid(4));

// number bein chganges for each Row
function numberPattern(num) {
  let string = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    string += "\n";
    //console.log(string)
  }
  return string;
}
//console.log(numberPattern(5));

function incresingPattern(num, string) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j < i; j++) {
      string += j;
    }
    string += "\n";
  }
  return string;
}
//console.log(numberPattern(4));

// making it without function
let n = 5; // height of pattern
let string = "";
let count = 1;

// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= n - i + 1; j++) {
    string += i;
  }
  string += "\n";
}
//console.log(string);

// now  pyramid of number with consecative number
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= n - i + 1; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
//console.log(string)

// Learning ABOUT the Pyramid Pattern
let pyramidHeight = 5;
let pyramidString = "";
for (let i = 1; i < pyramidHeight; i++) {
  for (let j = 1; j <= pyramidHeight - i; j++) {
    pyramidString += " ";
  }
  for (let k = 1; k <= i; k++) {
    pyramidString += "*";
  }
  pyramidString += "\n";
}

function createPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    var output = "";
    for (let j = 0; j < rows - i; j++) output += " ";
    for (let k = 0; k <= i; k++) output += "* ";
  }
  return output;
}

//console.log(createPyramid(5))   // pass number as row of pyramid you want.

function createstarpramid(n) {
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += ".";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "1";
      //console.log(string);
    }
    string += "\n";
  }
  //console.log(string);
}
createstarpramid(5);

function createNumberPyramid(num) {
  let string = "";
  for (let row = 1; row <= num; row++) {
    // taking care of Numbers
    //console.log(".." ,row)
    for (let spaceCol = 1; spaceCol <= num - row; spaceCol++) {
      string += ".";
    }
    for (let col = 0; col < 2 * row - 1; col++) {
      string += "1";
    }
    string += "\n";
  }
  //console.log(string)
}
createNumberPyramid(5);

// now final practise

function numberTriangle(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let k = 1; k <= num - i; k++) {
      string += ".";
      //console.log(string)
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      string += num - i + 1;
    }
    string += "\n";
  }
  //console.log(string)
}
numberTriangle(5);

//Drawing Chess Board
function chessBord(num) {
  let string = "";
  for (let row = 1; row < num; row++) {
    if (row % 2 == 0) {
      for (let col = 1; col < num; col++) {
        if (col % 2 == 0) string += "*";
        else {
          string += "#";
        }
      }
    } else {
      for (let col = 1; col < num; col++) {
        if (col % 2 == 0) string += "#";
        else {
          string += "*";
        }
      }
    }

    string += "\n";
  }
  console.log(string);
}
chessBord(8);

// finally after spending this much amount of time one thing is finalized that i m not putting my self for weekend
// now this Chapter is Done Push it Git hub
