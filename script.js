let [computer_score, user_score] = [0,0];
let result_ref = document.getElementById("result");

let choices_object = {
    'rock': {
        'rock': 'draw',
        'paper': 'lose',
        'scissors': 'win'
    },
    'paper': {
        'rock': 'win',
        'paper': 'draw',
        'scissors': 'lose'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'draw'
    }
}
//Buttons will call this function
function checker(input){
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*choices.length);
//Display Computer-Choice
    document.getElementById("comp_choice").innerHTML =
    `Computer choose <span> ${choices[num].toUpperCase()}</span>`;
//Display Player-Choice
    document.getElementById("user_choice").innerHTML =
    `Player choose <span> ${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    //Now I will check who won
    switch (choices_object[input][computer_choice]){
        case 'win':
            user_score++;
            break;

        case 'lose':
            computer_score++;
            break;
        default:
            break;
    }
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}