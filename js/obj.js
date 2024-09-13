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
transactions: [],
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
  console.log("object");
function countup(n) {
  console.log(n);
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    console.log(countArray);
    countArray.push(n);

    return countArray;
  }
}

console.log(countup(5));
