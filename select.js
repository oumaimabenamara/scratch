const containerbig = document.querySelector('.LP-container');
const countries = document.querySelectorAll('.LP');

const visité = document.querySelector('#CathegoriePaysA');
const aVisiter = document.querySelector('#CathegoriePaysB');
const aRevisiter = document.querySelector('#CathegoriePaysC');

const listeVisité = document.querySelector('#CathegoriePays1');
const listeAVisiter = document.querySelector('#CathegoriePays2');
const listeARevisiter = document.querySelector('#CathegoriePays2');

const mesPays1 = document.querySelector('#Mes-Pays1');
const mesPays2 = document.querySelector('#Mes-Pays2');
const mesPays3 = document.querySelector('#Mes-Pays3');

var users =JSON.parse( localStorage.getItem("users"))
console.log(users);



// localStorage.setItem('user', 'bechir');
// console.log(localStorage.getItem('user'));

// const user= {name:'bechir', age:18};
// localStorage.setItem('user', JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem('user')));

let array = []
// let CP = {
//     array1:[],
//     array2:[],
//     array3:[],
// }

// let array1 = [];
// let array2 = [];
// let array3 = [];

visité.addEventListener('click', C1);
aVisiter.addEventListener('click', C2);
aRevisiter.addEventListener('click', C3);

function C1(){
    //  CP.array1 = [...array, ...CP.array1]

    //  array1 = [...array, ...array1]
    //  array = []

    //  users.paysVisités.push(CP.array1)
    //  users.paysVisités.push(array)
     users.paysVisités.concat(array)

     $("input[type='checkbox']:checked").prop("checked", false)

     console.log(users)

     localStorage.setItem('users', JSON.stringify(users));

    //  localStorage.setItem('CP', JSON.stringify(CP));
    //  let tousPaysVisité = JSON.parse(localStorage.getItem('CP')) || [];
    //  console.log(tousPaysVisité.array1);
}

function C2(){
    // CP.array2 = [...array, ...CP.array2]

    // array2 = [...array, ...array2]
    // array = []

    // users.paysAVisiter.push(CP.array2)
    // users.paysAVisiter.push(array)
    users.paysAVisiter.concat(array)

    $("input[type='checkbox']:checked").prop("checked", false)

    console.log(users)
    
    localStorage.setItem('users', JSON.stringify(users));

    // localStorage.setItem('CP', JSON.stringify(CP));
    // let tousPaysAVisiter = JSON.parse(localStorage.getItem('CP')) || [];
    // console.log(tousPaysAVisiter.array2);
}

function C3(){
    // CP.array3 = [...array, ...CP.array3]

    // array3 = [...array, ...array3]
    // array = []

    // users.paysARevisiter.push(CP.array3)
    // users.paysARevisiter.push(array)
    users.paysARevisiter.concat(array)

    $("input[type='checkbox']:checked").prop("checked", false)

    console.log(users)

    localStorage.setItem('users', JSON.stringify(users));

    // localStorage.setItem('CP', JSON.stringify(CP));
    // let tousPaysARevisiter = JSON.parse(localStorage.getItem('CP')) || [];
    // console.log(tousPaysARevisiter.array3);
}



containerbig.addEventListener('click',e=> 
{
    if (e.target.classList.contains('LP')) 
    {
        
        if (e.target.checked) 
        {
            array.push(e.target.value);
        }
        else
        {
            array=array.filter(element => element!=  e.target.value)
        }
    }
})



// let tousPays = JSON.parse(localStorage.getItem('CP')) || [];

// console.log(JSON.parse(localStorage.getItem('CP')));

// console.log(tousPays.array1);
// console.log(tousPays.array2);
// console.log(tousPays.array3);

// console.log(tousPaysVisité.array1);
// console.log(tousPaysAVisiter.array2);
// console.log(tousPaysARevisiter.array3);