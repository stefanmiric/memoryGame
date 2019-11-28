var game = new Game();
var timer = new Timer();

// TODO: add dynamic css properties to adjust hard and easy modes

document.getElementById("timer").innerHTML = game.mins + " : " + game.secs;
document.getElementById("reset").addEventListener('click', game.resetGame);
document.getElementById("hard").addEventListener('click', game.startHard);
document.getElementById("easy").addEventListener('click',game.startEasy);
game.shuffleArray(game.cards);

game.startEasy();

// let container = document.getElementById('container');

// game.cards.forEach(card => {
//     let inst = new Card(card, game.index++);
//     game.array.push(inst);
// });

// game.array.forEach(card => { //creating individual dom references for cards
//     let tmpDiv = document.createElement("div");
//     tmpDiv.classList.add("memCard");
//     tmpDiv.setAttribute("id",card.index);


//     let img1 = document.createElement("img");
//     let img2 = document.createElement("img");
//     img1.setAttribute("src", "img/" + card.name + ".svg");
//     img1.classList.add("front");

//     img2.setAttribute("src", "img/javascript.svg");
//     img2.classList.add("back");

//     tmpDiv.appendChild(img1);
//     tmpDiv.appendChild(img2);

//     container.appendChild(tmpDiv);
//     card.domRef = tmpDiv;
// });

// game.array.forEach(card => { //adding event listeners
//     card.domRef.addEventListener('click', card.turnCard);
// });