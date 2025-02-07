const myArray = [5, "Mango", 10, "Orange", 15];

const firstElement = myArray[0]; 
const lastElement = myArray[myArray.length - 1]; 
const middleElement = myArray[Math.floor(myArray.length / 2)]; 

console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);

const arrayLength = myArray.length;
console.log("Array Length:", arrayLength);

myArray.push("grape")
console.log("After push:", myArray);

myArray.pop(); 
console.log("After pop:", myArray);

myArray.unshift("Berry"); 
console.log("After unshift:", myArray);

myArray.shift(); 
console.log("After shift:", myArray);

myArray.splice(2, 1, "Guava"); 
console.log("After splice:", myArray);


for (let i = 0; i < myArray.length; i++) {
  console.log(`Element at index ${i}:`, myArray[i]);
}

myArray.forEach((element, index) => {
  console.log(`Element at index ${index}:`, element);
});

const [first, second, ...rest] = myArray;

console.log("First Element:", first);
console.log("Second Element:", second);
console.log("Remaining Elements:", rest);
