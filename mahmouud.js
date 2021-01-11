

// const listeVisité = document.querySelector('#CathegoriePays1');
// const listeAVisiter = document.querySelector('#CathegoriePays2');
// const listeARevisiter = document.querySelector('#CathegoriePays3');

// var mesPays1 = document.querySelector('#Mes-Pays1');
// var mesPays2 = document.querySelector('#Mes-Pays2');
// var mesPays3 = document.querySelector('#Mes-Pays3');



// var users =JSON.parse(localStorage.getItem("users"));
// var thisUserList1 = users[userIndex].paysVisités;
var connectedUser=JSON.parse(localStorage.getItem("userConnected"));
var thisUserList1= connectedUser.paysVisités;
var thisUserList2= connectedUser.paysAVisiter
var thisUserList3= connectedUser.paysARevisiter;

// // var el= document.getElementById("bechir")
// var mesPays1 = document.querySelector('#Mes-Pays1');
// var mesPays2 = document.querySelector('#Mes-Pays2');
// var mesPays3 = document.querySelector('#Mes-Pays3');
// // var data = '';


// // function FetchAll () {

// //   thisUserList1.forEach(element =>{
// //       data+=` <li>${thisUserList1[i]}`  
// // });

// // console.log(data);
// // el.innerHTML=data
// // }
// // FetchAll()


// const longeurListeExistante = document.querySelectorAll("#Mes-Pays1 li").length;
// function FetchAll () {
// for (let i=longeurListeExistante ; i<thisUserList1.length ; i++)
// {
//     mesPays1.innerHTML = '<li>' + thisUserList1[i] + '<i class="fas fa-trash-alt"></i>' + '<li>' ;
// }
// }


// mahhhmoud

const userConnected =  JSON.parse(localStorage.getItem('userConnected')) || {};

var el= document.getElementById("Mes-Pays1")
var data = '';
function FetchAll () {
   userConnected.paysVisités.forEach(element =>{  
      data+=`<li >${element}</li>`
   });
    el.innerHTML=data
    }
    FetchAll()
