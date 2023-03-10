const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
const modalaayer=document.querySelector(".modalaayer")
const editedInput=document.querySelector("#editedInput")
const editForm=document.querySelector("#editForm")
// const img = document.createElement("img")
// img.setAttribute("src" , "./img/items.svg")

let arr = [{
  text:"Salom",
  index:9999999,
}];
let index=0;
let EditItem
let result = "";

  arr.forEach((item,index)=>{
    result=result + `<li>  ${item.text} <div>
    <img onclick="showModal(${item.id})" src="./img/circle.svg" alt="svg" />
    <img onclick="removearr(${item.id})" src="./img/rubbishDash.svg" alt="svg" />
    </div></li>`
  });
  console.log(result);
  list.innerHTML =result;


form.addEventListener('submit', (e) => {
  e.preventDefault();
  arr.push({
    text:input.value,
    id:index

  });

  index++
  // console.log(arr);
  let result = "";

  arr.forEach((item,index)=>{
    result=result + `<li>  ${item.text} <div>
    <img onclick="showModal(${item.id})" src="./img/circle.svg" alt="svg" />
    <img onclick="removearr(${item.id})" src="./img/rubbishDash.svg" alt="svg" />
    </div></li>`
  });
  console.log(result);
  list.innerHTML =result;
})


function removearr(id){
  arr=arr.filter((item)=>item.id!==id);

  let result = "";
  arr.forEach((item,index)=>{
    result=result + `<li>  ${item.text} <div>
    <img  onclick="showModal(${item.id})" src="./img/circle.svg" alt="svg" />
    <img onclick="removearr(${item.id})" src="./img/rubbishDash.svg" alt="svg" />
    </div></li>`
  });
  console.log(result);
  list.innerHTML =result;
}


function showModal(id){
  modalaayer.style.display="flex";

  let findEndObject=arr.find((item)=>item.id===id);
  let findEndObjectIndex=arr.findIndex((item)=>item.id===id);
  editedInput.value= findEndObject.text;
  
  EditItem={
    index:findEndObjectIndex,
    id:id, 
  }
};

function editFormHandler(e){
  e.preventDefault();


  arr.splice(EditItem.index,1,{
    text:editedInput.value,
    id:EditItem.id,
  });


  let result = "";

  arr.forEach((item,index)=>{
    result=result + `<li>  ${item.text} <div>
    <img onclick="showModal(${item.id})" src="./img/circle.svg" alt="svg" />
    <img onclick="removearr(${item.id})" src="./img/rubbishDash.svg" alt="svg" />
    </div></li>`
  });
  console.log(result);
  list.innerHTML =result;

  modalaayer.style.display="none";
  
};



editForm.addEventListener("submit",editFormHandler);

modalaayer.addEventListener("click",(e)=>{
   

  if(e.target ==modalaayer)  
  modalaayer.style.display="none";
});

