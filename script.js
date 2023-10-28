var timer = 60;
var hitnum;
function makeBubble() {
    let clutter = "";
    for (var i = 0; i <= 159; i++){
        var rand = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rand}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;   
}
function runTimer() {
    var timerStop=setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerStop);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
function getNewHit() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitnum;
}
var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#Scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNumber = Number(dets.target.textContent);
    if (hitnum === clickedNumber) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
makeBubble();
runTimer();
getNewHit();
