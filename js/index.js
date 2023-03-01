const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

const arr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  arr.push(input.value);
  // console.log(arr);
  let result = "";

  arr.forEach((item,index,arr2)=>{
    result=result + `<li> ${index+1} ${item} <img src="./img/items.svg" alt="photo"></li>`
  });
  console.log(result);
  list.innerHTML =result;
})