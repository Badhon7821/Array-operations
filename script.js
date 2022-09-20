"use strict";

/*  // slice
 const arr = [1,2,3,4,5,6];
console.log(arr.slice(2)); //print = 3,4,5,6
console.log(arr.slice(1,3)); // print = 2,3
// slice first param theke suru second param er ag porjnto print korbe
console.log(arr.slice(1,-2));
console.log(arr); // not muted
console.log([...arr]); //copy array
// const m = {...arr};

// console.log(m[0])
console.log(arr.slice(-1));
console.log(arr.at(-1)); */

/* // splice
const arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.splice(2)); //that is muted cause array k change kore fele
// console.log(arr.splice(2,5)); // splice first param  er por theke suru second param er por porjnto print kore
const mutedArr = arr.splice(2,6);
console.log(mutedArr); // print = 2,3,4,5,6,7,8
console.log(arr); //print = 1,2,9 */

/* // reverse
const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.reverse());
console.log(arr); // thats muted */

/* // concat
const arr = [1,2,3,4,4,5,6,7,8]
const m = new Set([...arr]);
console.log(m);
const  arr2 = ["a", "b", "c"];
console.log(arr.concat(arr2)); */

/* // join
const friends = ["badhon", "rasu", "Nishad"];
console.log(friends.join("*"));
const r = friends.push("khadimul"); //last add
console.log(r); // that called array count
console.log(friends);
console.log(friends.pop()); // last element remove
console.log(friends);
console.log(friends.unshift("khadimul")); //firdt add
console.log(friends);
console.log(friends.shift()); //first element remove
console.log(friends); */

/* // at
const arr = [230,415,520,630,780,800];
console.log(arr.at([0]));
console.log(arr);
console.log(arr.at(-2));
console.log(arr.slice(-1)[0]); */

// forEach
/* const arr = [133,355,4444,566,6677,8777,77988];

arr.forEach(function(element,index, array){
    // console.log(element);
   console.log(index+1);
    // console.log(array);
    if(element>5000){
        console.log(index+1);
        console.log(element);
    }
}) 

const friends = ["rahat", "khadimul", "nishad","retu"];
friends.forEach(function(el,ind,ar){
    console.log(`${ind+1} : ${el}`);
}) */


// forEach with maps and maps
//Map
/* const countries =new Map([
    ["name1", "bangladesh"],
    ["name2", "India"],
    ["name3", "pakistan"]
]);

countries.forEach(function(vlaue,key,map){
    console.log(`${key} : ${vlaue}`);
})
console.log(countries); 
const country =new Set([
    ["name1", "bangladesh"],
    ["name2", "India"],
    ["name3", "pakistan"]
]);
country.forEach((v,_,arr)=>{console.log(`${v}`);}) */

/* // map method
// Map returned array
const arr = [100,200,300,400,500,600];
const ftArr = arr.map((el,ind,array)=>{
   if(el<300){
    return `${el}: ${ind}`;
    
   } 
})
console.log(ftArr) */


/* // Filter
const transactions = [5000, -2000, 500, -500, 3000, -2000, 6000, -1500];
const deposite = transactions.filter((el,ind,array)=>{
    if(el>0){
        return el;
    }
})
console.log(deposite);

const gang = ["arif","khadi","kum","sathi","rani","ayub"];

const gangFlilter = gang.filter((a, b, c)=>{
    if(a.length<=4){
        return a;
    }
})
console.log(gangFlilter); */

