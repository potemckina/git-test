alert('привет из внешнего файла!')

function changeContent() {
    document.getElementById("title").innerHTML = "hello javascript!";
}

function changeImage() {
    document.getElementById("image").src = "./images/project-arrival-dashboard.png";
    document.getElementById("image").alt = "image 2";
}

function changeStyle() {
    document.getElementById("text").style.color = "pink";
    document.getElementById("text").style.fontSize = "50px";
}
function toggleHighlight() {
    document.getElementById("text-2").classList.toggle("highlight");
}


// homework example 1
const myCity = 'saint-petersburg,';
let temperature = 2;
console.log(myCity, temperature);

//example 2
const result = ((2+7) * 15);
console.log(result);

// в первом примере городу задаю конст потому что город у нас неизменный, а в лет задаю градусы, потому что можно переопределить, в консоль вывожу название города и количество градусов в нем
// во втором примере пишу через конст но можно и через лет задать выражение и его итог вывожу в консоль 