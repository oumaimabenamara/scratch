const containerbig = document.querySelector('.LP-container');
const countries = document.querySelectorAll('.LP');

const visité = document.querySelector('#CathegoriePaysA');
const aVisiter = document.querySelector('#CathegoriePaysB');
const aRevisiter = document.querySelector('#CathegoriePaysC');

const listeVisité = document.querySelector('#CathegoriePays1');
const listeAVisiter = document.querySelector('#CathegoriePays2');
const listeARevisiter = document.querySelector('#CathegoriePays3');

var mesPays1 = document.querySelector('#Mes-Pays1');
var mesPays2 = document.querySelector('#Mes-Pays2');
var mesPays3 = document.querySelector('#Mes-Pays3');



// var users =JSON.parse(localStorage.getItem("users"));
// var thisUserList1 = users[userIndex].paysVisités;
var connectedUser=JSON.parse(localStorage.getItem("userConnected"));
var thisUserList1= connectedUser.paysVisités;
var thisUserList2= connectedUser.paysAVisiter
var thisUserList3= connectedUser.paysARevisiter;

// EVENTLISTENERS
Visité.addEventListener('click', addlist1);
aVisiter.addEventListener('click', addlist2);
aRevisiter.addEventListener('click', addlist3);

mesPays1.addEventListener('click', deleteListItem);
mesPays2.addEventListener('click', deleteListItem);
mesPays3.addEventListener('click', deleteListItem);


// FUNCTIONS
function addlist1(event)
{
    event.preventDefault();

    // const listDiv = document.createElement("div");
    // listDiv.classList.add("list_div");

    const longeurListeExistante = document.querySelectorAll("#Mes-Pays1 li").length;
    // for (let i=longeurListeExistante ; i<thisUserList1.length ; i++)
    // {
    //     const listItem = document.createElement("li");
    //     listItem.classList.add("list_item");
    //     listItem.innerText = thisUserList1[i];
    //     console.log(thisUserList[i]);
    //     listDiv.appendChild(listItem);

    //     const deleteButton = document.createElement("button");
    //     deleteButton.classList.add("delete_button");
    //     deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    //     listDiv.appendChild(deleteButton);
    // }

    // mesPays1.appendChild(listDiv);
        for (let i=longeurListeExistante ; i<thisUserList1.length ; i++)
    {
        mesPays1.innerHTML = '<li>' + thisUserList1[i] + '<li>' + '<i class="fas fa-trash-alt"></i>';
    }

}

// function addlist2(event)
// {
//     event.preventDefault();

//     const listDiv = document.createElement("div");
//     listDiv.classList.add("list_div");

//     const longeurListeExistante = document.querySelectorAll("#Mes-Pays2 li").length;
//     for (let i=longeurListeExistante ; i<thisUserList2.length ; i++)
//     {
//         const listItem = document.createElement("li");
//         listItem.classList.add("list_item");
//         listItem.innerText = thisUserList2[i];
//         listDiv.appendChild(listItem);

//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete_button");
//         deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
//         listDiv.appendChild(deleteButton);
//     }

//     mesPays2.appendChild(listDiv);

// }

// function addlist3(event)
// {
//     event.preventDefault();

//     const listDiv = document.createElement("div");
//     listDiv.classList.add("list_div");

//     const longeurListeExistante = document.querySelectorAll("#Mes-Pays3 li").length;
//     for (let i=longeurListeExistante ; i<thisUserList3.length ; i++)
//     {
//         const listItem = document.createElement("li");
//         listItem.classList.add("list_item");
//         listItem.innerText = thisUserList3[i];
//         listDiv.appendChild(listItem);

//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete_button");
//         deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
//         listDiv.appendChild(deleteButton);
//     }

//     mesPays3.appendChild(listDiv);

// }


function deleteListItem(event)
{
    event.preventDefault();
    // console.log(event.target);
    const option = event.target;

    if(option.classList[0] === "delete_button")
    {
        const OPTION = option.parentElement;
        OPTION.classList.add("deleteBtn");
        OPTION.addEventListener('transitionend', function() {OPTION.remove();});

        const toDelete = OPTION.innerText;
        thisUserList1.splice(thisUserList1.indexOf(toDelete), 1);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// CSS
// .deleteBtn {
//     transform: translateX(8rem);
//     opacity: 0;
//   }

