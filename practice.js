//1.when to use const & let
const hubby = 'Sarwar Khan';
let besty = 'Ragnar Lothbrok';
besty = 'Abrahan Lincon';

//2.template string
const myPhone = { name: 'Oppo A5', price: 1500, color: 'navy jade' }
const templateString = `My besty is ${besty}.`;
// console.log(templateString);
const templateStringOfObject = `I have a phone. Which is ${myPhone.name}.I got it for around ${myPhone.price} pricetag.`;
// console.log(templateStringOfObject);

//3.1 arrow function
const divideByFive = x => x / 5;
const result = divideByFive(10);
// console.log(result);

//3.2 
const multiplyTwoNumbers = (x, y) => (x + 2) * (y + 2);
const result2 = multiplyTwoNumbers(10, 5);
// console.log(result2);

//3.3
const multiplyThreeNumbers = (x, y, z) => x * y * z;
const result3 = multiplyThreeNumbers(10, 5, 4);
// console.log(result3);

//3.4
const multiplyTwoNumbersAgain = (x, y) => {
  const newX = x + 2;
  const newY = y + 2;
  const res = newX * newY;
  return res;
}
const result4 = multiplyTwoNumbersAgain(10, 5);
// console.log(result4);

//4.funciton delcaration vs arrow function
// function addTwoNumbers(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }
const addTwoNumbers = (num1, num2) => num1 + num2;
const result5 = addTwoNumbers(10, 5);
// console.log(result5);

//4.5 (have to check net)

//5.
const numbers = [1, 3, 4, 5, 35];
const result6 = numbers.map(number => number * 5);
// console.log(result6);

//6.I will find the odd numbers from the arrow numbers that has been declared right above this block, with filter function.
const theOddNumbers = numbers.filter(number => number % 2 != 0);
// console.log(theOddNumbers);

//7.
const itemsOnMydesk = [
  { name: 'water bottle', price: 343, color: 'white' },
  { name: 'table clock', price: 5000, color: 'black' },
  { name: 'Glass', price: 33, color: 'pink' },
  { name: 'keyboard', price: 5000, color: 'yellow' },
];
const the5000TakarObject = itemsOnMydesk.find(item => item.price == 5000);
// console.log(the5000TakarObject)

//7.5
/*
map-takes an given array and loops through each and every element and does some kind of operations on them and finally stores all of them in an arary.

forEach - it is used when we don't have to return anything from a function.

filter-it is used to see which elements are present in our array fulfilling our own conditions.

find- it finds the very first element which fulfills our conditions.

*/

//8.
const myNumbers = { x: 1, y: 2, z: 3 };
// const { x } = myNumbers;
// console.log(x);

//9.
const { x, y, z } = myNumbers;
const three = z;
// console.log(three);

//10.
function summation(num1, num2, num3 = 7) {
  return num1 + num2 + num3;
}
const sum = summation(1, 2);
// console.log(sum);

//11.
const university = {
  name: 'Daffodil International University',
  location: 'Shukrabad',
  subjects: {
    subject1: 'Computer Science & Enginnering',
    subject2: 'Software Engineering'
  },
  branches: ['main', 'city', 'jani na branch']
};
const { subject1 } = university.subjects;

// console.log(subject1);
//12.
const nums = { a: 1, b: 2, c: 3 };
const { a } = nums;
const findP = nums?.p?.q;
console.log(findP);