function rpsGame(yourChoice) {
    console.log(yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice '+botChoice);
    let results = decideWinner(humanChoice, botChoice);
    console.log(results);
    let message = finalMessage(results); // 'you won
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1,'paper': 0.5, "scissors": 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };

    let youScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [youScore, computerScore];
}


function finalMessage([youScore, computerScore]) {
    if (youScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (youScore===0.5) {
       return {'message': 'You tied!', 'color': 'yellow'};
    } else  {
        return {'message': 'You won!', 'color': 'green'};
    } 
    
}

function rpsFrontEnd(humanImg, botImg, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    console.log(imagesDatabase[humanImg]);
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv. innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-rps-div').appendChild(humanDiv);
    document.getElementById('flex-rps-div').appendChild(messageDiv);
    document.getElementById('flex-rps-div').appendChild(botDiv);


}
