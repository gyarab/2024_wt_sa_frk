const gameBoard = document.querySelector('.game-board');

// Data pro pexeso
const cardsData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const cards = [...cardsData, ...cardsData]; // Duplikace karet pro páry
cards.sort(() => 0.5 - Math.random()); // Náhodné zamíchání

let flippedCards = [];
let matchedPairs = 0;

// Vytvoření karet
cards.forEach((cardValue) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.value = cardValue;
  card.addEventListener('click', flipCard);
  gameBoard.appendChild(card);
});

// Otočení karty
function flipCard() {
  if (this.classList.contains('flipped') || flippedCards.length === 2) return;

  this.classList.add('flipped');
  this.textContent = this.dataset.value;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

// Kontrola shody
function checkForMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.value === card2.dataset.value) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedPairs++;

    if (matchedPairs === cardsData.length) {
      setTimeout(() => alert('Gratulujeme, vyhrál jsi!'), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card1.textContent = '';
      card2.classList.remove('flipped');
      card2.textContent = '';
    }, 1000);
  }
  flippedCards = [];
}
