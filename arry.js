const courses=['java','node js','react js'];
console.log(courses);
console.log(courses[2]);

const subject = Array('java','node js','react js');
console.log(subject);
console.log(subject.length);
subject[7]='angular js';
console.log(subject);
console.log(subject[7]);


var num1=[11,12,13];
var num2=[14,15,16];
var num3=[17,18,19];
console.log(num1.concat(num2,num3));
console.log(num2.concat(num3));
console.log(num1.num2);

var numbers=[3,4,5,9,4,7,6,'helloo']
var even=numbers.filter(function(x){
    return x%2==0;

})
console.log(even);


var array_1=[1,2,3,4,5,6];
array_1.forEach(function(num,i){
     array_1[i]**=2;
    
});
console.log(array_1);
var numbers=[9,81,8];
var even=numbers.some(function(x){
    return x%2==0;
});
console.log(even);

var item=[100,-35,-87,-90,80];
console.log(item.sort());//wrong sorted
console.log(item.sort(function(a,b){
    return a-b;
}));



var names=['divid','retaa','anuj','marry','anu'];
 console.log(names.sort());
 console.log(names.reverse());
 console.log(names);


// // console.log(names.slice(0,3));
// // console.log(names);
// console.log(names.splice(0,3,"i am in"));
// console.log(names);



// push and pop
// var item=['david','john','michel','ram'];
// console.log(item.push('ibrahim'));
// console.log(item);
// console.log(item.pop());
// console.log(item);

// var numbers=[61,8,3,100];//print first even no
// var even=numbers.find(function(x){
//     return x%2==0;
// });
// console.log(even);


var a=[1,2,3,4,5];
console.log(a.join('  '));//print single string 
