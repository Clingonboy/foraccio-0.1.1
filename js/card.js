class Card {
  constructor(img, seed, value) {
    this.img = img;
    this.x = 0;
    this.y = 0;
    this.w = 60;
    this.h = 120;
    this.seed = seed;
    this.value = value;
    this.angle = 0;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.beginPath();
    ctx.drawImage(this.img, 0, 0, this.w, this.h);
    ctx.restore();
  }
}
