import { puzzle } from './puzzleInput/day1.js';


//Part 1
//let result = 0;

for (var i = 0; i < puzzle.length; i++) {
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
/* let result = 0;
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

console.log(result); */


//Part 2 - correction
let result = 0;
var puzzle=["two1nine","eightwothree","abcone2threexyz","xtwone3four","4nineeightseven2","zoneight234","7pqrstsixteen"]
let mapping=["one","two","three","four","five","six","seven","eight","nine","1","2","3","4","5","6","7","8","9"];
let nbre=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

//on parcourt le tableau puzzle
for (let i = 0; i < puzzle.length; i++) {
    //on attribue la valeur de chaque ligne à c pour pouvoir les parcourir
    let c = puzzle[i];
    //on parcourt  chaque caractère de c
    for (let j = 0; j < c.length; j++) {
        let b = true;   //si la boucle qui vérifie les lettres est false alors on sort de la boucle
        //vérification de la correspondance des nombres mappés avec les données de puzzle
        for (let k=0; k< mapping.length && b ;k++){
            //on parcourt chaque lettre du puzzle pour voir si elle corresponde à un nbre
            for(let l=0;l<mapping[k] && b;l++){
                //vérif des limites et si le caractère suivant est dans le mapping ou non
                if(j+l<c.length && c[j+l]!=mapping[k][l]){
                    b=false;
                }
                if (b){
                    result+=nbre[k];
                }
            }
        }
    }
};

puzzle.forEach(c => {

    let first = 0;
    let last = 0;

    for (letter of c) {
        if (first == 0 && letter > 0 && letter <= 9) first = letter;
        if (first != 0 && letter > 0 && letter <= 9) last = letter;
    }

    let sum = parseInt(first + last);
    console.log(sum);

    result += sum;

});

console.log(result);
