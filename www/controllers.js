import { Direction } from "wasm-snake";

class Controller {
  constructor(game) {
    this.game = game;
  }

  onStart() {
    throw new Error("Not implemented");
  }

  poll() {
    throw new Error("Not implemented");
  }
}

export class KeyboardController extends Controller {
  constructor(game) {
    super(game);
    this.keys = {
      ArrowUp: Direction.Up,
      ArrowDown: Direction.Down,
      ArrowLeft: Direction.Left,
      ArrowRight: Direction.Right,
    };
    this.currentDirection = Direction.Right;
  }

  toString() {
    return "You!";
  }

  onStart() {
    document.addEventListener("keydown", (e) => {
      if (e.key in this.keys) {
        this.currentDirection = this.keys[e.key];
      }
    });
  }

  poll() {
    return this.currentDirection;
  }
}

export class SimpleAIController extends Controller {
  constructor(game) {
    super(game);
    this.currentDirection = Direction.Right;
  }

  toString() {
    return "Computer";
  }

  onStart() {}

  poll() {
    const head = this.game.universe.snake_head();
    const [snakeRow, snakeCol] = this.game.getCoords(head);
    const apple = this.game.universe.apple();
    const [appleRow, appleCol] = this.game.getCoords(apple);

    if (snakeRow === appleRow) {
      if (snakeCol < appleCol) {
        this.currentDirection = Direction.Right;
      } else {
        this.currentDirection = Direction.Left;
      }
    } else if (snakeCol === appleCol) {
      if (snakeRow < appleRow) {
        this.currentDirection = Direction.Down;
      } else {
        this.currentDirection = Direction.Up;
      }
    } else {
      if (snakeRow < appleRow) {
        this.currentDirection = Direction.Down;
      } else {
        this.currentDirection = Direction.Up;
      }
    }

    return this.currentDirection;
  }
}
