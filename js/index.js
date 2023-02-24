// let age=Number(prompt("how old are you?"));
// let b=+prompt("boyingiz?")

// console.log(age,b)

// prompt("choose a")
// const module=Math.sqrt(2);
// console.log(module);

//first-solve

// function sleepIn() {
//   let firstanswer = "ish kuni emas";
//   let secondanswer = "dam olish";
//   let result = firstanswer || secondanswer;


//   if (result) {
//     alert("siz dama olyapsiz");
//   } else {
//     alert("siz ishdasiz");
//   }
// }

// sleepIn(true,true);

//second-solve

function monkeyTrouble(a,b) {


    if (a&&b) {
        alert("true");
    }else if(!a && !b) {
        alert("true");
    }
    else {
        alert("false");
    }
}

monkeyTrouble(true,true)
monkeyTrouble(false, false)
monkeyTrouble(true, false)


third-solve

function parrotTrouble(parrot,time){
   
    if(parrot==true && 7<=time>=20){
        alert("problem");
    }else{
        alert("no problem");
    }
}

parrotTrouble(true,6);
parrotTrouble(true,7);
parrotTrouble(false, 6);

//fourth-solve

function sumDouble (a,b) {


    if(a!=b){
        alert(a+b)
    }else{
        alert((a+b)*2) 
    }
}

// sumDouble (1,2)
// sumDouble(3, 2)
// sumDouble(2, 2)


//fifth-solve

function makes10 (a,b) {

    if(a==10 || b==10){
        alert("true");
    }else if(a+b==10){
        alert("true");
    }else{
        alert("false");
    }

}

// makes10 (9,10)
// makes10(9, 9)
// makes10(1, 9)



//sixth-solve

function posNeg(a,b,negative) {

    if(-a&&b){
        alert("true");
    }else if(a&&-b){
      alert("true");
    }else if(-a&&-b&&negative){
       alert("true");
    }else{
        alert("false");
    };    
       

    
}


posNeg(1, -1, false)
// // posNeg(-1, 1, false)
// posNeg(-4, -5, true)



const sleepInterval =(a,b)
