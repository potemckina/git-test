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
