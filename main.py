display_rock()
display_paper()
display_scissors()
adventure.add_to_textlog("Time to play Rock, Paper, or Scissors!")
adventure.add_to_textlog("Best of Three")
player_score = 0
computer_score = 0
while player_score < 2 and computer_score < 2:
    player_num = game.ask_for_number("What will you play? 1=Rock, 2=Paper, and 3=Scissors")
    if player_num == 1:
        adventure.add_to_textlog("You Play Rock!")
        display_rock()
    elif player_num == 2:
        adventure.add_to_textlog("You Play Paper!")
        display_paper()
    else:
        adventure.add_to_textlog("You Play Scissors!")
        display_scissors()
    computer_num = randint(1,3)
    if computer_num == 1:
        adventure.add_to_textlog("Computer Plays Rock!")
        display_rock()
    elif computer_num == 2:
        adventure.add_to_textlog("Computer Plays Paper!")
        display_paper()
    else:
        adventure.add_to_textlog("Computer Plays Scissors!")
        display_scissors()
    if computer_num == 1 and player_num == 2 or computer_num == 2 and player_num == 3 or computer_num == 3 and player_num == 1:
        computer_score +=1
        adventure.add_to_textlog("Player Wins!")
    elif player_num == 1 and computer_num == 2 or player_num == 2 and computer_num == 3 or player_num == 3 and computer_num == 1:
        player_score +=1
        adventure.add_to_textlog("Computer Wins!")
    else:
        adventure.add_to_textlog("Tie!")
    

def display_rock():
    adventure.add_image_to_text_log(assets.image("""rock"""))

def display_paper():
    adventure.add_image_to_text_log(assets.image("""paper"""))

def display_scissors():
    adventure.add_image_to_text_log(assets.image("""scissors"""))
    
game.ask_for_number(None)