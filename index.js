//Oppgave 1
/*
function num(a, b, c) {
    return a + b + c;
}

var a = parseInt(prompt("Skriv et tall"));
var b = parseInt(prompt("Skriv et tall"));
var c = parseInt(prompt("Skriv et tall"));

console.log(num(a, b, c));
*/

//Oppgave 2 
/*
function num(a, b) {
    return [a, b]
}

var a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;  
var b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;  

if (a > b) {
    console.log(a + " er større enn " + b);
} else if (a < b){
    console.log(b + " er større enn " + a);
} else {
    console.log("De er like");
}
*/

//Oppgave 3
/*
function num(num1, num2, operation) {
  
    let answer;

    if (operation == "+") {
        answer = num1 + num2;
    } else if (operation  == "-") {
        answer = num1 - num2; 
    } else if (operation  == "*") {
        answer = num1 * num2;  
    } else if (operation  == "/") {
        answer = num1 / num2;    
    }

    return answer;
}

let num1 = parseInt(prompt("Skriv det første tallet"));
let operation = prompt("Skriv  +, -, * eller /");
let num2 = parseInt(prompt("Skriv det andre tallet"));

console.log(num(num1, num2, operation));

if (isNaN(num(num1, num2, operation))) {
    console.log("Det er ikke et tall. Dette er en kalkulator, så skriv et tall D:<");
}
*/

//Oppgave 4
/*
function num(num1, num2, ans) {
    return ans;
}

let num1 = parseInt(prompt("Skriv det første tallet"));
let num2 = parseInt(prompt("Skriv det andre tallet"));

let ans = Math.floor(Math.random() * (num2 - num1 + 1)) + 1;

console.log(ans);
*/

//Oppgave 5
/*
function num(num1, num2, num3, num4, num5) {
    return num1, num2, num3, num4, num5
}

let num1 = prompt("Skriv det første tallet");
let num2 = prompt("Skriv det andre tallet");
let num3 = prompt("Skriv det tredje tallet");
let num4 = prompt("Skriv det fjerde tallet");
let num5 = prompt("Skriv det femte tallet");

let nums = [num1, num2, num3, num4, num5].map(x => parseInt(x)).sort((a, b) => a - b);

console.log(nums);
*/

//Oppgave 6
/*
let rad = Number(prompt("Hvor mange rader trenger du?"))
let col = Number(prompt("Hvor mange kolonner trenger du?"))
document.write("<table>")

for (let j = 0; j < rad; j++) {
    document.write("<tr>")
    for (let i = 0; i < col; i++) {
        document.write("  <td>Røyken VGS</td>")
    }
    document.write("</tr>")
}

document.write("</table>")
*/

//Oppgave 7
/*
function num(num1, num2, num3) {
    return num1, num2, num3
}

let num1 = prompt("Skriv det første tallet");
let num2 = prompt("Skriv det andre tallet");
let num3 = prompt("Skriv det tredje tallet");

let nums = [num1, num2, num3].map(x => parseInt(x)).sort((a, b) => a - b);
let big = Math.max(...nums);

console.log(big + " er det største tallet");
*/