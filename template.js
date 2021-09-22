var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
    "images/earth.jpg",
    "images/valley.jpg",
    "images/bridge.jpg",
    "images/nightsky.jpg",
    "images/stars.jpg"
);

// Will get next image from slider to show as main background-image when next arrow clicked
let i = 0;

next.onclick = function () {
    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function () {
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}

