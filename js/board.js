console.log("BOARD LOADED");

class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.h = ctx.canvas.height;
    this.w = ctx.canvas.width;
    this.player = null;

    this.playerArea = {
      x: 10,
      y: this.h - 270,
      w: this.w - 20,
      h: 260,
    };

    this.tableArea = {
      x: 30,
      y: 50,
      w: this.w -60,
      h: 160,
    };

    this.mainPlayerRect = {
      w: 200,
      h: 10,
      x: this.w / 2 - 100,
      y: this.h - 15,
    };

    this.rightOpponentRect = {
      w: 10,
      h: 100,
      x: this.w -15,
      y: this.tableArea.y + 30,
    };

    this.leftOpponentRect = {
      w: 10,
      h: 100,
      x: 5,
      y: this.tableArea.y + 30,
    };

    this.frontMateRect = {
      w: 100,
      h: 10,
      x: this.w / 2 - 50,
      y: 5,
    };
  }
  
  drawPlayerArea() {
    this.ctx.strokeRect(this.playerArea.x, this.playerArea.y, this.playerArea.w, this.playerArea.h);
  }

  drawTableArea() {
    this.ctx.strokeRect(this.tableArea.x, this.tableArea.y, this.tableArea.w, this.tableArea.h);
  }

  drawPlayerCards(cards) {
    if (cards.length > 13) {
      console.log("error cards > 13");
      return;
    }
    givePosition(cards, this.playerArea);
    for (const card of cards) {
      card.draw(this.ctx);
    }
  }

  drawPlayerRect(rect, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  }

  handleMouseMove(e, player) {
    const point = [e.offsetX, e.offsetY];
    //const cards = this.player.cards;
    console.log('ciao ' + this.player);
    for (let i = 0; i<cards.length; i++) {
      if (isOverACard(point, cards[i])) {
        console.log('cliccato sulla carta' + cards[i].seed + cards[i].value);
      }
    }
  }

}
