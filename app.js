var cards = document.querySelectorAll('.memCard');

cards.forEach(card => card.addEventListener('click', function(){
    this.classList.toggle('flip');
}));