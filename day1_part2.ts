import * as fs from "fs";

let input: string = fs.readFileSync("./input.txt", "utf-8");
const inputArray: string[] = input.split("\n");

function findMax() {
  let max: number[] = [0, 0, 0];
  let sum: number = 0;

  for (const num of inputArray) {
    if (num === "") {
      let min: number = Math.min(...max);
      let index = max.findIndex((num) => num == min);
      sum > min && index != -1 && (max[index] = sum);
      sum = 0;
      continue;
    }

    sum += Number(num);
  }
  return max.reduce((a,b)=>a+b);
}

console.log(findMax());
