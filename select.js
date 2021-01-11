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

var users =JSON.parse(localStorage.getItem("users"));
var connectedUser=JSON.parse(localStorage.getItem("userConnected"));




let array = [];

containerbig.addEventListener('click',e=> 
{
    if (e.target.classList.contains('LP')) 
    {
        
        if (e.target.checked) 
        {
            // console.log(e.target.value);
            array.push(e.target.value);
            // console.log(array);
        }
        else
        {
            array=array.filter(element => element!=  e.target.value)
        }
    }
})



visité.addEventListener('click', C1);
aVisiter.addEventListener('click', C2);
aRevisiter.addEventListener('click', C3);

var userIndex;

function C1()
{
    array.forEach(element=>{
        connectedUser.paysVisités.push(element)
    })
    //  console.log(array);

     const exist = users.find(user => user.email === connectedUser.email);
     array.forEach(element=>{
        exist.paysVisités.push(element)
    })
    // console.log(exist);

     $("input[type='checkbox']:checked").prop("checked", false)
     var userIndex = users.indexOf(exist)
     users.splice(users.indexOf(exist),1,exist)

    localStorage.setItem('userConnected', JSON.stringify(connectedUser));
    localStorage.setItem('users', JSON.stringify(users));

    array = []



    // const longeurListeExistante = document.querySelectorAll("#Mes-Pays1 li").length;
    // for (let i=longeurListeExistante ; i<thisUserList1.length ; i++)
    // {
    //     mesPays1.innerHTML = '<li>' + thisUserList1[i] + '<li>' + '<i class="fas fa-trash-alt"></i>';
    // }
}

function C2()
{
    array.forEach(element=>{
        connectedUser.paysAVisiter.push(element)
    })
    //  console.log(array);

     const exist = users.find(user => user.email === connectedUser.email);
     array.forEach(element=>{
        exist.paysAVisiter.push(element)
    })
    // console.log(exist);

     $("input[type='checkbox']:checked").prop("checked", false)
     var userIndex = users.indexOf(exist)
     users.splice(users.indexOf(exist),1,exist)
    localStorage.setItem('userConnected', JSON.stringify(connectedUser));
    localStorage.setItem('users', JSON.stringify(users));

    array = []


}

function C3()
{
    array.forEach(element=>{
        connectedUser.paysARevisiter.push(element)
    })
    //  console.log(array);

     const exist = users.find(user => user.email === connectedUser.email);
     array.forEach(element=>{
        exist.paysARevisiter.push(element)
    })
    // console.log(exist);

     $("input[type='checkbox']:checked").prop("checked", false)
     var userIndex = users.indexOf(exist)
     console.log(userIndex);
     users.splice(users.indexOf(exist),1,exist)
    localStorage.setItem('userConnected', JSON.stringify(connectedUser));
    localStorage.setItem('users', JSON.stringify(users));
   
    array = []
}


