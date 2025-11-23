let arr1 =[10,20,30];
let arr2 =[40,50];
let combined = [...arr1, ...arr2];
console.log("Q1:",combined); 

let person ={name:"Venu",age:25};
let extra ={city:"Bengaluru"};
let details ={...person,...extra};
console.log("Q2:",details);

function sumAll(...nums)
{
    return nums.reduce((a,b) => a + b, 0);
}
console.log("Q3:",sumAll(1,2,3,4));

let numbers =[10,20,30,40,50];
let[first,...remaining] = numbers;
console.log("Q4:",first,remaining);

let user ={
    name:"Alice",
    address:{
        city:"Bengaluru",
        pin:560001,
        geo:{lat:11.2, lng:77.33},
    },
};
let {address:{
    city,
    geo:{lat,lng},
}} = user;
console.log("Q5:",city,lat,lng);

const multiply =(a,b) => a * b;
console.log("Q6:",multiply(5,6));

let emp ={
    name:"Prakash",
    details:{
        department:"IT",
        profile:{role:"Developer"}
    },
};
console.log("Q7:",emp.details?.profile?.role);
