import * as fs from "fs";

const input: string = fs.readFileSync("./input.txt", "utf-8");
const inputArray: string[] = input.split("\n");

const elfMoves: object = {
  A: 1,
  B: 2,
  C: 3,
};
const playerWin: object = {
  A: 2,
  B: 3,
  C: 1,
};
const playerLose: object = {
  A: 3,
  B: 1,
  C: 2,
};

function SumScore() {
  let sum: number = 0;

  for (const round of inputArray) {
    let elfMove: string = round[0];
    let playerMove: string = round[2];

    switch (playerMove) {
      case "X": // player has to lose
        sum += playerLose[elfMove];
        break;
      case "Y": //player has to draw
        sum += elfMoves[elfMove] + 3;
        break;
      case "Z": // player has to win
        sum += playerWin[elfMove] + 6;
        break;
    }
  }

  return sum;
}

console.log(SumScore());
