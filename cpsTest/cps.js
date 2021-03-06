const cpsBoard = document.getElementById('cpsBoard');
let score = document.getElementById('score');
let counter = parseInt(document.getElementById('counter').innerText);
let timer = parseInt(document.getElementById('timer').innerText);
timer = 0;
counter = 0;
let timerFunction = null;

let checkCps = () => {
    counter = counter + 1;
    document.getElementById('counter').innerText = counter;
    console.log("counter " + counter)
    if (counter === 1) {
        startTimer();
    }
}

let startTimer = () => {
    timerFunction = setInterval(() => {
        timer = timer + 1
        document.getElementById('timer').innerText = timer;
        console.log("inside setinterval " + timer)
        if (timer == 10) {
            console.log('stop');
            stopTime();
            timer = 0;
            testScore();
        }
    }, 1000);
}



let stopTime = () => {
    clearInterval(timerFunction);
    console.log("Done");
    timerFunction = null;
    timer = 0;
    cpsBoard.disabled = true;
}

let testScore = () => {
    score.innerText = "Your CPS is: " + counter / 10;
    let restartButton = document.createElement('button');
    restartButton.setAttribute('class', 'btn btn-danger');
    restartButton.innerText = 'Restart';
    restartButton.addEventListener("click", reload, false);
    document.getElementById('restartBtn').appendChild(restartButton);
}

let reload = () => {
    reload = location.reload();
}