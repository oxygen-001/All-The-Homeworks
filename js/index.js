//exam

//first solve

// function love6(num1, num2) {
//   if (num1 == 6 || num2 == 6) {
//     console.log("true");
//   } else if (num1 + num2 == 6) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// love6(6, 4);
// love6(4, 5);
// love6(1, 5);

// second solve

// function cigarParty(num1,week){

//     if((40<num1 && num1<60) || week==true ){
//         console.log("true")
//     }else{

//         console.log("false")
//     }
// }

// cigarParty(30, false)
// cigarParty(50, false)
// cigarParty(70, true)

//third solve
// function swap(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o"||
//       str[i] === "u"
//     ) {
//       let a = str[i].toUpperCase();
//       result += a;
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(swap("Sunday"));
// console.log(swap("Hello"));
// console.log(swap("Codewars"));

//fourth solve

// function firstLast6(nums) {

//     if ( (nums[0] == 6) || (nums[nums.length - 1]) == 6 ) {

//       console.log("true")
//     }else{

//         console.log("false")
//     }

// }

// firstLast6([6, 1, 2, 3])
// firstLast6([13, 6, 1, 2, 3])
// firstLast6([1, 2, 6])

//fifth solve

// function bobThere(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "b" && str[i+2]=="b") {
//       return true;
//     } else {

//         return false;

//     }
//   }
// }

// console.log(bobThere('b9b'))
// console.log(bobThere('bac'))
// console.log(bobThere("abcbob"));

// function solve(num){

//   let result=num+2

//   return function(){
//     return result;
//   }
// }

// let makesolve=solve(5)

// console.log(makesolve)



// function again(){

//   let num = prompt(
//     "hohlagan soningizni yozin 0 dan katta 100 dan kichkina bolsin"
//   );
  
//   if (num == 19 || num == 22 || num == 99) {
//     alert("concratulation");
//   } else {
//     alert("try again");
    
//   }
// }


// again()

// if (num == 19 || num == 22 || num == 99) {
//   alert("concratulation");
// } else {
//   alert("try again");
  
// }


for(let i=0 ; i<10 ; i++){
  let num = prompt(
    "hohlagan soningizni yozin 0 dan katta 100 dan kichkina bolsin"
  );
  
  if (num == 19 || num == 22 || num == 99) {
    alert("concratulation");
  } else {
    alert("try again");
    
  }


  if(i==9){
    i==0
  }
}




// let num = promt('hohlagan soningizni yozin 0 dan katta 100 dan kichik bolsin');




// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(100))


// if(Math.floor(Math.random() * 100)==num){
//   alert ("concratulation")
// }else{
//   alert "try again"
// }




