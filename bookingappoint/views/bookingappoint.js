function showUser(data){
    const id = data.id;
    const name = data.name;
    const mail = data.mail;
    const phone = data.phone;
    const date = data.date;
    const time = data.time;
    listCreation(name,mail,phone,date,time,id);
}

function listCreation(nameInput,mail,phone,date,time,id){
    const appoint_div = document.getElementById('appointment-list');

let list_creation = document.createElement('li');
list_creation.id=id;
list_creation.style.fontSize="150%";
list_creation.style.paddingTop = "1%";
let list_txt = document.createTextNode(nameInput + " -- " + mail + " -- " + phone + "   ");
list_creation.appendChild(list_txt);

// Delete and edit button creation
let edit_button = document.createElement('button');
edit_button.className="edit-button";
edit_button.textContent = 'edit';
list_creation.appendChild(edit_button);

let del_button = document.createElement('button');
del_button.className="delete-button";
del_button.textContent = 'X';
list_creation.appendChild(del_button);

appoint_div.appendChild(list_creation);

}

function removeUserFromScreen(id){
    const appoint_div = document.getElementById('appointment-list');
    const ele = document.getElementById(id);   
    appoint_div.removeChild(ele);     
}

function editDetail(data){
   document.getElementById('name').value = data.name;
   document.getElementById('email').value = data.mail;
   document.getElementById('phone').value = data.phone;
   document.getElementById('date').value = data.date;
   document.getElementById('time').value = data.time;
   document.getElementById('id').value = data.id;
   removeUserFromScreen(data.id);
}
