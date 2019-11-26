class Timer{
    
    changeValue(){

        let tmp;
        game.secs++;

        [game.mins, tmp] = [Math.floor(game.secs / 60), game.secs % 60];

        document.getElementById("timer").innerHTML = game.mins + " : " + tmp;
    }

    startTimer(){

        this.stopTimer();
        game.secs = 0;
        game.timerInt =  setInterval(this.changeValue, 1000);
    }

    stopTimer(){

        clearInterval(game.timerInt);
    }

    resetTimer(){
        this.stopTimer();
        [game.secs, game.mins] = [0, 0];
        document.getElementById("timer").innerHTML = game.mins + " : " + game.secs;

    }
}