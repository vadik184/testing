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

// const sentence = "JavaScript is a versatile language";
// console.log(sentence);
// const array = sentence
//   .split(" ")
//   .splice(2)
//   .concat(sentence.split(" ").splice(0, 2))
//   .join(" ");
// console.log(array);

// // завдання 2: відсортвати масив за зростанням

// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// function sortNumber(array) {
//   return array.sort((a, b) => a - b);
// }
// function sortNumber2(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// console.log(numbers);
// let sortNumb2 = sortNumber2(numbers);
// let sortNumb = sortNumber(numbers);

// console.log(sortNumb);
// console.log(sortNumb2);

// // завдання 3
// const langs = ["london", "kyiv", "uman", "riga", "python", "php"];
// let result;
// console.log(langs);
// for (let i = 0; i < langs.length - 1; i += 1) {
//   for (let j = 0; j < langs.length - 1 - i; j++) {
//     if (langs[j].toLowerCase() > langs[j + 1].toLowerCase()) {
//       const element = langs[j];
//       langs[j] = langs[j + 1];
//       langs[j + 1] = element;

//       console.log(element);
//     }
//   }
// }
// console.log(langs);

// function calBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));
//   let ind = weight / height ** 2;
//   return Number(ind.toFixed(1));
// }
// const bmi = calBMI("88,3", "1.75");
// console.log(bmi);

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// logItems(["mango", "Poly", "Ajax"]);

// function printcontactsInfo(names, phones) {
//   names = names.split(",");
//   phones = phones.split(",");
//   console.log(names, phones);
//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// }
// printcontactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

function findLargestNumber() {
  const arr = [...arguments];
  console.log(arr);
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findLargestNumber(2, 17, 94, 1, 23));
console.log(findLargestNumber(49, 4, 7, 83, 12));
//-----------------------------------------------------------------------------------
// Створіть масив об'єктів employees, де кожен об'єкт містить властивості name, position, salary.
// Напишіть функцію, яка повертає новий масив з об'єктами, де salary більше певного значення.
let employees = [
  { name: "Анна", position: "Менеджер", salary: 5000 },
  { name: "Іван", position: "Розробник", salary: 7000 },
  { name: "Олена", position: "Дизайнер", salary: 4500 },
];

function filterBySalary(employees, minSalary) {
  let result = [];
  for (const key in employees) {
    if (employees[key].salary > minSalary) {
      result.push(employees[key]);
    }
  }
  return result;
}
console.log(filterBySalary(employees, 5000));
//-----------------------------------------------------------------------------------
// Створіть масив об'єктів students, де кожен об'єкт містить властивості name, age, grade.
// Напишіть функцію, яка групує студентів за їх оцінками (grade) і повертає об'єкт,
// де ключами є оцінки, а значеннями - масиви студентів з відповідною оцінкою.
let students = [
  { name: "Марія", age: 20, grade: "A" },
  { name: "Петро", age: 22, grade: "B" },
  { name: "Оксана", age: 21, grade: "A" },
  { name: "Іван", age: 23, grade: "C" },
  { name: "Олена", age: 20, grade: "B" },
];

function groupByGrade(students) {
  // Ваш код тут
  let studentsGrade = {};
  for (let student of students) {
    let grade = student.grade;
    if (!studentsGrade[grade]) {
      studentsGrade[grade] = [];
    }
    studentsGrade[grade].push(student);
  }
  return studentsGrade;
}
console.log(groupByGrade(students));

//-----------------------------------------------------------------------------------
// Створіть об'єкт original, який містить вкладені об'єкти.
// Напишіть функцію для глибокого клонування цього об'єкта, щоб зміни в клоні не впливали на оригінал.
let original = {
  name: "Продукт",
  details: {
    weight: "1kg",
    manufacturer: "Компанія",
  },
};

function deepClone(obj) {
  // Ваш код тут
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
console.log(deepClone(original));
//-----------------------------------------------------------------------------------
// Створіть два об'єкти obj1 і obj2, які містять деякі спільні властивості.
// Напишіть функцію, яка об'єднує ці два об'єкти в один, причому значення спільних властивостей повинні бути об'єднані в масиви.
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, c: 5, d: 6 };

function mergeObjects(obj1, obj2) {
  // Ваш код тут
  let obj3 = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      obj3[key] = obj1[key];
      console.log(obj1[key]);
    }
  }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj3.hasOwnProperty(key)) {
        obj3[key] = obj3[key] + obj2[key];
      } else {
        obj3[key] = obj2[key];
      }
    }
  }
  return obj3;
}
console.log(mergeObjects(obj1, obj2));
//-----------------------------------------------------------------------------------
// Створіть об'єкт settings, який містить властивості theme, language, notifications.
// Напишіть функцію, яка приймає масив ключів і значень, і динамічно додає ці властивості до об'єкта settings.
let settings = {
  theme: "dark",
  language: "uk",
  notifications: true,
};

function addProperties(settings, properties) {
  for (let i = 0; i < properties.length; i += 1) {
    let key = properties[i][0];
    let value = properties[i][1];
    settings[key] = value;
  }
}

let newProperties = [
  ["fontSize", "16px"],
  ["backgroundColor", "blue"],
  ["showSidebar", false],
];
addProperties(settings, newProperties);
console.log(settings);
//-----------------------------------------------------------------------------------
// Завдання : Пошук об'єктів за властивістю
// Дано масив об'єктів, кожен з яких описує певну подію. Реалізуй функцію findEvent(events, key, value),
// яка шукає та повертає об'єкт події за заданою властивістю (key) та її значенням (value).

const events = [
  { id: 1, name: "Концерт", date: "2024-09-01", location: "Київ" },
  { id: 2, name: "Виставка", date: "2024-09-10", location: "Львів" },
  { id: 3, name: "Фестиваль", date: "2024-09-15", location: "Одеса" },
];
function findEvent(events, key, value) {
  for (let i = 0; i < events.length; i += 1) {
    if (events[i][key] === value) {
      console.log(events[i][key]);
      console.log(value);

      return events[i];
    }
  }
  return;
}
let result = findEvent(events, "location", "Одеса");
console.log(result);

// console.log(findEvent(events, key2, value2));
//-----------------------------------------------------------------------------------
// Завдання : Об'єднання кількох об'єктів
// Дано два об'єкти, що містять дані про користувача. Об'єднай ці об'єкти у один, щоб уникнути дублікатів,
// але зберегти всі властивості, навіть якщо вони дублюються. Якщо властивості дублюються, залишити значення з другого об'єкта.

const user1 = {
  name: "Олександр",
  age: 25,
  email: "olex@example.com",
};

const user2 = {
  email: "alex@example.com",
  city: "Львів",
};
function sumUser(user1, user2) {
  let oneUser = {};
  for (const key in user1) {
    console.log(user1[key]);
    if (user1.hasOwnProperty(key)) {
      oneUser[key] = user1[key];
    }
  }
  for (const key in user2) {
    if (user2.hasOwnProperty(key)) {
      console.log(user2[key]);
      if (oneUser.hasOwnProperty(key) && oneUser[key] === user2[key]) {
        oneUser[key] = oneUser[key];
      } else {
        oneUser[key] = user2[key];
      }
    }
  }
  return oneUser;
}

console.log(sumUser(user1, user2));
// Реалізуй об'єднання об'єктів тут

//-----------------------------------------------------------------------------------
// Завдання : Фільтрація об'єктів у масиві
// Дано масив об'єктів, що описують товари в магазині. Реалізуй функцію filterProducts(products, criterion),
// яка повертає новий масив товарів, що задовольняють заданий критерій (наприклад, всі товари дешевші за 100 грн).

const products = [
  { name: "Молоко", price: 50 },
  { name: "Хліб", price: 30 },
  { name: "Сир", price: 150 },
  { name: "Яблука", price: 70 },
];

function filterProducts(products, criterion) {
  let listProduct = [];
  for (let i = 0; i < products.length; i += 1) {
    for (const key in products[i]) {
      console.log(products[i][key]);
      if (products[i][key] >= criterion) {
        listProduct.push(products[i]);
      }
    }
  }
  return listProduct;
}

console.log(filterProducts(products, 70));
// Реалізуй функцію filterProducts(products, criterion) тут

//-----------------------------------------------------------------------------------
// Створи об'єкт "магазин" з масивом товарів, кожен з яких має властивість name та price.
// Додай метод addDiscount, який додає властивість discount (у відсотках) до кожного товару,
// а також метод applyDiscount, який оновлює ціну товару з урахуванням знижки.

const store = {
  products: [
    { name: "Телефон", price: 10000 },
    { name: "Ноутбук", price: 20000 },
  ],
  addDiscount(discount) {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].discount = discount;
    }
  },
  applyDiscount() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].discount) {
        this.products[i].price =
          this.products[i].price -
          this.products[i].price * (this.products[i].discount / 100);
      }
    }
  },
};
store.addDiscount(10); // Додає знижку 10% до всіх товарів
store.applyDiscount();
console.log(store.products);
// Приклад використання:
// store.addDiscount(10); // Додає знижку 10% до всіх товарів
// store.applyDiscount();
// console.log(store.products);
// Виведе: [{ name: "Телефон", price: 9000 }, { name: "Ноутбук", price: 18000 }]

//-----------------------------------------------------------------------------------
// Створи об'єкт "книга", який містить інформацію про автора (об'єкт з властивостями firstName, lastName),
// видавця (об'єкт з властивостями name та location) та метод getAuthorFullName, який повертає повне ім'я автора.

const book = {
  title: "Захар Беркут",
  author: {
    firstName: "Іван",
    lastName: "Франко",
  },
  publisher: {
    name: "Видавництво Старого Лева",
    location: "Львів",
  },

  getAuthorFullName() {
    // let fullName = "";
    // for (const key in this.author) {
    //   fullName += this.author[key] + " ";
    // }
    // return fullName.slice(0, -1);
    return `${this.author.firstName} ${this.author.lastName}`;
  },
};

// Приклад використання:
console.log(book.getAuthorFullName()); // "Іван Франко"

//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
