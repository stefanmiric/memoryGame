var game = new Game();
var timer = new Timer();

// TODO: add dynamic css properties to adjust hard and easy modes

document.getElementById("timer").innerHTML = game.mins + " : " + game.secs;
document.getElementById("reset").addEventListener('click', game.resetGame);
document.getElementById("hard").addEventListener('click', game.startHard);
document.getElementById("easy").addEventListener('click',game.startEasy);
game.shuffleArray(game.cards);

game.startEasy();

