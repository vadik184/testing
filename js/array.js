// Завдання 1: У фразі "JavaScript is a versatile language" треба переставити два перші слова в кінець,
//щоб вийшла фраза "a versatile language JavaScript is"

// const sentence = "JavaScript is a versatile language";
// console.log(sentence);
// const array = sentence.split(" ");
// const firstWord = array.shift();
// array.push(firstWord);
// console.log(array.join(" "));

// const sentence = "JavaScript is a versatile language";
// console.log(sentence);
// const array = sentence.split(" ");
// const firstWord = array.splice(0, 2);
// array.push(firstWord.join(" "));
// console.log(array.join(" "));

const sentence = "JavaScript is a versatile language";
console.log(sentence);
const array = sentence
  .split(" ")
  .splice(2)
  .concat(sentence.split(" ").splice(0, 2))
  .join(" ");
console.log(array);

// завдання 2: відсортвати масив за зростанням

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function sortNumber(array) {
  return array.sort((a, b) => a - b);
}
function sortNumber2(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log(numbers);
let sortNumb2 = sortNumber2(numbers);
let sortNumb = sortNumber(numbers);

console.log(sortNumb);
console.log(sortNumb2);

// завдання 3
const langs = ["london", "kyiv", "uman", "riga", "python", "php"];
let result;
console.log(langs);
for (let i = 0; i < langs.length - 1; i += 1) {
  for (let j = 0; j < langs.length - 1 - i; j++) {
    if (langs[j].toLowerCase() > langs[j + 1].toLowerCase()) {
      const element = langs[j];
      langs[j] = langs[j + 1];
      langs[j + 1] = element;

      console.log(element);
    }
  }
}
console.log(langs);
