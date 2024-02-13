 //practical 1
// function x(foo){
//     console.log('hello' ,foo);
//     console.log(typeof foo);

// }
// x(true);
// console.log(typeof x);

// function x(foo){
//     const x = 6;
//     console.log('hello' ,foo);
//     console.log(typeof foo);

// }
// x(true);
// console.log(typeof x);

// function x(foo){
//     let x = 5;
//     console.log('hello' ,foo);
//     console.log(typeof foo);

// }
// x(true);
// console.log(typeof x);

// function y(a){
//     return (a-32)*5/9;
// }
// console.log(y(20));
// console.log(y(50));

// // Input
// const readline=require('readline');
// // readline for import
// const a = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// a.question('Enter a value:', (userInput)=>{
//     console.log('your value:', (userInput));
//     a.close();
// })


// Input
// const readline = require('readline');
// // readline
// const a = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// a.question('Enter a value:', (userInput) => {
//     const num = parseFloat(userInput);
//     if(!isNaN(num)){
//         console.log('your value: ', (userInput))
//     }
//     else{
//         console.log('invalid value');
//     }
//     a.close();
// });

// function countdown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 1;
//     if(nextNumber>0){
//         countdown(nextNumber);
//     }
// }
// countdown(10);

// function countdown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 4;
//     if(nextNumber>0){
//         countdown(nextNumber);
//     }
// }
// countdown(10);

// function welcome (){
//     console.log("welcome to time code");
// // 1s=1000ms
// }
// function welcome1 (){
//     console.log("i am set interval");
// }
// function welcome2 (){
//     console.log("i am set immediate");
// }
// var id1 = setTimeout(welcome, 5000);
// var id2 = setInterval(welcome1, 1000);
// var id3 = setImmediate(welcome2, 3000);

// clearTimeout(id1);
// clearInterval(id2);

// Timer module ka import
// const { setTimeout } = require('timers');

// // Samayantarta se karya shuru karne ka udaharan
// console.log('Karya shuru hone wala hai...');

// // setTimeout() ka istemal
// setTimeout(() => {
//     console.log('Karya samapt ho gaya!'); // Sandesh ko kuch der baad dikhaana
// }, 50000); // 3000 milliseconds (3 seconds) baad karya shuru hoga

// // Timer module ka import
// const { setInterval } = require('timers');


// // setInterval() ka istemal
// const intervalID = setInterval(() => {
//     console.log('Namaste!'); // Ek sandesh ko pratividhi mein dikhaana
// }, 2000); // Har 2 seconds ke antaral par sandesh dikhaana

// // 10 seconds ke baad setInterval() ko band karna
// setTimeout(() => {
//     clearInterval(intervalID); // setInterval() ko band karne ka kaam
//     console.log('Pratividhi samapt ho gayi hai!'); // Sandesh ko dikhaana
// }, 10000); // 10 seconds ka samay
// const { futimes } = require('fs');
// const readline = require('readline');
// // readline
// const a = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// a.question('Enter a value:', (userInput) => {
//     const num = parseFloat(userInput);
//     if(!isNaN(num)){
//         table(num);
//     }
//     else{
//         console.log('invalid value');
//     }
//     a.close();
// });
// // function table(fromNumber){
//     let num =0;
//     console.log("table : ");
//     let interval=setInterval(function(){
//         num++;
//         if(num<11){
//             console.log(fromNumber,"*",num,"=",
//             fromNumber*num);
            
//         } else {
//             console.log('end');
//             clearInterval(interval);
//         }
//     },1000);
// }
// function cd(n,t){
//     console.log(n,'*',t,'=',n*t);
//     t=t+1;
//     if(t<=10){
//         setTimeout(function(){
//             cd(n,t);
//         },1000);
//     }
//     else{
//         clearTimeout();
//     }
// }
// const prompt =require('prompt-sync')();
// const num =prompt('enter the num:');
// cd(num,1);
const a = readline.createInterface({
         input: process.stdin,
         output: process.stdout
    });

a.question('enter value: ',(userinput1)=>{
    a.question('enter value: ',(userinput2) =>{
        const num1 = parseFloat(userinput1);
        const num2 = parseFloat(userinput2);
        if(!isNaN(num1)||!isNaN(num2)){
        console.log('invalid input');
        a.close();
    }
    else{
        const sum =num1+num2;
        const sub =num1-num2;
        const div =num1/num2;
        const mul =num1*num2;
        console.log("add: ",sum);
        console.log("sub: ",sub);
      
    }
    }
}) ;   