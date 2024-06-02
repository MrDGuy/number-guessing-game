let player_num: number;
let computer_num: number;
display_rock()
display_paper()
display_scissors()
adventure.addToTextlog("Time to play Rock, Paper, or Scissors!")
adventure.addToTextlog("Best of Three")
let player_score = 0
let computer_score = 0
while (player_score < 2 && computer_score < 2) {
    player_num = game.askForNumber("What will you play? 1=Rock, 2=Paper, and 3=Scissors")
    if (player_num == 1) {
        adventure.addToTextlog("You Play Rock!")
        display_rock()
    } else if (player_num == 2) {
        adventure.addToTextlog("You Play Paper!")
        display_paper()
    } else {
        adventure.addToTextlog("You Play Scissors!")
        display_scissors()
    }
    
    computer_num = randint(1, 3)
    if (computer_num == 1) {
        adventure.addToTextlog("Computer Plays Rock!")
        display_rock()
    } else if (computer_num == 2) {
        adventure.addToTextlog("Computer Plays Paper!")
        display_paper()
    } else {
        adventure.addToTextlog("Computer Plays Scissors!")
        display_scissors()
    }
    
    if (computer_num == 1 && player_num == 2 || computer_num == 2 && player_num == 3 || computer_num == 3 && player_num == 1) {
        computer_score += 1
        adventure.addToTextlog("Player Wins!")
    } else if (player_num == 1 && computer_num == 2 || player_num == 2 && computer_num == 3 || player_num == 3 && computer_num == 1) {
        player_score += 1
        adventure.addToTextlog("Computer Wins!")
    } else {
        adventure.addToTextlog("Tie!")
    }
    
}
function display_rock() {
    adventure.addImageToTextLog(assets.image`rock`)
}

function display_paper() {
    adventure.addImageToTextLog(assets.image`paper`)
}

function display_scissors() {
    adventure.addImageToTextLog(assets.image`scissors`)
}

game.askForNumber(null)
