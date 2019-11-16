'use strict'

class Card {
    
    constructor(name,index){
        this.name = name;
        this.index = index;
        this.domRef;
    }

    turnCard() {

        if(!game.startedGame){
            game.startedGame = true;
            timer.startTimer();
        }
    
    
        if(game.lockBoard) return;
        if(this === game.firstCard) return;
        this.classList.add('turn');
        
        if(!game.hasTurned){
            game.hasTurned = true;
            game.firstCard = this;
            return;
        }

        game.secondCard = this;
    
        game.checkMatch();

        if(game.numOfMatches === 6){
            timer.stopTimer();
            setTimeout(game.endGame,100);
        };
    }
    }