// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName) {
// шукаємо відповідний камінь в масиві об'єктів
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "Камня не знайдено";
// }

// console.log(calcTotalPrice(stones, "Смарагд"));
// console.log(calcTotalPrice(stones, "Рубін")); //Камня не знайдено

/* ---------електронний багкінг--------------*/
// const transaction = { DEPOSIT: "deposit", WITHDRAW: "withdraw" };
// Object.freeze(transaction);

// const account = {
//   balance: 0,
/*історія транзакцій*/
// transactions: [],
/*метод створює та повертає об'єкт транзакцій.Прийьає суму та тип транзакції*/
// createTransaction(amount, type) {
//     return {
//       id: `${Date.now()}${Math.random().toString(36).substr(2, 9)}`,
//       amount,
//       type,
//     };
//   },
/* метод що відповідає за додавання суми до балансу.
  приймає суму, створює транзакцію, додає в історію транзакцій*/
//   deposit(amount) {
//     if (amount <= 0) {
//       return "error";
//     }
//     const item = this.createTransaction(amount, transaction.DEPOSIT);
//     this.balance += amount;
//     this.transactions.push(item);
//   },
/* метод зняття суми з балансу
  створює транзакцію, додає в історію,
  якщо мало грошей на балансіб виводить повідомлення */
//   withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//       return "Недостатнь коштів";
//     }
//     const item = this.createTransaction(amount, transaction.WITHDRAW);
//     this.transactions.push(item);
//     this.balance -= amount;
//   },
/* метод повертає поточний баланс */
//   getBalance() {
//     return this.balance;
//   },
/* метод шукає та повертає транзакцію по id*/
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "error";
//   },
/* метод повертає кількість коштів з усієї історії транзакцій*/
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(1000);
// account.deposit(200);
// account.withdraw(400);
// console.log(account);
// console.log(account.getTransactionDetails(account.transactions[1].id));
// console.log(account.getTransactionTotal(transaction.DEPOSIT)); //1200

/*-------------------зразок рекурсії (функція викликає мама себе---------------*/
// console.log("object");
// function countup(n) {
//   console.log(n);
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     console.log(countArray);
//     countArray.push(n);

//     return countArray;
//   }
// }

// console.log(countup(5));

/**---------функція яка формую linear-gradient з масиву градієнтів -----------*/
// let gradients = [
//   {
//     name: "violet-yellow",
//     colors: ["#CC66FF", "#FFC000"],
//   },
//   {
//     name: "laguna 3",
//     colors: ["#CC66FF", "#00B0F0", "#FFC000"],
//   },
// ];
// console.log(gradients);
// function createGradient(colors) {
//   if (!Array.isArray(colors) || colors.length === 0) {
//     console.log("Невірний формат кольорів");
//     return;
//   }
//   const step = 100 / colors.length;
//   const gradientColors = colors.map((color, index) => {
//     const percentage =
//       index === 0 ? Math.round(step * index) : Math.round(step * index + step);
//     return `${color} ${percentage}%`;
//   });
//   const gradient = `linear-gradient(0deg, ${gradientColors.join(", ")})`;
//   return gradient;
// }
// for (let i = 0; i < gradients.length; i += 1) {
//   console.log(`градієнт №${i + 1} - ${createGradient(gradients[i].colors)}`);
// }

//-------------------задача-"БАНК"------------------------//
// const bankAccount = {
//   owner: "Vadym",
//   balance: 650,
//   currency: "USD",
//   transactions: [],
//   deposit(amount) {
//     this.balance = (this.balance + amount).toFixed(2);
//     this.transactions.push(`Deposit:+${amount}`);
//   },
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance = (this.balance - amount).toFixed(2);
//       this.transactions.push(`Withdraw:-${amount}`);
//     } else {
//       let reshta = amount - this.balance.toFixed(2);
//       console.log(
//         `На рахунку бракує коштів (не вистачає ${reshta}${this.currency})`
//       );
//     }
//   },
//   getBalance() {
//     console.log(`Current balance: ${this.balance} ${this.currency}`);
//   },
//   getTransactionHistory() {
//     if (!this.transactions.length) {
//       console.log("No transactions yet");
//     } else {
//       console.log("Transaction history:");
//       this.transactions.forEach((t, i) => {
//         console.log(`${i + 1}. ${t}`);
//       });
//     }
//   },
//   changeCurrency(newCurrency, rate) {
//     const oldCurrency = this.currency;
//     this.balance = +(this.balance * rate).toFixed(2);

//     this.currency = newCurrency;
//     console.log(
//       `Currency changed from ${oldCurrency} to ${newCurrency}, new balance: ${this.balance} ${newCurrency}`
//     );
//   },
//   renameOwner(newName) {
//     const oldName = this.owner;
//     this.owner = newName;
//     console.log(`Owner changed from ${oldName} to ${newName}`);
//   },
//   summary() {
//     console.log(
//       `Owner: ${this.owner} | Balance: ${this.balance} ${this.currency} | Transactions: ${this.transactions.length}`
//     );
//   },
// };
// bankAccount.deposit(300);
// bankAccount.withdraw(800.2);
// bankAccount.getBalance();
// bankAccount.getTransactionHistory();
// bankAccount.changeCurrency("UAH", 41.7);
// bankAccount.renameOwner("Sergii");
// bankAccount.summary();
// console.log(bankAccount);

//----------------задача "БІБЛІОТЕКА"-------------//

// const library = {
//   name: "Міська",
//   books: [],
//   maxBooks: 4,
//   addBook(title, author) {
//     if (this.books.length + 1 <= this.maxBooks) {
//       this.books.push({ title: title, author: author, isRead: false });
//     } else {
//       console.log(`Перевищено ліміт книг - ліміт ${this.maxBooks} шт`);
//     }
//   },
//   markAsRead(title) {
//     let found = false;
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i].title === title) {
//         this.books[i].isRead = true;
//         found = true;
//         console.log(`Книгу "${title}" позначено як прочитану`);
//         break;
//       }
//     }
//     if (!found) {
//       console.log("Книгу не знайдено");
//     }
//   },
//   removeBook(title) {
//     let found = false;
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i].title === title) {
//         this.books.splice(i, 1);
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       console.log("Книгу не знайдено");
//     }
//   },
//   findBook(title) {
//     let found = false;
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i].title === title) {
//         let readOrNot;
//         if (!this.books[i].isRead) {
//           readOrNot = "No";
//         } else {
//           readOrNot = "Yes";
//         }
//         console.log(
//           `Title: ${this.books[i].title} | Author: ${this.books[i].author} | Read: ${readOrNot}`
//         );
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       console.log("Книгу не знайдено");
//     }
//   },
//   listBooks() {
//     for (let i = 0; i < this.books.length; i += 1) {
//       let readOrNot;
//       !this.books[i].isRead ? (readOrNot = " ") : (readOrNot = "X");
//       console.log(
//         `${i + 1}. [${readOrNot}] ${this.books[i].author} - ${
//           this.books[i].title
//         }`
//       );
//     }
//   },
//   getStats() {
//     let status = {
//       total: 0,
//       read: 0,
//       unread: 0,
//       spaceLeft: 0,
//     };
//     this.books.forEach((e, i) => {
//       !e.isRead ? (status.unread += 1) : (status.read += 1);
//       status.total = this.books.length;
//       status.spaceLeft = status.total - status.read;
//     });

//     console.log(status);
//   },
//   renameLibrary(newName) {
//     this.name = newName;
//     console.log(`Library renamed to '${this.name}'`);
//   },
// };
// library.addBook("Код Да Вінчі", "Ден Браун");
// library.addBook("Янголи та демони", "Ден Браун");
// library.addBook("Джерело", "Ден Браун");
// library.addBook("Інферно", "Ден Браун");
// library.markAsRead("Джерело");
// library.markAsRead("Код Да Вінчі");
// library.removeBook("Джерело");
// library.findBook("Код Да Вінчі");
// library.listBooks();
// library.getStats();
// library.renameLibrary("Мої книги");
// console.log(library);

//----------------задача "РЕСТОРАН"-------------//

// const order = {
//   tableNumber: 17,
//   items: [],
//   isPaid: false,
//   addItem(name, price, quantity) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name === name) {
//         this.items[i].quantity += quantity;
//         return;
//       }
//     }
//     this.items.push({
//       name: name,
//       price: price,
//       quantity: quantity,
//       isServed: false,
//     });
//   },

//   removeItem(name) {
//     let found = false;
//     for (let i = 0; i < this.items.length; i++) {
//       const e = this.items[i];
//       if (e.name === name) {
//         this.items.splice(i, 1);
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       console.log(`Такої страви як ${name} не має!`);
//     }
//   },
//   getTotal() {
//     let total = 0;
//     for (let i = 0; i < this.items.length; i++) {
//       const e = this.items[i];
//       if (!e.isServed) {
//         total += e.quantity * e.price;
//         console.log(total);
//       }
//     }
//   },

//   markAsServed(name) {
//     let found = false;
//     for (let i = 0; i < this.items.length; i++) {
//       const e = this.items[i];
//       if (e.name === name) {
//         e.isServed = true;
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       console.log(`Такої страви як ${name} не має!`);
//     }
//   },

//   getSummary() {
//     if (this.items.length === 0) {
//       console.log("Замовлення порожнє.");
//       return;
//     }
//     for (let i = 0; i < this.items.length; i++) {
//       const e = this.items[i];
//       const status = !e.isServed ? "Not Served" : "Served";
//       console.log(
//         `${i + 1}. ${e.name} х${e.quantity} - ${e.price} грн [${status}]`
//       );
//     }
//   },

//   pay() {
//     let allServed = [];
//     let found = false;
//     let summ = 0;
//     let total = 0;
//     for (let i = 0; i < this.items.length; i++) {
//       const e = this.items[i];
//       if (e.isServed) {
//         allServed.push(e);
//         summ = e.quantity * e.price;
//         total += summ;
//       }
//     }
//     if (allServed.length === this.items.length) {
//       this.isPaid = true;

//       found = true;

//       console.log(`Ваша сума до сплати ${total} грн`);
//     }
//     if (!found) {
//       console.log(`Замовлення ще не виконане повністю`);
//     }
//   },

//   reset() {
//     if (this.isPaid) {
//       this.items = [];
//       this.isPaid = false;
//     }
//   },
// };
// order.addItem("салат", 150, 2);
// order.addItem("хачапурі", 230, 4);
// order.addItem("салат", 150, 3);
// order.addItem("плов", 170, 1);
// order.removeItem("плов");
// order.markAsServed("хачапурі");
// order.markAsServed("салат");
// order.getTotal();
// order.getSummary();
// order.pay();
// order.reset();
// console.log(order.items);
// console.log(order);

//----------------задача "ФІТНЕС ДОДАТОК"-------------//

// const userProfile = {
//   name: "Andrii",
//   age: 28,
//   weight: 80, // кг
//   height: 175, // см
//   workouts: [],
//   addWorkout(type, duration) {
//     const today = new Date();
//     const day = String(today.getDate()).padStart(2, "0");
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     const year = today.getFullYear();
//     const currentDate = `${day}.${month}.${year}`;
//     this.workouts.push({ type: type, duration: duration, date: currentDate });
//   },
//   getWorkoutSummary() {
//     let workList;
//     let numberOfWork = this.workouts.length;

//     if (this.workouts.length === 0) {
//       console.log("Вправ поки не має");
//       return;
//     }
//     let totalDuration = 0;
//     for (let i = 0; i < this.workouts.length; i++) {
//       const e = this.workouts[i];
//       totalDuration += e.duration;

//       workList = `Загальна кількість вправ - ${numberOfWork} | Загальна тривалість ${totalDuration} хв`;
//     }
//     console.log(workList);
//   },
//   updateWeight(newWeight) {
//     const oldWeight = this.weight;
//     this.weight = newWeight;
//     const weightDifference =
//       oldWeight < newWeight
//         ? `різниця +${newWeight - oldWeight}`
//         : `різниця -${oldWeight - newWeight}`;

//     console.log(`Ваша нова вага ${newWeight} кг, (${weightDifference}кг)`);
//   },
//   calculateBMI() {
//     const bmi = (
//       this.weight /
//       ((this.height / 100) * (this.height / 100))
//     ).toFixed(2);
//     console.log(`Ваш індекс BMI - ${bmi}`);
//   },
//   getHealthStatus() {
//     const bmi = (
//       this.weight /
//       ((this.height / 100) * (this.height / 100))
//     ).toFixed(2);
//     if (bmi < 18.5) {
//       console.log("Недостатня вага");
//     } else if (bmi >= 18.5 && bmi < 25) {
//       console.log("Норма");
//     } else if (bmi >= 25 && bmi < 30) {
//       console.log("Надмірна вага");
//     } else if (bmi >= 30) {
//       console.log("Ожиріння");
//     } else {
//       console.log("Invalid BMI");
//     }
//   },
//   removeWorkoutByDate(date) {
//     let found = false;
//     let allWork = 0;
//     for (let i = this.workouts.length - 1; i >= 0; i--) {
//       const e = this.workouts[i];
//       if (e.date === date) {
//         this.workouts.splice(i, 1);
//         allWork++;
//         found = true;
//       }
//     }
//     if (found) {
//       console.log(`Видалено ${allWork} тренувань`);
//     } else {
//       console.log(`${date} тренувань не було`);
//     }
//   },
//   rename(newName) {
//     const oldName = this.name;
//     this.name = newName;
//     console.log(`Ви змінили ім'я ${oldName} на ${newName}`);
//   },
// };
// userProfile.addWorkout("плавання", 30);
// userProfile.addWorkout("присідання", 5);
// userProfile.addWorkout("прижки", 10);
// userProfile.addWorkout("біг", 45);

// userProfile.getWorkoutSummary();
// userProfile.updateWeight(78);
// userProfile.calculateBMI();
// userProfile.getHealthStatus();
// userProfile.removeWorkoutByDate("08.08.2025");
// userProfile.rename("Вадим");
// console.log(userProfile.workouts);
// console.log(userProfile);

//----------------задача "ДОДАТОК З РЕЦЕПТАМИ"-------------//

// const recipeBook = {
//   recipes: [],
//   addRecipe(title, ingredients, time) {
//     let found = false;
//     this.recipes.forEach((e) => {
//       if (e.title === title) {
//         console.log(`Страва "${title}" вже у списку`);

//         found = true;
//         return;
//       }
//     });
//     if (!found) {
//       this.recipes.push({
//         title: title,
//         ingredients: ingredients,
//         time: time,
//       });
//     }
//   },
//   removeRecipe(title) {
//     let found = false;
//     for (let i = this.recipes.length - 1; i >= 0; i--) {
//       const e = this.recipes[i];
//       if (e.title === title) {
//         this.recipes.splice(i, 1);
//         found = true;
//         return;
//       }
//     }
//     if (!found) {
//       console.log("Такої страви не має");
//     }
//   },
//   findRecipe(title) {
//     let found = false;
//     for (let i = 0; i < this.recipes.length; i++) {
//       let e = this.recipes[i];
//       if (e.title === title) {
//         found = true;
//         console.log(e);
//         return e;
//       }
//     }
//     if (!found) {
//       console.log("Такої страви не знайдено");
//     }
//   },
//   listAll() {
//     let ingList;
//     for (let i = 0; i < this.recipes.length; i++) {
//       const e = this.recipes[i];

//       ingList = e.ingredients.join(", ");

//       console.log(
//         `${i + 1}. "${e.title}" - інгридієнти: ${ingList}. Час приготування ${
//           e.time
//         }хв.`
//       );
//     }
//   },
//   filterByTime(maxTime) {
//     let found = false;
//     for (let i = 0; i < this.recipes.length; i++) {
//       const e = this.recipes[i];
//       if (e.time >= maxTime) {
//         found = true;
//         console.log(e);
//       }
//     }
//     if (!found) {
//       console.log(
//         `Страв, час готування яких більший ніж ${maxTime}хв, не знайдено`
//       );
//     }
//   },
//   updateIngredients(title, newIngredients) {
//     let found = false;
//     this.recipes.forEach((e) => {
//       if (e.title === title) {
//         e.ingredients = newIngredients;
//         found = true;
//       }
//     });
//     if (!found) {
//       console.log("Такої страви не знайдено");
//     }
//   },
//   hasIngredient(ingredient) {
//     const result = [];
//     let found = false;
//     for (let i = 0; i < this.recipes.length; i++) {
//       const e = this.recipes[i];
//       console.log(e.ingredients);
//       for (let j = 0; j < e.ingredients.length; j++) {
//         const el = e.ingredients[j];
//         if (el.includes(ingredient)) {
//           result.push(e.title);
//           found = true;
//           break;
//         }
//       }
//     }
//     !found
//       ? console.log(`Страв що містять інгрідієнт "${ingredient}" не знайдено`)
//       : console.log(
//           `Даний інгрідієнт входить до ${result.length} страв : ${result.join(
//             ", "
//           )}`
//         );
//   },
// };

// console.log(recipeBook);
// console.log(recipeBook.recipes);

// recipeBook.addRecipe(
//   "Салат 'Літній'",
//   ["помідори", "огірки", "цибуля", "олія", "спеції"],
//   10
// );
// recipeBook.addRecipe(
//   "Смажена картопля",
//   ["картопля", "цибуля", "олія", "спеції"],
//   15
// );
// recipeBook.addRecipe(
//   "Салат з буряка",
//   ["буряк", "цибуля", "олія", "спеції"],
//   5
// );
// recipeBook.addRecipe("Яєшня", ["помідори", "яйця", "олія", "спеції"], 8);
// recipeBook.addRecipe("Яєшня", ["помідори", "яйця", "олія", "спеції"], 8);

// recipeBook.removeRecipe("Смажена картопля");
// recipeBook.findRecipe("Яєшня");
// recipeBook.listAll();
// recipeBook.filterByTime(6);
// recipeBook.updateIngredients("Яєшня", ["яйця", "олія", "сир", "спеції"]);
// recipeBook.hasIngredient("цибуля");

// -------------задача TASKMANAGER----------------

const taskManager = {
  tasks: [],

  addTask(title, priority) {
    for (let i = 0; i < this.tasks.length; i++) {
      const e = this.tasks[i];
      if (e.title === title) {
        console.log("таке завдання вже існує");
        return;
      }
    }
    this.tasks.push({ title: title, priority: priority, isDone: false });
  },
  removeTask(title) {
    let found = false;
    for (let i = this.tasks.length - 1; i >= 0; i--) {
      const e = this.tasks[i];
      if (e.title === title) {
        this.tasks.splice(i, 1);
        found = true;
      }
    }
    if (!found) {
      console.log("такого завдання не має");
    }
  },
  markAsDone(title) {
    let found = false;
    for (let i = 0; i < this.tasks.length; i++) {
      const e = this.tasks[i];
      if (e.title === title) {
        e.isDone = true;
        found = true;
        return;
      }
    }
    if (!found) {
      console.log("такого завдання не має");
    }
  },
  listAll() {
    for (let i = 0; i < this.tasks.length; i++) {
      const e = this.tasks[i];
      let done = e.isDone ? "X" : " ";
      console.log(`[${done}] ${e.title} (Пріоритет:${e.priority})`);
    }
  },
  filterByPriority(priority) {
    let found = false;
    let allTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const e = this.tasks[i];
      if (e.priority === priority) {
        let doneOrNot = !e.isDone ? "(не виконано)" : "(виконано)";
        allTasks.push(`"${e.title}" ${doneOrNot}`);
      }

      found = true;
    }
    !found
      ? console.log(`Завдань з приоритетом "${priority}" не знайдено`)
      : console.log(
          `З пріорітетом "${priority}" знайдено ${allTasks.length} завдань: ${allTasks}`
        );
  },
  listPending() {
    let found = false;
    let allTasks = [];
    this.tasks.forEach((e) => {
      if (!e.isDone) {
        allTasks.push(`"${e.title}" (пріоритет - "${e.priority}")`);
        found = true;
      }
    });
    !found
      ? console.log("Всі завдання виконані")
      : console.log(
          `Знайдено невиконаних завдань - ${allTasks.length} : ${allTasks}`
        );
  },
  stats() {
    let found = false;
    let doneTasks = [];
    let doNotDoneTasks = [];
    this.tasks.forEach((e) => {
      !e.isDone ? doNotDoneTasks.push(e.title) : doneTasks.push(e.title);
      found = true;
    });
    !found
      ? console.log("Список завдань пустий")
      : console.log(
          `Кількість всіх завдань - ${
            doneTasks.length + doNotDoneTasks.length
          }, виконаних - ${doneTasks.length}, невиконаних - ${
            doNotDoneTasks.length
          }`
        );
  },
};
console.log(taskManager);
console.log(taskManager.tasks);
taskManager.addTask("заміна цінників", "medium");
taskManager.addTask("протерти пил", "low");
taskManager.addTask("помити вікно", "hight");
taskManager.addTask("виставити телефони", "hight");
taskManager.removeTask("протерти пил");
taskManager.markAsDone("виставити телефони");
taskManager.listAll();
taskManager.filterByPriority("hight");
taskManager.listPending();
taskManager.stats();

// taskManager;
