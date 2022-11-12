const form = document.getElementById('form');
const expenseAmount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");

const expenseList= document.getElementById('expense-List');

window.addEventListener("DOMContentLoaded",()=>read_disData());

form.addEventListener('submit',addData);

expenseList.addEventListener('click',updateList);

 function getAllData()
{
  return axios.get('https://crudcrud.com/api/5bdfc8fe8c5647dbace0934d31a8f889/expenselist');
}
function sendingData(obj){

    return axios.post('https://crudcrud.com/api/5bdfc8fe8c5647dbace0934d31a8f889/expenselist',obj)
 
 }
 function delData(parentElement){
    let url="https://crudcrud.com/api/5bdfc8fe8c5647dbace0934d31a8f889/expenselist/" +parentElement.id ;
   axios.delete(url).then(res => console.log('Deleted', res)).catch((err)=> err);
}
function dataDisplay(values)
{
    for(let val of values.data)
    createElement(val); 
}
function readInput(e)
{
    e.preventDefault();

    const obj = {
        Amount: expenseAmount.value,
        Description: description.value,
        Category: category.value
    }
    return obj;
}
function assignNull(){

    expenseAmount.value='';
    description.value='';
    category.value='';
  
}
function createElement(value){
    const li = document.createElement('li');
    li.id=value._id;

    const amountTxt=document.createTextNode(value.Amount);
    const descTxt=document.createTextNode(value.Description);
    const categoryTxt=document.createTextNode(value.Category);

    li.append(amountTxt,"-",descTxt,"-",categoryTxt);     

    const editButton = document.createElement('button');
    editButton.className="edit-button";
    editButton.textContent="edit";
    
    const delButton = document.createElement('button');
    delButton.className="delete-button";
    delButton.textContent="delete";  
    

    li.appendChild(editButton);
    li.appendChild(delButton);

    const ListParent = document.getElementById("expense-List");
    ListParent.appendChild(li);

}
function readList(parEle){
    const Amount = parEle.firstChild.nodeValue;
    const Description = parEle.childNodes[2].nodeValue;
    const Category = parEle.childNodes[4].nodeValue;

    document.getElementById("amount").value = Amount;
    document.getElementById("description").value = Description;
    document.getElementById("category").value = Category;
}
function delElement(ele)
{
    expenseList.removeChild(ele); 
}


async function read_disData(){
    try{
    const data =  await getAllData();
     dataDisplay(data);
    }
    catch(err){
        console.log(err);
    }
}
async function addData(e){
    try{
     const obj = await readInput(e);
     const resp = await sendingData(obj);
     await createElement(resp.data);
     assignNull();
    }
    catch(err){
        console.log(err);
    }
}
async function updateList(e){
    try{
    const parentElement = e.target.parentElement;
    e.preventDefault();
    if(e.target.classList.contains('delete-button')){
        if(confirm('Are you Sure?'))
        { 
           await delElement(parentElement); 
           await delData(parentElement);
        }  
    }
    if(e.target.classList.contains('edit-button')){
        if(confirm('Are you Sure?'))
        {
            readList(parentElement);
             await delElement(parentElement); 
            await delData(parentElement);
        }   

     }
    }
    catch(err){
        console.log(err);
    }
}
