const text = "перші. літери. мають. бути. великі.";
// console.log(text);
let arrText = text.split(".");
// console.log(arrText);

let newArr = [];
let newArr1 = [];

let newArr3 = [];

function getNewArr() {
  let line;
  let finishArr;

  for (let item of arrText) {
    line = item.split("");
    if (line.length > 0 && line[0] === " ") {
      line[1] = line[1].toUpperCase();
      line.shift();
    } else if (line.length > 0 && line[0] !== " ") {
      line[0] = line[0].toUpperCase();
    }

    finishArr = line.join("");

    // console.log(line);
    // console.log(finishArr);

    newArr.push(finishArr);
    continue;
  }
  newArr.pop();
  return newArr;
}
getNewArr();

newArr = newArr.join(". ") + ".";
// console.log(newArr);
