

function listCreation(value){
    const li = document.createElement('li');
    li.id=value.id;

    const amountTxt=document.createTextNode(value.amount);
    const descTxt=document.createTextNode(value.description);
    const categoryTxt=document.createTextNode(value.category);

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

function editList(data){

    document.getElementById("amount").value = data.amount;
    document.getElementById("description").value = data.description;
    document.getElementById("category").value = data.category;
    document.getElementById('id').value = data.id;
}






