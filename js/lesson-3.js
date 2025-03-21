// const arr = [12, 22, 3, 14, 45, 16, 57];
// const min = Math.min(...arr);
// console.log(arr); //[12, 22, 3, 14, 45, 16, 57]
// console.log(min); //3

const user = {
  user: "test",
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
  },
};
const {
  name,
  skills: { css, js, html },
} = user;
console.log(js, html); //true

// const { age: userAge } = user;
// console.log(age); // помилка
// console.log(userAge); // 11

// function foo({ name }, car: {bmw = 'none'}={ }) {
//     console.log(bmw)
// }
// foo({ name: 'user1', car: { bmw: 'X5' } })
// foo({ name: 'user1', car: { audi: 'A6' } })
// foo({name:'user1'})
