
// var x = 10;
// var y = 20;
// a ();
 

// function a ()
// {
//     var x = 30;
//     console.log(x);
//     b ();
// }
// function b ()
// {
//     var x = 40;
//     console.log(x);
//     console.log(y);
// }

  
// var a = 12;   
// {
// let b ;
// b = 45;
// console.log (b);
// var c = 34;
// c = 56;
// console.log (c);
// const d = 34;
// }



// if (true)
// {
//     var a = 10;
//     let x = 20;
//     const y = 30;
//     console.log (a);
//     console.log (b);
//     console.log (c);
// }
// console.log (a);
// console.log (b);
// console.log (x);


// function x ()
// {
//     var a = 12;
//     function y ()
//     {
//         var b = 34;
//         console.log (a);
//     }
//     y ();
// }
// x ();



// function x ()
// {
//     var i = 1;
//     setTimeout(function () {console.log (i);}, 3000);
//     console.log ("Namaste JavaScript");
// }



// function x ()
// {
//         for (var i = 1; i <= 5; i ++)
//         {
//             function close ()
//             {
//                 {
//                     setTimeout(function () {console.log (i);}, i * 1000);
//                 }
//             }    
//             close ();
//         }
// }
// x ();



// function outest ()
// {
//     var a = 10;
//     function outer ()
//     {
//         var b = 20;
//         function inner ()
//         {
//             var c = 30;
//             console.log (a, b, c);
//         }
//         inner ();
//     }
//     outer ();
// }
// outest ();







// function x ()
// {
//     var a = 10;
//     console.log (a);
// }

// function y (parameter1)
// {
//     parameter1 ();
// }
// y (x);


// OR 










// var a = 10;

// function attachEventListener ()
// {
//     let count = 0;
//     document.getElementById ("clickMe").addEventListener ("click", function xyz ()
//     {
//         count ++;
//         console.log ("Button Clicked", count , "times");
//     });
// }
// attachEventListener ();


// let startDate = new Date ().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) 
// {
//     endDate = new Date ().getTime();
// }    
// console.log ("while expires");



// Higher Order Function
// function x ()
// {
//     console.log ("Namaste JavaScript");
// }
// function y ()
// {
//     console.log ("Hello World");
// }
// function z (parameter1 , parameter2)
// {
//     parameter1 ();
//     parameter2 ();
// }
// z (x , y);   


// const radius = [3, 1, 2, 4];
// const calculateArea = function (radius)
// {
//     const output = [];
//     for (let i = 0; i < radius.length; i ++)
//     {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log (calculateArea (radius));

// const calculateCircumference = function (radius)
// {
//     const output = [];
//     for (let i = 0; i < radius.length; i ++)
//     {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log (calculateCircumference (radius));

           // OR
// const radiusArr = [3, 1, 2, 4];
// const area = function (radius)
// {
//     return Math.PI * radius * radius;
// }



// const circumference = function (radius)
// {
//     return 2 * Math.PI * radius;
// }



// const calculate = function (radiusArr, logic)
// {
//     const output = [];
//     for (let i = 0; i < radiusArr.length; i ++)
//     {
//         output.push (logic (radiusArr[i]));
//     }
//     return output;
// }
// console.log (calculate (radiusArr, area));
// console.log (calculate (radiusArr, circumference));

              // OR 

// console.log (radiusArr.map (area));




// Array.prototype.calculate = function (logic)
// {
//     const output = [];
//     for (let i = 0; i < this.length; i ++) // this here refers to radiusArr because calculate is called using radiusArr .
//     {
//         output.push (logic (this[i]));
//     }
//     return output;
// }
// console.log (radiusArr.calculate (area));

 
 

// Transfrmation using map () , filter () , reduce ()

//  using map ()


// const arr = [1, 2, 3, 4];
// const doubleValues = function (n)
// {
//     return 2 * n;
// }
// const tripleVaues = function (n)
// {
//     return 3 * n;
// }
// const binarValues = function (n)
// {
//     return n.toString (2);
// }
// console.log (arr.map (doubleValues));
// console.log (arr.map (tripleVaues));
// console.log (arr.map (binarValues));


// Using filter ()
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isOdd = function (n)
// {
//     return n % 2 !== 0;
// }
// const isEven = function (n)
// {
//     return n % 2 === 0;
// }
// const greaterThanFive = function (n)
// {
//     return n > 5;
// }
// console.log (arr1.filter (isOdd));
// console.log (arr1.filter (isEven));
// console.log (arr1.filter (greaterThanFive));



// using reduce ()
// const arr2 = [1, 2, 3, 4];  
// function findSum (arr2)
// {
//     let sum = 0;
//     for (let i = 0; i < arr2.length; i ++)
//     {
//         sum += arr2[i];
//     }
//     return sum;
// }
// console.log (findSum (arr2));

        //    OR

// function sum (accumulator, currentValue)
// {
//     accumulator = accumulator + currentValue;
//     return accumulator;
// }
// console.log (arr2.reduce (sum , 0)); // 0 is the initial value of accumulator 





// function findMax (arr2)
// {
//     let max = 0;
//     for (let i = 0; i < arr2.length; i ++)
//     {
//         if (arr2[i] > max)
//         {
//             max = arr2[i];
//         }
//     }
//     return max;
// }
// console.log (findMax (arr2));




// function max (accumulator, currentValue)
// {
//     if (currentValue > accumulator )
//     {
//         accumulator = currentValue;
//     }
//     return accumulator;
// }
// console.log (arr2.reduce (max, 0));



// const users =
// [
//     {
//         firstName : "Harshit", lastName : "Sharma", age : 26
//     },
//     {
//         firstName : "Mohit", lastName : "Sharma", age : 75
//     },
//     {
//         firstName : "Ankit", lastName : "Sharma", age : 50
//     },
//     {
//         firstName : "Ankur", lastName : "Sharma", age : 26
//     }
// ];


// function getFullName (nameValue)
// {
//     return `${nameValue.firstName} ${nameValue.lastName}`;
// }

// console.log (users.map (getFullName));




//  acc = {26 : 2 , 75 : 1 , 50 : 1}
// function groupByAge (accumulator, currentValue)
// {
//     if (accumulator[currentValue.age])
//     {
//         accumulator[c urrentValue.age]++;
//     }
//     else
//     {
//         accumulator[currentValue.age] = 1;
//     }
//     return accumulator;
// }
// console.log (users.reduce (groupByAge, {}));


// give me the name of users whose age is less than 30
// function isAgeLessThan30 (user)
// {
//     return user.age < 30;
// }
// console.log (users.filter (isAgeLessThan30).map ( (user) => user.firstName));



// by using reduce ()
// function getFirstNames (accumulator, currentValue)
// {
//     if (currentValue.age < 30)
//     {
//         accumulator.push (currentValue.firstName);
//     }
//     return accumulator;
// }
// console.log (users.reduce (getFirstNames, []));



// Callback hell
// const cart = ["Shoes", "Shirt", "Pant"];
// createOrder (cart , function (orderId)
// {
//         proceedToPayment (orderId , function (paymentInfo)
//         {
//                 showOrderSummery (paymentInfo , function ()
//                 {
//                         updateWalletBalance ();
//                 });
//         });
// });


// Promises
// const githubAPI = "https://github.com/GY77086";
// const user = fetch (githubAPI);
// console.log (user);

// const promise = createOrder (cart);
// promise.then (function (orderId)
// {
//         proceedToPayment (orderId);
// });


// OR
// Promise Chaining
// createOrder (cart)
// .then (function (orderId)
// {
//         return proceedToPayment (orderId);
// }).then (function (paymentInfo)
// {
//         return showOrderSummery (paymentInfo);
// })
// .then (function (paymentInfo)
// {
//         return updateWalletBalance (paymentInfo);
// });


// OR
// createOrder (cart)
// .then ( (orderId) => proceedToPayment (orderId))
// .then ( (paymentInfo) => showOrderSummery (paymentInfo))
// .then ( () => updateWalletBalance());




// const cart = ["Shoes", "Shirt", "Pant"];
// const promise = createOrder (cart); // return orderId
// promise
// .then (function (orderId)
// {
//         console.log (orderId);
// })
// .catch (function (err)
// {
//         console.log (err.message);
// });


// Producer end 
// function createOrder (cart)
// {
//     const pr = new Promise (function (resolve, reject)
//     {   
//         // validateOrder
//         // validateCart
//         if (!validateCart (cart))
//         {
//                 const err = new Error ("Cart is not valid");
//                 reject (err);
//         }
//         // Logic for createOrder
//         const orderId = "12345";
//         if (orderId)
//         {
//                 setTimeout (function ()
//                 {
//                         resolve (orderId);
//                 }, 5000);
//         }

//     });
//     return pr;
// }
// function validateCart (cart)
// {
//     return false;
// } 


// Aync - Await : Used to handle promises more easily
// // Async Function : It always return a promise
// const pr = new Promise ((resolve , reject) => resolve ("Promise is resolved"));
// async function getData ()
// {
//         return pr;
// }

// const dataPromise = getData ();
// console.log (dataPromise);
// dataPromise.then ((result) => console.log (result));





// Await : A keyword that can be used inside an async function only to wait for a promise .
// async function handlePromise ()
// {
//         const pr = new Promise ((resolve , reject) => setTimeout(() => resolve (" Hey Promise is resolved !"), 10000));
//         const result = await pr; // wait until the promise is resolved
//         console.log (result);
// }
// handlePromise ();



// Diving deep into Async and Await
// const pr = new Promise ((resolve , reject) => setTimeout (() => resolve ("Promise is Resolved") , 5000));
// function getData ()
// {
//         pr.then ((result) => console.log (result));
//         console.log ("Namaste JavaScript");
// } 
// getData ();

// Diference between normal way of handling promise and using async - await
// const pr = new Promise ((resolve , reject) => setTimeout(() => resolve (" Promise is resolved "), 5000));
// async function handlePromise ()
// {
//         // JS Engine will wait until the promise is resolved
//         const val = await pr;
//         console.log ("Namaste JavaScript");
//         console.log (val);
// }
// handlePromise ();


// const pr1 = new Promise ((resolve , reject) => setTimeout(() => resolve (" Promise 1 is resolved "), 15000));
// const pr2 = new Promise ((resolve , reject) => setTimeout(() => resolve (" Promise 2 is resolved "), 30000));
// async function handlePromise ()
// {
//         console.log ("Hello World");
//         const val1 = await pr1;
//         console.log ("Namsate JavaScript 1");
//         console.log (val1);

//         const val2 = await pr2;
//         console.log ("Namsate JavaScript 2");
//         console.log (val2);
// }
// handlePromise ();

// function getaData ()
// {

//         // JS Engine will not wait here for the promise to be resolved
//         pr.then ((result) => console.log (result));
//         console.log ("Namaste JavaScript");
// }
// getaData();



// const apiURL = "https://api.github.com/users/";
// async function handlePromise ()
// {
//         try
//         {
//                 const data = await fetch (apiURL);
//                 const jsonValue = await data.json ();
//                 console.log(jsonValue);

//                 // OR 
//                 // fetch ().then (result => result.json ()).then (res => console.log ());

//         }
//         catch (err)
//         {
//                 console.log (err.message);
//         }
        
        

// }
// handlePromise ();

const p1 = new Promise ((resolve , reject) => setTimeout(() => reject ("Promise 1 is rejected"), 3000));
const p2 = new Promise ((resolve , reject) => setTimeout(() => reject ("Promise 2 is rejected"), 5000));
const p3 = new Promise ((resolve , reject) => setTimeout(() => reject ("Promise 3 is rejected"), 2000));

Promise.any ([p1, p2, p3]).then ((result) => console.log (result)).catch ((err) =>  {console.error (err); console.log (err.errors); });













// let msg = prompt ("set your password");
// console.log (msg);
// let str = "    Hello World    ";
// let trimmedStr = str.trim();
// console.log(trimmedStr); // "Hello World"
// console.log (str); // "    Hello World    "
// let upperStr = trimmedStr.toUpperCase ();
// console.log(upperStr); // "HELLO WORLD"
// console.log (trimmedStr);


// Method Chaining
// let str = "              Hello World    ";
// console.log (str.trim().toUpperCase()); // "HELLO WORLD"

// let str = "ApnaCollege";
// console.log(str.slice (-2));


// let carsBrand1 = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log(carsBrand1.join(" - ")); // "BMW - Audi - Mercedes - Toyota" // Joins all elements of the array into a string with the specified separator .
// console.log(carsBrand1.join(" | ")); // "BMW | Audi | Mercedes | Toyota"
// console.log(carsBrand1.join("")); // "BMWAudiMercedesToyota" (no separator)
// console.log(carsBrand1.join(" % ")); // "BMW % Audi % Mercedes % Toyota"