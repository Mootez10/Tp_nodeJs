//const,let,var
let x = 20;
var y=10;
const b=40;

//arrow functions

const add = (x, y) => {
    return x + y;
  };
  console.log(add(2, 3)); 

//tenarry operation
let isLoggedIn = true;
let v = isLoggedIn ? "Bienvenue !" : "Veuillez vous connecter.";

console.log(v); 

//regular expression 
const firstname = "Aouinti";
const lastname = "Mootez";

console.log(`${firstname} ${lastname}`); 

//spread object

const user = { name: "Mootez", age: 24 };
const userId = { ...user, id: 123 };

console.log(userId); 

//spread array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  
console.log(arr2); 


//Destruct Object

const person = {
    firstName: "Aouinti",
    lastName: "Mootez",
    age: 24,
  };
  

  let { firstName, age } = person;

  //Destruct Array
  const numbers = [10, 20, 30, 40, 50];
  let [num1, num2, num3] = numbers;