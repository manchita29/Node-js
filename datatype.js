// let x;
// const y=50;
// var z=70;
// console.log(z);
// a(40);
// {
//     let x=90;
//     console.log(x);
// }
// a(20);
// {
//     const y=89;
//     console.log(y);
//     z=40;//z is changed globally so now it is 40
// }
// console.log(z);
// console.log(y);
// function a(b)
// {
//   console.log(b);
// }
// function r(a,b){
//     if (a<b){
//         console.log(b+" b is greater");
//     }
//     else if (a>b){
//         console.log(a+" a is greater");
//     }
//     else {
//         console.log("equal");
//     }
// }
// r(0,0);
// x=19;
// x=x++;
// console.log(x);
// var x =(x>10)?'above ten':'equal to ten';
// console.log(x);

var x=[0,1,2,3,4,5,6,7,8,9];
var a=[x,x,x,x,x];
for(var i=0,j=9;i<=j;i++,j--){
   console.log('['+i+']['+j+']='+a[i][j]);
}
console.log(a);

