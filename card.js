'use strict'

class Card {

    constructor(name,index){
        this.name = name;
        this.index = index;
        this.domRef;
    }

    turnCard() {
        //starting timer when the first move is made
        if(!game.startedGame){
            game.startedGame = true;
            timer.startTimer();
        }
    
        //disabling clicks when two cards are turned
        if(game.lockBoard) return;

        //disabling multiple clicks on the same, already turned, card 
        if(this === game.firstCard) return;
        this.classList.add('turn');

        //clicking on the first card
        if(!game.hasTurned){
            game.hasTurned = true;
            game.firstCard = this;
            return;
        }

        //clicking on the second card
        game.secondCard = this;
    
        game.checkMatch();

        //check if the player won
        if(game.numOfMatches === 10){
            timer.stopTimer();
            setTimeout(game.endGame,100);
        };
    }
    }