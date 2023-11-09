// //sayHi
// const sayHi = (name) => {
//   const personName = name;
//   return `Hi ${name}`
// }

// const result = sayHi("Linh");
// console.log("First word---", result)

// ///Constructing Promises
// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344
// };

// // Create a promise representing ordering sunglasses from an online store
// const myExecutor = (resolve, reject) => {
//   if (inventory.sunglasses > 0) {
//     resolve('Sunglasses order processed.');
//   } else {
//     reject('That item is sold out.');
//   }
// }

// //Create a function, orderSunglasses(). This function should have no parameters. It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.
// const orderSunglasses = () => {
//   return new Promise(
//     myExecutor
//   )
// }

// //Example

// function fetchUserData(userId) {
//   return new Promise((ok, no) => {
//     setTimeout(() => {
//       const users = {
//         1: { name: 'Alice', age: 30 },
//         2: { name: 'Bob', age: 25 },
//       };

//       const user = users[userId];
//       if (user) {
//         ok("user"); // Resolve the promise with the user data
//       } else {
//         no(new Error('User not found')); // Reject the promise if user is not found
//       }
//     }, 2000); // Simulating a network request delay
//   });
// }
// fetchUserData(1)
//   .then((res) => console.log('User found:', res))
//   .catch((error) => console.error('Error:', error.message));

// fetchUserData(3)
//   .then((user) => console.log('User found:', user))
//   .catch((error) => console.error('Error:', error.message));

//example where the error can occur in the then resolve
//   function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//       if (typeof num === 'number') {
//         resolve(num);
//       } else {
//         reject('Error: The input is not a number.');
//       }
//     });
//   }
// checkNumber("fa").then(
//   (result) => {
//     // Imagine an operation that could fail, like parsing JSON

//     console.log("In the result",result);
//     const parsedResult = JSON.parse(result); // This will throw an error
//     console.log("parsedResult",parsedResult);
//   },
//   (error) => console.log('Caught by .then() error handler:', error)
// ).catch (error => {
//   console.log('Caught by .catch() error handler:', error)
// });
// // const num = 5
// // console.log(typeof num);
// // console.log(JSON.parse(num));

// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344,
// };
// const order =[[]]

// console.log(inventory["sunglasses"]);

// function handle() {
//   return "ok"
// }

// const reject = () => {
//   return "no"
// }

//Write a function to get the data
// //first promise
// function getUserData(hasConnection) {
//   return new Promise((res, rej) => {
//     if (hasConnection) {
//       res({ name: 'John Doe', age: 30 });
//     } else {
//       rej('fail');
//     }
//   });
// }
// //second promise
// function greetingUser(user) {
//   return new Promise((res) => {
//     res(`Hi ${user.name}`);
//   });
// }

// // getUserData(true)
// //   .then((user) => {
// //     return greetingUser(user);
// //   })
// //   .then((data) => {
// //     console.log('2nd---', data);
// //     throw 'its a fake error at 2nd';
// //   })
// //   .catch((e) => console.log('error at catch()---', e));

// const inventory = {
//   a: 10,
//   b: 1,
// };
// const order1 = [
//   ['a', 1],
//   ['b', 2],
// ];
// const checkInventory = (order) => {
//   return new Promise((res, rej) => {
//     let inStock = order.every((item) => item[1] <= inventory[item[0]]);
//     if (inStock) {
//       res('ordered successfully');
//     } else {
//       rej('ordered fail');
//     }
//   });
// };

// // checkInventory(order1)
// //   .then((res) => console.log(res))
// //   .catch((rej) => console.log(rej));

// //Chaining
// getUserData(true)
//   .then((user) => {
//     return greetingUser(user);
//   })
//   .then((data) => {
//     console.log('2nd---', data);
//     return checkInventory(order1);
//   })
//   .then((orderStatus) => console.log(`You ${orderStatus}`))
//   .catch((e) => console.log('error at catch()---', e));




  //Example from Codeacademy
const store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99,
  },
  pants: {
    inventory: 236,
    cost: 7.99,
  },
  bags: {
    inventory: 17,
    cost: 12.99,
  },
};

const orderList = {
  items: [
    ['sunglasses', 1],
    ['bags', 2],
  ],
  giftcardBalance: 79.82,
};

//checkInventory

const checkInventory2 = (order) => {
  return new Promise((res, rej) => {
    const itemsList = order.items;
    let inStock = itemsList.every((item) => item[1] <= store[item[0]].inventory);
    if (inStock) {
      let total = 0;
      itemsList.forEach((item) => {
        total += item[1] * store[item[0]].cost;
      });
      res(total);
    } else {
      rej('ordered fail');
    }
  });
};

checkInventory2(orderList)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));
