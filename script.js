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
