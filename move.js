class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = this.h = 32;
    this.xv = 5;
    this.yv = 10;
    this.gravity = 0.4;
    this.jumping = false;
    this.jumpTimer = 0;
  }

  draw() {
    game.ctx.fillStyle = 'white'
    game.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(game) {
    if (game.keyboard.includes("ArrowRight")) {
      if (this.x <= 0) {
        this.x = 0;
      } else {
        this.x -= this.xv;
      }
    }
    if (game.keyboard.includes("ArrowLeft")) {
      if (this.x + this.w >= game.canvas.width) {
        this.x = game.canvas.width - this.w;
      } else {
        this.x += this.xv;
      }
    }
    if (game.keyboard.includes("ArrowUp")) {
      if (!this.jumping) {
        this.jumping = true;
        this.jumpTimer = 0;
      }
    }

    // 投げ上げの公式（※ｙ軸方向に反転）
    this.y = (0.5 * this.gravity * this.jumpTimer * this.jumpTimer - this.yv * this.jumpTimer) + (game.canvas.height - this.h);
    this.jumpTimer++;

    if (this.y > game.canvas.height - this.h) {
      this.y = game.canvas.height - this.h;
      this.jumping = false
    }
  }
}

class Game {
  constructor(el) {
    this.timer = 0;
    this.items = [];
    this.keyboard = [];
    this.setEventListener();

    this.canvas = document.createElement("canvas");
    this.canvas.width = 320;
    this.canvas.height = 40;
    this.ctx = this.canvas.getContext("2d");
    document.querySelector(el).appendChild(this.canvas);
  }
  setEventListener() {
    document.addEventListener("keydown", e => {
      this.keyboard.push(e.code);
    });
    document.addEventListener("keyup", e => {
      this.keyboard = this.keyboard.filter(a => a !== e.code);
    });
  }

  add(item) {
    this.items.push(item);
  }

  start() {
    this.render();
  }

  stop() {
    cancelAnimationFrame(this.timer);
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.items.forEach(a => {
      a.update(this);
      a.draw(this);
    });

    this.timer = requestAnimationFrame(this.render.bind(this));
  }
}

const player = new Player();
const game = new Game("#app");
game.add(player);
game.start();
