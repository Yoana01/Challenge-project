var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d") //method returns a drawing context on the canvas, or null if the context identifier
//is not supported, or the canvas has already been set to a different context mode.
var falling = [];
var amountOfFalling = 50;
var dimension = 20;

function fallingLetters(x, y) {
    this.x = x;
    this.y = y;
    this.letters = [];
    var amount = Math.floor(Math.random() * 50) + 5; // give a value between 5 and 50  
    for (i = 0; i < amount; i++) {

        var charNumber = Math.floor(Math.random() * 4000) + 55; // first 55 are space, return...
        this.letters.push(String.fromCharCode(charNumber));
    }
}
for (j = 0; j < amountOfFalling; j++) {

    var randomY = Math.floor(Math.random() * 10) * dimension;
    falling.push(new fallingLetters(j * dimension, randomY))

}
for (n = 0; n < 40; n++) {

    var randomX = Math.floor(Math.random() * 40) * dimension
    var randomY = Math.floor(Math.random() * 10) * dimension * -1;
    falling.push(new fallingLetters(randomX, randomY))

}

function loop() {
    ctx.clearRect(0, 0, 800, 600, ); // clear the screen
    for (k = 0; k < falling.length; k++) {
        for (l = 0; l < falling[k].letters.length; l++) {
            var color = "rgb(0, 1, 0)";
            if (l === 0) {
                ctx.fillStyle = "rgb(51, 255, 51)";
            } else {
                ctx.fillStyle = "rgb(0, 128, 0)";
            }
            ctx.font = "10px Ariel";
            ctx.fillText(falling[k].letters[l], falling[k].x, falling[k].y + (-1 * l * dimension))
        }
        falling[k].y += dimension;
        if (falling[k].y - falling[k].letters.length * dimension > 600) {
            var randomX = Math.floor(Math.random() * 40) * dimension
            var randomY = Math.floor(Math.random() * 10) * dimension * -1;
            falling[k] = new fallingLetters(randomX, randomY)

        }

    }
}
var intervals = setInterval(loop, 100);

var i = 0;
var text = 'The Matrix';
var typing = "";

function nameOfTheMovie() {
    ctx.clearRect(0, 0, 800, 600, ); // clear the screen
    clearInterval(intervals, 3000)
    if (i < text.length) {
        ctx.fillText(typing += text.charAt(i), canvas.width / 4, canvas.height / 3);
        ctx.fillStyle = "rgb(255,250,250))";
        ctx.font = "15px Consolas";
        i++;
        setTimeout(nameOfTheMovie, 400);
    }
}
setTimeout(nameOfTheMovie, 3000);

