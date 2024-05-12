function drawGrid(ctx, x, y) {
  const xSpace = ctx.canvas.width / x;
  const ySpace = ctx.canvas.height / y;
  const H = ctx.canvas.height;
  const W = ctx.canvas.width;

  ctx.beginPath();
  for(let i=1; i<x; i++){
    ctx.moveTo(i * xSpace, 0);
    ctx.lineTo(i * xSpace, ctx.canvas.height);
    ctx.stroke();
  }
  for(let i=1; i<y; i++){
    ctx.moveTo(0, i * ySpace);
    ctx.lineTo(ctx.canvas.width, i * ySpace);
    ctx.stroke();
  }
}

function drawAllCards(cards) {
  for (const card of cards) {
    ctx.drawImage(card.img, Math.random() * W, Math.random() * H, 60, 120 )
  }
}

function drawPoint(point, size = 8, color = "black"){
  const radius = size / 2;
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
  ctx.fill();
}

function clearAll(ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// restituisce un elemento random dell'array e lo toglie dall'array
function getRandomElement (array) {
  const n = Math.floor(Math.random() * (array.length -1));
  return array.splice(n, 1);
}

function get13RandomCards (array) {
  let cards = [];
  for (let i=0; i<13; i++) {
    cards.push(getRandomElement(array)[0]);
  }
  return cards;
}

/*
 * This function set x and y position of the cards in the way to center them
 * in the given area
 */
function givePosition(cards, area) {
  const n = cards.length;
  const deltaUp = area.w / 6;
  const deltaDown = area.w / 7;

  for (let i=0; i<n; i++) {
    if (i < 6) {
      cards[i].x = area.x + deltaUp * i;
      cards[i].y = area.y;
    } else {
      cards[i].x = area.x + (deltaDown * (i - 6));
      cards[i].y = area.y + 130;
    }
  }
}

function createArrow(w, h, x, y) {
  /*
   * funtion that create an arrow to draw on the card that is selected
   */
  const points = [];
  const dx = w / 12;
  const dy = h / 24;
  const p1 = [x + w / 2 , y + 2 * dy];
  points.push(p1);
  const p2 = [p1[0] + 4 * dx, p1[1] + 7 * dy];
  points.push(p2);
  const p3 = [p2[0] - 2 * dx, p2[1]];
  points.push(p3);
  const p4 = [p3[0], p3[1] + 9 * dy]; 
  points.push(p4);
  const p5 = [p4[0] - 4 * dx, p4[1]];
  points.push(p5);
  const p6 = [p5[0], p5[1] - 9 * dx];
  points.push(p6);
  const p7 = [p6[0] - 2 * dx, p6[1]];
  points.push(p7);

  const draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i=1; i<points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    console.log(this);
  }

  const mirrorArrow = function () {
    if (this.points.length == 0) {
      console.log('No correct arrow to mirror');
      return;
    }
    const offY = points[0][1];
    const hf = points[4][1] - points[0][1];
    for (let point of points) {
      point[1] = point[1] * -1 + 2 * offY + hf;
    }
  }

  return { points, draw, mirrorArrow };
}

// check if a point is inside a poligon
function rayCasting(point, polygon) {
    const n = polygon.length
    let isIn = false
    const x = point[0]
    const y = point[1]
    let x1, x2, y1, y2

    x1 = polygon[n-1][0]
    y1 = polygon[n-1][1]

    for (let i = 0; i < n; ++i) {
        x2 = polygon[i][0];
        y2 = polygon[i][1];

        if (y < y1 !== y < y2 && x < (x2 - x1) * (y - y1) / (y2 - y1) + x1) {
            isIn = !isIn;
        }
        x1 = x2
        y1 = y2
    }

    return isIn;
}

// Function that check if point is over a card.
function isOverACard (point, card) {
  if (point[0] > card.x && point[0] < card.x + card.w &&
    point[1] > card.y && point[1] < card.y + card.h) {
    return true}
  return false;
}
