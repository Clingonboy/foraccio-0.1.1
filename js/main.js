console.log("START");

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const H = ctx.canvas.height;
const W = ctx.canvas.width;
const deck = new Deck();
const board = new Board(ctx);
const game = new Game();

// this function is the entry point function
// gived to deck callback function to start
function test () {
  clearAll(ctx);
  board.drawPlayerArea();
  board.drawTableArea();
  let cardsTest = get13RandomCards(deck.cards);

  game.board = board;
  game.player = new Player(cardsTest);

  board.player = game.player;
  board.drawPlayerCards(game.player.cards);
  board.drawPlayerRect(board.mainPlayerRect, 'red');
  board.drawPlayerRect(board.rightOpponentRect, 'blue');
  board.drawPlayerRect(board.leftOpponentRect, 'blue');
  board.drawPlayerRect(board.frontMateRect, 'blue');
  
  const arrow = createArrow(60, 120,
    game.player.cards[0].x,
    game.player.cards[0].y);
  arrow.draw(ctx);

  canvas.addEventListener("mousemove", board.handleMouseMove);
  
}



