class Deck {
  constructor(){
    this.cards = [];
    this.#createDeck();
  }

  #createDeck() {
    const jarOfPromise = [];
    const seeds = ['B', 'C', 'S', 'D'];
    for (const seed of seeds) {
      for (let i=1; i<=13; i++) {
        jarOfPromise.push(
          new Promise(resolve => {
            const imgName = "./images/" + seed + i + ".jpg";
            const img = new Image();
            img.addEventListener('load',
            function() {
              resolve();
            });
            img.setAttribute('crossOrigin', 'same-origin');
            img.src = imgName;
            this.cards.push(new Card(img, seed, i));
          })
        );
      }
    }
    Promise.all(jarOfPromise)
    .then(_ => {
      drawAllCards(this.cards);
      test(deck);
    });
  }
}
