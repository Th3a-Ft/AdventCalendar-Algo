import { puzzle } from './puzzleInput/day1.js';

let result = 0;
//Part 1
var puzzle = ["1abc2","pqr3stu8vwx","a1b2c3d4e5f","treb7uchet"];
let result = 0;

for (var i=0; i<puzzle.length; i++) {
    var line = puzzle[i];
}
puzzle.forEach(line => {
    let first = 0;
    let last = 0;

    for (letter of line) {
        if (first == 0 && letter > 0 && letter <= 9) first = letter;
        if (first != 0 && letter > 0 && letter <= 9) last = letter;
    }

    let sum = parseInt(first + last);
    console.log(sum);

    result += sum;
});

console.log(result);


//Part 2
puzzle.forEach(line => {

    let sToI = line.replace("twone","2").replace("eightwo", "8").replace("eightree", "8").replace("threeight", "3").replace("fiveight", "5").replace("nineight", "9").replace("one", "1").replace("two", "2").replace("three", "3").replace("four", "4").replace("five", "5").replace("six", "6").replace("seven", "7").replace("eight", "8").replace("nine", "9");
    console.log(sToI);

    let first = 0;
    let last = 0;

    for (letter of sToI) {
        if (first == 0 && letter > 0 && letter <= 9) first = letter;
        if (first != 0 && letter > 0 && letter <= 9) last = letter;
    }

    let sum = parseInt(first + last);
    console.log(sum);

    result += sum;

});

console.log(result);