import { Universe, Cell, Direction } from "wasm-snake";
import { memory } from "wasm-snake/wasm_snake_bg";

import { KeyboardController, SimpleAIController } from "./controllers";

const CELL_SIZE = 20; // px
const GRID_COLOR = "grey";
const cellColors = {
  [Cell.Dead]: "#1E293B",
  [Cell.Alive]: "#0B6623",
  [Cell.Apple]: "#C7372F",
};

class SnakeGame {
  constructor(canvas) {
    this.universe = Universe.new(32, 32);
    this.canvas = canvas;
    this.controller = new SimpleAIController(this);
    this.results = document.getElementById("results-screen");
    this.scoreNodes = document.getElementsByClassName("score");
  }

  get height() {
    return this.universe.height();
  }

  get width() {
    return this.universe.width();
  }

  getIndex(row, column) {
    return row * this.width + column;
  }

  getCoords(index) {
    const row = Math.floor(index / this.width);
    const column = index % this.width;

    return [row, column];
  }

  run() {
    this.controller.onStart();
    this.canvas.height = (CELL_SIZE + 1) * this.height + 1;
    this.canvas.width = (CELL_SIZE + 1) * this.width + 1;
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext("2d");

    this.setupListeners();
    this.renderLoop();
  }

  setupListeners() {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        if (this.controller instanceof KeyboardController) {
          this.controller = new SimpleAIController(this);
        } else {
          this.controller = new KeyboardController(this);
        }
        this.controller.onStart();

        document.getElementById("player").innerHTML =
          this.controller.toString();
      }
    });

    const restart = document.getElementById("restart");

    restart.addEventListener("click", () => {
      restart.blur();
      this.results.style.opacity = "0";
      this.restart();
    });
  }

  restart() {
    this.universe.restart();
    this.controller.currentDirection = Direction.Right;
    this.renderLoop();
  }

  drawGrid() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= this.width; i++) {
      this.ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
      this.ctx.lineTo(
        i * (CELL_SIZE + 1) + 1,
        (CELL_SIZE + 1) * this.height + 1
      );
    }

    // Horizontal lines.
    for (let j = 0; j <= this.height; j++) {
      this.ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
      this.ctx.lineTo(
        (CELL_SIZE + 1) * this.width + 1,
        j * (CELL_SIZE + 1) + 1
      );
    }

    this.ctx.stroke();
  }

  drawCells() {
    const cellsPtr = this.universe.cells();
    const cells = new Uint8Array(
      memory.buffer,
      cellsPtr,
      this.width * this.height
    );

    this.ctx.beginPath();

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const idx = this.getIndex(row, col);

        this.ctx.fillStyle = cellColors[cells[idx]];

        this.ctx.fillRect(
          col * (CELL_SIZE + 1) + 1,
          row * (CELL_SIZE + 1) + 1,
          CELL_SIZE,
          CELL_SIZE
        );
      }
    }

    this.ctx.stroke();
  }

  renderLoop() {
    const alive = this.universe.tick();
    const direction = this.controller.poll();
    this.universe.set_direction(direction);

    for (let i = 0; i < this.scoreNodes.length; i++) {
      this.scoreNodes[i].innerHTML = this.universe.score();
    }

    if (alive) {
      this.drawGrid();
      this.drawCells();
      setTimeout(
        () => requestAnimationFrame(this.renderLoop.bind(this)),
        Math.log(100 / (this.universe.score() + 1)) * 20
      );
    } else {
      this.results.style.opacity = "1";
    }
  }
}

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-of-life-canvas");

const game = new SnakeGame(canvas);
game.run();
