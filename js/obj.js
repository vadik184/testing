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

const order = {
  tableNumber: 17,
  items: [],
  isPaid: false,
  addItem(name, price, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        this.items[i].quantity += quantity;
        return;
      }
    }
    this.items.push({
      name: name,
      price: price,
      quantity: quantity,
      isServed: false,
    });
  },

  removeItem(name) {
    let found = false;
    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
      if (e.name === name) {
        this.items.splice(i, 1);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`Такої страви як ${name} не має!`);
    }
  },
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
      if (!e.isServed) {
        total += e.quantity * e.price;
        console.log(total);
      }
    }
  },

  markAsServed(name) {
    let found = false;
    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
      if (e.name === name) {
        e.isServed = true;
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`Такої страви як ${name} не має!`);
    }
  },

  getSummary() {
    if (this.items.length === 0) {
      console.log("Замовлення порожнє.");
      return;
    }
    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
      const status = !e.isServed ? "Not Served" : "Served";
      console.log(
        `${i + 1}. ${e.name} х${e.quantity} - ${e.price} грн [${status}]`
      );
    }
  },

  pay() {
    let allServed = [];
    let found = false;
    let summ = 0;
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const e = this.items[i];
      if (e.isServed) {
        allServed.push(e);
        summ = e.quantity * e.price;
        total += summ;
      }
    }
    if (allServed.length === this.items.length) {
      this.isPaid = true;

      found = true;

      console.log(`Ваша сума до сплати ${total} грн`);
    }
    if (!found) {
      console.log(`Замовлення ще не виконане повністю`);
    }
  },

  reset() {
    if (this.isPaid) {
      this.items = [];
      this.isPaid = false;
    }
  },
};
order.addItem("салат", 150, 2);
order.addItem("хачапурі", 230, 4);
order.addItem("салат", 150, 3);
order.addItem("плов", 170, 1);
order.removeItem("плов");
order.markAsServed("хачапурі");
order.markAsServed("салат");
order.getTotal();
order.getSummary();
order.pay();
order.reset();
console.log(order.items);
console.log(order);
