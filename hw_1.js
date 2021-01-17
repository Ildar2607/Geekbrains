'use strict'

let temperature = +prompt('Ведите градусы в цельсиях','');

let temperatureFar = (9 / 5) * temperature + 32;

alert(`Темература в фаренгейтах равна ${temperatureFar}`);

let name = "Василий";
let admin = name;

alert(admin);

console.log(10 + 10 + "10") // 2010 потому что цпервые 2 значения кладываются а последнее значение срока 20 + "10"
console.log(10 + "10" + 10)// // 101010 потосу что идет сложение строк
console.log(10 + 10 + +"10")// / 30 потому что +"10" = 10; 10 + 10 +10 = 30
console.log(10 /-""); //-Infinity потому что делим на -0
console.log(10 / +"2,5"); //NaN потому что нельзя делить число на строку