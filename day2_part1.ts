import * as fs from "fs";

const input: string = fs.readFileSync("./input.txt", "utf-8");
const inputArray: string[] = input.split("\n");

const elfMoves: object = {
  A: 1,
  B: 2,
  C: 3,
};
const playerMoves: object = {
  X: 1,
  Y: 2,
  Z: 3,
};

function SumScore() {
  let sum: number = 0;

  for (const round of inputArray) {
    let playerMove: number = playerMoves[round[2]];
    let elfMove: number = elfMoves[round[0]];

    if (playerMove == elfMove) {
      sum += playerMove + 3;
      continue;
    }

    switch (playerMove) {
      case 1:
        elfMove == 2 ? (sum += playerMove) : (sum += playerMove + 6);
        break;
      case 2:
        elfMove == 3 ? (sum += playerMove) : (sum += playerMove + 6);
        break;
      case 3:
        elfMove == 1 ? (sum += playerMove) : (sum += playerMove + 6);
        break;
    }
  }

  return sum;
}

console.log(SumScore());
