// alert('привет из внешнего файла!')

function changeContent() {
  document.getElementById("title").innerHTML = "hello javascript!";
}

function changeImage() {
  document.getElementById("image").src =
    "./images/project-arrival-dashboard.png";
  document.getElementById("image").alt = "image 2";
}

function changeStyle() {
  document.getElementById("text").style.color = "pink";
  document.getElementById("text").style.fontSize = "50px";
}
function toggleHighlight() {
  document.getElementById("text-2").classList.toggle("highlight");
}

// homework 1 example 1
const myCity = "saint-petersburg,";
let temperature = 2;
console.log(myCity, temperature);

//example 2
const result = (2 + 7) * 15;
console.log(result);

// в первом примере городу задаю конст потому что город у нас неизменный, а в лет задаю градусы, потому что можно переопределить, в консоль вывожу название города и количество градусов в нем
// во втором примере пишу через конст но можно и через лет задать выражение и его итог вывожу в консоль

//homework 2 example 1
let price = 100;
price = 150;
console.log(price);

//example 2
// let price2 = 200;
// let price2 = 250;
// console.log(price2);

// const price3 = 300;
// const price3 = 330;
// console.log(price3);
//в случае с повторным объявлением переменных в консоле будет ошибка и при лет и при конст. если мы хотим поменять значение у лет то мы можем это сделать но переопределением (как в первом варианте) а не повторным объвлением. в случае с конст значение мы поменять не можем а можем только задать новую константу.

//homework 3 example 1
let a = 5;
console.log(typeof a);

let b = "10";
console.log(typeof b);

let c = true;
console.log(typeof c);

let d;
console.log(typeof d);

let e = null;
console.log(typeof e);

//example 2
const z = 25;
let znachenie = z;
console.log(znachenie);
// в данном примере я беру только значение у конст и присваиваю его лет

let month = ["march", "september", "november"];
let today = month;
console.log(today);
// здесь уже подключаемся не по значению а по ссылке, идем туда же к значению month, только тепеерь там не какое-то конкретное значение, а какое-то действие.
// если совсем простыми словами. то значение мы можем взять у примитивных, а по ссылке через сложные типы данных

//homework 4 example 1
let twotwo = Math.round(2 * 2 + 2);
console.log(twotwo);

let sincos = Math.round((Math.sin(54) * Math.cos(60)) ** 2);
console.log(sincos);

let koren =
  Math.round((16 * Math.sqrt(13.2 * 71.9)) / (2.4 / Math.pow(7, 4))) +
  (3 ** Math.sqrt(49)) ** Math.pow(2, 7);
console.log(koren);

//homework 4 example 2
let table = 3;
let paper = 16;
console.log(table % 2 === 0);
console.log(paper % 2 === 0);

//homework 4 example 3
let name = "nina";
if (name) {
  console.log(`Hello,` + name);
} else {
  console.log(`Hello, Quest`);
}

//homework 5 example 1
let asdf = 0;
if (asdf > 0) {
  console.log(`число положительное`);
} else if (asdf < 0) {
  console.log(`число отрицательное`);
} else {
  console.log(`ноль`);
}

//homework 5 example 2
const rost = Number(prompt("укажите ваш рост, см"));
const ves = Number(prompt("укажите ваш вес, кг"));
alert(`ваш имт ` + (rost / ves) * 10);

//homework 5 example 3
let mesyaz = 13;
let mesyazName;
switch (mesyaz) {
  case 1:
    mesyazName = "january";
    break;
  case 2:
    mesyazName = "february";
    break;
  case 3:
    mesyazName = "march";
    break;
  case 4:
    mesyazName = "april";
    break;
  case 5:
    mesyazName = "may";
    break;
  case 6:
    mesyazName = "june";
    break;
  case 7:
    mesyazName = "jule";
    break;
  case 8:
    mesyazName = "august";
    break;
  case 9:
    mesyazName = "september";
    break;
  case 10:
    mesyazName = "october";
    break;
  case 11:
    mesyazName = "november";
    break;
  case 12:
    mesyazName = "december";
    break;
  default:
    mesyazName = "такого месяца нет";
}
console.log(mesyazName);

//homework 5 example 4
let candy = Number(prompt("выберите число от 1 до 5 для выбора подарка"));
let candyGift;
switch (candy) {
  case 1:
    candyGift = "kitkat";
    break;
  case 2:
    candyGift = "mars";
    break;
  case 3:
    candyGift = "snickers";
    break;
  case 4:
    candyGift = "picnic";
    break;
  case 5:
    candyGift = "milkiway";
    break;
  default:
    candyGift = "вы ввели число вне диапозона";
}
console.log(candyGift);


//homework 6 example 1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//homework 6 example 2
let sum = 0;
let i = 0;
while (i < 100) {
  sum += i++;
}
console.log(i);

//homework 6 example 3  (НЕ РЕШИЛА)
// let app = 1;
// while (app <= 100) {
//   if (app % 1 = 0) {
//     console.log(app)
//   } else if (app % app = 0) {
//     console.log(app)
//   } else {
//     break
//   }
// } 

//homework 7 example 1
let str = "JavaScript is fun!";
console.log(str.includes("fun")); //true

//homework 7 example 2
let tryt = 124;
if (tryt == 15) {
  console.log(tryt++)
} else {
  console.log(tryt)
};

//homework 7 example 3
let firstName = "Nina";
let lastName = "Potemckina";
let occupation = "Frontend developer";
let result2 = `Hello, my name ${firstName} ${lastName}. I am is ${occupation}.`;
console.log(result2);

//homework 7 example 4
let qwer = null;
let rweq;
console.log(qwer === rweq); //false потому что сравниваются еще и типы переменных а null - object
console.log(qwer == rweq); //true сравниваются только значения в переменных и там и там их нет

//homework 7 example 5
let cifra = 1;
let stroka = "1";
console.log(cifra + stroka); //выведет 11 так как при сложении он тупо присоединяет значения друг к другу и приводит к строке 

