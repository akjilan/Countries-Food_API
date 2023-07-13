// const add = () => {
//   const FriendsContainer = document.getElementById("container-name");
//   const newFriend = document.createElement("div");
//   newFriend.innerHTML = `
// <h3>my Name is jilan </h3>
// `;
//   FriendsContainer.appendChild(newFriend);
// };

// optional chaining

// const myObject = {
//   'trees':{
//     'a':1,
//     'b':2
//   },
//   'name' : 'jilan',
//   'city' : 'tkg'
// }

// console.log(myObject.trees.a);

////////////////////////

///mapping

// const numbers = [11,22,33,42,5,26];
// const makedouble = numbers.map(x=>x/5);

// console.log(makedouble);

// const numbers = [11, 22, 33, 42, 5, 26];
// let doubling = function (num) {
//   return num + 1;
// };
// const makedouble = numbers.map(doubling);
//direct way:
// const makedouble = numbers.map(x=>x+1);
// console.log(makedouble);

//////////////////////////////

//dividing an array using map:

// const numbers = [5,24,343,343,3]

// direct way
// const dividing = numbers.map(x=>x/5);
// console.log(dividing);

//un direct way:

// const myDividing = function(x){
//   return x/5;
// }

// const afterDividing = numbers.map(myDividing);
// console.log(afterDividing);

//////////////////////////////

// using forEach: forEach doesn't return anything like map:

// const numbers = [5,24,343,343,3]
// numbers.forEach(x=>console.log(x*2));

//////////////////////////////

//using filters:
// const numbers = [5,24,343,343,3];
// const less100 = numbers.filter(x=> x%2==0);
// console.log(less100);
//////////////////////////////

//using find: only returns first one.
// const numbers = [5,24,343,343,3];
// const more100 = numbers.find(x=>x>300);
// console.log(more100);

/////////////////////////
//usig reduce:
// const numbers= [1,2,3,4,5];
// const sum = numbers.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

///////////////////////////////////////////////////
// prototypical inheritance:

// Create a parent object
// const parent = {
//     name: "John",
//     greet: function() {
//       console.log("Hello, my name is " + this.name);
//     }
//   };

//   // Create a child object
//   const child = Object.create(parent);
//   child.name = "Alice";

//   // Access property and method from the prototype
//   console.log(child.name); // Output: Alice
//   child.greet(); // Output: Hello, my name is Alice

///////////////////////////////////////////////////
//class : (also constructor)/extends/super:

//syntactic sugar:

// class Common {
//     constructor(name,agency){
//         this.name=name;
//         this.agency=agency;
//     }
//     name;
//     agency;

// }

// class Product extends Common{
//     constructor(name,agency,price){
//         super(name,agency);
//         this.price=price;
//     }
//     productType = 'vehical';
//     price;
//     notice(price){
//         console.log(`please pay ${price} to confirm order`);

//     }
// }

// class Developer extends Common{
//     constructor(name,agency,region){
//         super(name,agency);
//         this.region=region;
//     }

//     region;
//     program(name){
//         console.log(`thank you ${name}`)
//     }

// }

// const jilan = new Developer('jilan','bsoftare','asia');
// console.log(jilan);
// const bike =  new Product('yamaha fz 3','yamaha',12000);
// console.log(bike);
// jilan.program(jilan.name);

//////////////////////////////////////
//practice problem :reduce:
// const people = [
//     {name: 'meena',age:20},
//     {name: 'meena',age:21},
//     {name: 'meena',age:22}

// ]

// const totalAge = people.reduce((x,y)=>x + y.age,0);
// console.log(totalAge);
/////////////////////////////////////////
// just a test:
// let data = {
//     location : [
//         {
//             latitude:'23',
//             city : 'dhaka'
//         }
//     ]
// }
// console.log(data.location[0].city);
/////////////////////////////////
// How will you get the price from the product object?

// const product = {
//   name: "Laptop",
//   model: "Yoga 3",
//   price: 49000,
//   dusk: "512SSD",
// };

// const { price } = product;
// console.log(price);
