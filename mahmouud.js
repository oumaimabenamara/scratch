

// const listeVisité = document.querySelector('#CathegoriePays1');
// const listeAVisiter = document.querySelector('#CathegoriePays2');
// const listeARevisiter = document.querySelector('#CathegoriePays3');

// var mesPays1 = document.querySelector('#Mes-Pays1');
// var mesPays2 = document.querySelector('#Mes-Pays2');
// var mesPays3 = document.querySelector('#Mes-Pays3');



// var users =JSON.parse(localStorage.getItem("users"));
// var thisUserList1 = users[userIndex].paysVisités;
// var connectedUser=JSON.parse(localStorage.getItem("userConnected"));


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

const userCnt =  JSON.parse(localStorage.getItem('userConnected')) || {};


var thisUserList1= userCnt.paysVisités;
var thisUserList2= userCnt.paysAVisiter;
var thisUserList3= userCnt.paysARevisiter;

var set1 = new Set(thisUserList1);
var set2 = new Set(thisUserList2);
var set3 = new Set(thisUserList3);

// console.log(set1);
// console.log(set2);
// console.log(set3);


var el1= document.getElementById("Mes-Pays1");
var data1 = '';
function FetchAll1 () {
   set1.forEach(element =>{  
      data1+=`<li><strong>${element}</strong></li>`
   });
    el1.innerHTML=data1
    }
    FetchAll1()

var el2= document.getElementById("Mes-Pays2");
var data2 = '';
function FetchAll2 () {
   set2.forEach(element =>{  
      data2+=`<li><strong>${element}</strong></li>`
   });
    el2.innerHTML=data2
    }
    FetchAll2()

var el3= document.getElementById("Mes-Pays3");
var data3 = '';
function FetchAll3 () {
   set3.forEach(element =>{  
      data3+=`<li><strong>${element}</strong></li>`
   });
    el3.innerHTML=data3
    }
    FetchAll3()
