
/*
var x:number=12_32_45
var y:string="charan"
var z:boolean=true
console.log(x,y,z);
var a ;
a=1
a="charan"
console.log(typeof(a));

*/

// Arrays in TS

var n:number[]=[]
n.push(12,2,3,7,4)
var m:number[]=[1,2,3,4,5]
console.log(n);
// console.log(typeof(n.join("hello")));// it will add element in between array elements and convert array to string 
console.log(n.lastIndexOf(1));
console.log(n.concat(m));
console.log("before converting into sting",n);

console.log("After converting into string ",n.toString());
// console.log(m.slice(2,5));
// console.log(m.splice(4,2,3));
// console.log(m.map(hello));
// function hello(num)
// {
//     return num*10
// }
console.log();
console.log(m.reverse());
console.log(m.splice(2,0));
var x:number[]=[7,8,9,10,11]
var deleted=x.splice(2,3)
console.log(deleted);




