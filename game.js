class Game {
    constructor(){

        this.cards = ["react", "react", "angular", "angular", "ember", "ember",
             "vuejs", "vuejs", "meteor", "meteor", "aurelia", "aurelia"]; //array used for random shuffling
        
        this.cardsHard = ["nodejs", "nodejs",
        "cordova", "cordova", "jest", "jest", "mocha", "mocha"];
        this.index = 0;
        this.array = []; //array containing Card objects
        
        this.hasTurned = false; //flag for checking if first card was turned
        this.lockBoard = false; //flag for disabling clicks
        this.firstCard;
        this.secondCard;
        this.numOfMatches = 0;
        this.startedGame = false;
        this.secs = 0;
        this.mins = 0;
        this.timerInt; //timer interval id
    }

    shuffleArray(array) {

        let currentIndex = array.length;
        let randomIndex, tmp;
    
        while(0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }
    
        return array;
    }

    

    checkMatch() {

        if(this.array[this.firstCard.id].name === this.array[this.secondCard.id].name) { //check if two turned card are a match
            this.lockCards();
            this.numOfMatches++;
            return;
        }

        this.unturnCards();
    }

    unturnCards() {

        this.lockBoard = true;

        console.log("stigao sam ovde");
        setTimeout(() => {
            this.array[this.firstCard.id].domRef.classList.remove("turn");
            this.array[this.secondCard.id].domRef.classList.remove("turn");
            // lockBoard = false;
            this.resetBoard();
            console.log(this);
        }, 1000); //giving player a second to try and memorize the cards
    }

    lockCards() {

        //disabling click event if cards are a match

        this.array[this.firstCard.id].domRef.removeEventListener('click', this.array[this.firstCard.id].turnCard);
        this.array[this.secondCard.id].domRef.removeEventListener('click', this.array[this.secondCard.id].turnCard);

        this.resetBoard();
    }

    resetBoard(){ //reseting variable references

        [this.firstCard, this.secondCard] = [null, null];
        [this.hasTurned, this.lockBoard] = [false, false];
    }

    endGame(){

        alert("CONGRATULATIONS! YOU BEAT THE GAME IN " + document.getElementById("timer").innerHTML);
    }

    resetGame(){

        let cont = document.getElementById("container");
        while(cont.firstChild){
            cont.removeChild(cont.firstChild);
        }
        timer.resetTimer();
        game.startedGame = false;
        game.numOfMatches = 0;

        game.startGame();
        
    }

    startGame() {

        this.array = [];
        this.index = 0;


        this.shuffleArray(this.cards);

        this.cards.forEach(card => {
            let inst = new Card(card, this.index++);
            this.array.push(inst);
        });

        this.array.forEach(card => { //creating individual dom references for cards
            let tmpDiv = document.createElement("div");
            tmpDiv.classList.add("memCard");
            tmpDiv.setAttribute("id",card.index);
        
        
            let img1 = document.createElement("img");
            let img2 = document.createElement("img");
            img1.setAttribute("src", "img/" + card.name + ".svg");
            img1.classList.add("front");
        
            img2.setAttribute("src", "img/javascript.svg");
            img2.classList.add("back");
        
            tmpDiv.appendChild(img1);
            tmpDiv.appendChild(img2);
        
            container.appendChild(tmpDiv);
            card.domRef = tmpDiv;
        });
        
        this.array.forEach(card => { //adding event listeners
            card.domRef.addEventListener('click', card.turnCard);
        });
    }

    startHard() {
        if(game.cards.length === 20){
            game.resetGame();
        }
        else {
            game.cards.push(...game.cardsHard);
            game.resetGame();
        }
    }

    startEasy() {
        if(game.cards.length === 12){
            game.resetGame();
        }
        else {
            game.cards = game.cards.filter( ( el ) => !game.cardsHard.includes( el ) );
            game.resetGame();
        }
    }
}