import * as fs from "fs";

let input: string = fs.readFileSync("./input.txt", "utf-8");
const inputArray: string[] = input.split("\n");

function findMax() {
  let max: number = 0;
  let sum: number = 0;

  for (const num of inputArray) {
    if (num === "") {
      sum > max && (max = sum);
      sum = 0;
      continue;
    }

    sum += Number(num);
  }
  return max;
}

console.log(findMax());
