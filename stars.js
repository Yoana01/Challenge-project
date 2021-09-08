window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector(".audio");
    audio.volume = 0.2;
    audio.play();
  });

const stars = 700

for (let i = 0; i < stars; i++) {//stop adding new stars
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPositionOfTheStars();//position of the star
    star.style.top = xy[0] + 'px' //
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPositionOfTheStars() {
    var x = window.innerHeight
    var y = window.innerWidth
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}