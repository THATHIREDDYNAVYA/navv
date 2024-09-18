// Problem: 1

// Write a function called “addFive".
// Given a number, “addFive" returns 5 added to that number.
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0
//sol:
// function addFive(num) {
//     return num + 5;
// }

 //let result = addFive(5);
// console.log(result); // Output: 15
// result=addFive(0);
// console.log(result);
//  result=addFive(-5);
// console.log(result);


// Problem:2

// Write a function called “getOpposite".
// Given a number, return its opposite

// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a");
// getOpposite(5.5);

// Output:
// -5
// 0
// 5
// -1
// -1
//sol:
// function getOpposite(num){
//     if (typeof num ==='number'){
//         return -num;
//     }
//     else{
//         return -1;
//     }
// }
// let result=getOpposite(5)
// console.log(result);
// result=getOpposite(5);
// console.log(result);
// result=getOpposite(0);
// console.log(result);
// result=getOpposite(-5);
// console.log(result);
// result=getOpposite("5a");
// console.log(result);
// result=getOpposite(5.5);
// console.log(result);

// Problem:3

// Fill in your code that takes an number minutes and converts it to seconds.

// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120
//sol:
// function toSeconds(min){
//   return min*60;
// }

// let result=toSeconds(6);
// console.log(result);
// result=toSeconds(5);
// console.log(result);
// result=toSeconds(3);
// console.log(result);
// result=toSeconds(2);
// console.log(result);

// Problem:4

// Create a function that takes a string and returns it as an integer.

// Examples
// toInteger(“6") ➞ 6
// toInteger(“1000") ➞ 1000
// toInteger(“12") ➞ 12

// let mystr = "5";
// function toInteger(mystr) 
// {
// if(typeof mystr==="String")
// {return mystr;
// }

// }

// let myint = toInteger(mystr)
// console.log(myint); 

//sol:
// function toInteger(mystr){
//     if ( typeof mystr==='string'){
//         return mystr;
//     }
//     else{
//         return 0;
//     }
// }
// let myint =toInteger('1000');
// console.log(myint);//1000
// myint =toInteger('2500');
// console.log(myint);//2500
// myint =toInteger(1000);
// console.log(myint);//0

// Problem:5

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2

// let myint = 0;
// function nextNumber(myint) 
// {
// return myint+1;
// }

// let myNextint = nextNumber(myint)
// console.log(myNextint); 

//sol:
// function nextNumber(myint){
//     return myint+1;
// }

// let result=nextNumber(25);
// console.log(result);     //26
// result=nextNumber(1222345);
// console.log(result);    //1222346
// result=nextNumber(2);
// console.log(result);     //3


// Problem:6
// Create a function that takes an array and returns the first element.

// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500

// let arr = [1, 2, 3];
// function getFirstElement(arr) 
// {
// // result arr[0];
// }
// let data = getFirstElement(arr)
// console.log(data); 

//sol:
// function getFirstElement(arr){
//     return arr[0];
// }
// let arr=[2,3,4,5,6,7];
// let result=getFirstElement(arr);
// console.log(result);   //returns 2...

// let arr=[5,6,7];
// let result=getFirstElement(arr);
// console.log(result);  //returns 5...

// let arr=[224,74,87456,9];
// let result=getFirstElement(arr);
// console.log(result);  //returns 224...

// Problem:7
// Convert Hours into Seconds

// Write a function that converts hours into seconds.

// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400

// let arr = [1, 2, 3];
// function hourToSeconds(arr) {
//     for(let i=0;i<arr.length;i++)
//      return arr[i]*3600
//     }
    // let data = hourToSeconds(arr)
    // console.log(data)

    //sol:
    // function hourToSeconds(hours){
    //     return hours*3600;
    // }
    // let result=hourToSeconds(2);
    // console.log(result);               //7200
    //  result=hourToSeconds(24);
    // console.log(result);                //86400
    // result=hourToSeconds(3456);
    // console.log(result);        //12441600
    //  result=hourToSeconds(0);
    // console.log(result);        //0


 // Problem:8
 // Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

// // Examples
// // findPerimeter(6, 7) ➞ 26
// // findPerimeter(20, 10) ➞ 60
// // findPerimeter(2, 9) ➞ 22
// function findPerimeter(num1,num2) {
//     // return 2(num1+num2)
//     }
//     let peri = findPerimeter(6,7)
//     console.log(peri);

sol:
function findPerimeter(l,b){
    return 2*(l+b);
}
let perimeter=findPerimeter(2,3)
console.log(perimeter);     //10
perimeter=findPerimeter(1,1)
console.log(perimeter);     //4
perimeter=findPerimeter(22,23)
console.log(perimeter);     //90


// Problem:9
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// 83 + 34 = 117
// function lessThan100(num1,num2) {
//     let sum=num1+num2
//     return sum<100
//     }
    // let res = lessThan100(22,15)
    // console.log(res)

    //soll:
function lessThan100(number1,number2){
        let summation=number1+number2;
        return summation<100;
    }
let ans=lessThan100(2,3)
console.log(ans);   //true
ans=lessThan100(2345,1234)
console.log (ans);      //false


// Problem:10
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
// function remainder(num1,num2) {
//     return num1%num2
//    }
   // let res = remainder(1,3)
   // console.log(res)

//sol:
function remainder(int1,int2){
    return (int1%int2);
}
let remain=remainder(23,23);
console.log(remain);        //0
remain=remainder(23,24);
console.log(remain);        //23


// Problem:11
// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50
// function CountAnimals(tur,horse,pigs) {
// }
// let legs = CountAnimals(2,3,5)

//sol:
function CountAnimals(turkey,horse,pig){
    return (2*turkey)+(4*horse)+(4*pig);
}
let legs=CountAnimals(2,3,5);
console.log(legs)           //36

// Problem:12
// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000
// function frames(num1,num2) {
// }
// let fps = frames(1,2)

//sol:
function frames(mins,fps){
    const secs=(mins*60);
    total_frames=( secs*fps);
    return total_frames;
}
let FPS=frames(1,24);
console.log(FPS);   //1440
FPS=frames(24,24);
console.log(FPS);       //34560
FPS=frames(10,25);
console.log(FPS);       //15000

// Problem:13

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
// function divisibleByFive(num1) {
// }
// let divisible = divisibleByFive(5)

//sol:
function divisibleByFive(n1){
    if(n1%5==0){
        return true;
    }else{
        return false;
    }
}
let div=divisibleByFive(25);
console.log(div);       //true
div=divisibleByFive(26);
console.log(div);           //false


// Problem :14
// Write a function called “isEven".
// Given a number, “isEven" returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h");

// Output:
// true
// true
// false
// -1

function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
    }
let even=isEven(25);
console.log(even);      //false
even=isEven(2);
console.log(even)  ;        //true
    // let even = isEven(5)
    

    // Problem:15

// Write a function called “areBothOdd".
// Given 2 numbers, “areBothOdd" returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);

// Output:
// true
// flase
// flase
// flase

function areBothOdd(num1, num2){
    // your code here
    if(num1%2 && num2%2 !==0){
        return true;
    }else{
        return false;
    }
    }
let odd=areBothOdd(25,35);
console.log(odd);           //true
odd=areBothOdd(1234,4342);
console.group(odd);         //false

// Problem:16
// Write a function called “getFullName".
// Given a first and a last name, “getFullName" returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI", “GEEK");
// getFullName(“GUVI", );
// getFullName(, “GEEK");
// getFullName(“", “");

// Output:
// “GUVI GEEK"
// “GUVI"
// “GEEK"
// “"

function getFullName(firstName, lastName){
    // your code here
    return firstName+lastName;
    }
let namefull=getFullName("Navya"," Thathireddy");
console.log(namefull);                      //Navya Thathireddy
namefull=getFullName("baby"," sree");
console.log(namefull);                      //baby sree


// Problem:17

// Write a function called “getLengthOfWord".
// Given a word, “getLengthOfWord" returns the length of the given word.

// Input:
// getLengthOfWord(“GUVI");
// getLengthOfWord(“");
// getLengthOfWord();
// getLengthOfWord(9);

// Output:
// 4
// 0
// -1
// -1
function getLengthOfWord(word1){
    // your code here
    return word1.length;
    }
let len=getLengthOfWord("NAVYA");
console.log(len);                       //5
len=getLengthOfWord("BABYSREE");
console.log(len);                   //8


// Problem:18
// Write a function called “isSameLength".
// Given two words, “isSameLength" returns whether the given words have the same length.

// Input:
// isSameLength(“GUVI", “GEEK");

// Output:
// true

function isSameLength(word1, word2){
    // your code here
    if(word1.length==word2.length){
        return true;
    }else{
        return false;
    }
    }
res=isSameLength("navy","navya");
console.log(res);                       //false
res=isSameLength("mom","dad");
console.log(res);                           //true


// Problem:19
// Create a function to calculate the distance between two points defined by their x, y coordinates
// console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2){
    x=x2-x1;
    y=y2-y1;
    dist=Math.sqrt((x*x)+(y*y));
    return dist;

}
let dis=getDistance(100,100,400,300);
console.log(dis);                   //360.55......



// Problem:20
// Write a function called “getNthElement".
// Given an array and an integer, “getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

// Input:
// getNthElement([1, 3, 5], 1);

// Output:
// 3
function getNthElement(array,n){
    if(array.length===0){
        return undefined;
    }else{
        return array[n];
    }

}
let element=getNthElement([1,23,34,45,65],3)
console.log(element);               //45
element=getNthElement([],3);
console.log(element);                   //undefined



// Problem:21
// Write a function called “getLastElement".
// Given an array, “getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

// Input:
// getLastElement([1, 2, 3, 4]);

// Output:
// 4

function getLastElement(array){
    // your code here
    if(array.length===0){
        return -1;
    }
    else{
        return array[array.length-1];
    }
    }
last_element=getLastElement([2,3,4,5,6,7,8,9]);
console.log(last_element);                     // 9
last_element=getLastElement([]);
console.log(last_element) ;                 //-1


// Problem:22
// Write a function called “getProperty".
// Given an object and a key, “getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

// let obj = {
// mykey: “value"
// };

// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);

// Output:
// value
// NA
// let obj = {
// mykey: “value"
// };
function getProperty(obj, key) {
    // your code here
    return obj[key];
    }
let details={
    name2:"navya",
    class:"e2",
    id:210569,
};
console.log(getProperty(details,'name2'));          //navya
console.log(getProperty(details,'village'));            //undefined
console.log(getProperty(details,'id'));                 //210569


// Problem:23
// Write a function called “addProperty".
// Given an object and a key, “addProperty" adds a new property on the given object with a value of true.

// let obj = {
// }

// Input:
// addProperty(obj, “mykey");

// Output:
// {
// mykey: true
// }
// let obj = {
// mykey: “value"
// };
// function addProperty(obj, key){
//     // your code here
//      obj[key]=true;
//     }
// let info={
//     name1:'navv',
//     village:'chittoor',
//     landmark:'kpmitta',
//     isit:''
// };
// console.log(addProperty(isit))



// Problem:24
// Write a function called “removeProperty".
// Given an object and a key, “removeProperty" removes the given key from the given object.

// Input:
// removeProperty(obj, “name");

// Output:
// undefined

function removeProperty(obj, key){
    // your code here
    delete obj[key];
    }
    let info={
            name1:'navv',
            village:'chittoor',
            landmark:'kpmitta',

    };
console.log(removeProperty(info,'name1')); //undefined
console.log(removeProperty(info,'name45'));//undefined
console.log(info);      //village:'chittoor',landmark:'kpmitta',


// Problem:25
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar22 = function countPositivesSumNegatives(arr) {
    let positiveCount = 0;
    let negativesum = 0;
  
    for (let num of arr) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativesum += num;
      }
    }
  
    return [positiveCount, negativesum];
  };
  
  let resu = ar22([1, 2, 3, 4, 5, -2, -5]);
  console.log(resu); // Output: [5, -7]


  //problem 26:
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
//sol:
function getPositives(ar){
    return ar.filter(num=>num>0);
// your code here
}
const arr=[25,-8,-9,23];
let ar2=getPositives(arr);
console.log(ar2);
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar222 = getPositives(ar);
// console.log(ar222);
    

// Problem:27

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)

// Output:
// 1
// 1,2
// 1,2,4
function powersOfTwo(n){
    const power=[];
    for(let i=0;i<=n;i++){
        power.push(Math.pow(2,i));
    }
    return power;
  };
   let po1=powersOfTwo(3);
  console.log(po1);         //2,4,8
  po1=powersOfTwo(15);
  console.log(po1);     //(16) [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]



  //problem 28:
  // Find the maximum number in an array of numbers
// function findMax(ar)
// {
// // your code here
// return 
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let max = findMax(ar);
// console.log(“Max: “, max);
function findMax(ar) {
    let max = ar[0]; // Initialize max to the first element
  
    for (let i = 1; i < ar.length; i++) {
      if (ar[i] > max) {
        max = ar[i]; // Update max if a larger element is found
      }
    }
  
    return max;
  };
let max=findMax([23,22,21,26,23,28,234]);
console.log(max);       //234


// Problem:29

// Print the first 100 prime numbers
// printPrimes(100);

// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
// {
// let n = 0;
// let i = 2;

// while(n < nPrimes)
// {
// if (isPrime(i))
// {
// console.log(n, " → ", i);
// n++;
// }

// i++;
// }
// }
// // Returns true if a number is prime
// function isPrime(n)
// {
// // your code here
// }
// Problem:29

// Print the first 100 prime numbers
// printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
    let n = 0;
    let i = 2;
  
    while (n < nPrimes) {
      if (isPrime(i)) {
        console.log(n, " → ", i);
        n++;
      }
  
      i++;
    }
  }
  
  // Returns true if a number is prime
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  printPrimes(100);


  // Problem:30

// Create a function that will return in an array the first “nPrimes" prime numbers greater than a particular number “startAt"
// console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
    const primeNumbers = [];
    let count = 0;
    let i = startAt + 1;
  
    while (count < nPrimes) {
      if (isPrime(i)) {
        primeNumbers.push(i);
        count++;
      }
      i++;
    }
  
    return primeNumbers;
  }
  
  // Returns true if a number is prime
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(getPrimes(10, 100));



  // Problem:31

// Reverse a string
// let s = reverseString("JavaScript");
// console.log(s);
function reverseString(s) {
    let reversed = "";
  
    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
    }
  
    return reversed;
  }
  
  // Example usage:
  let s = reverseString("JavaScript");
  console.log(s); // Output: "tpircSavaJ"


  // Problem:32

// Create a function that will merge two arrays and return the result as a new array
// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];
// let ar = mergeArrays(ar1, ar2);
// console.log(ar);
function mergeArrays(ar1, ar2) {
    let result = [];
  
    //this will add the first array to the result array
    for (let el of ar1) {
      result.push(el);
    }
  
    // Add the second array to the result array
    for (let el of ar2) {
      result.push(el);
    }
  
    return result;
  }



  // Problem:33

// Calculate the sum of numbers received in a comma delimited string
// console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s) {
    const numbers = s.split(",");
    let sum = 0;
  
    for (let num of numbers) {
      sum += parseFloat(num);
    }
  
    return sum;
  }