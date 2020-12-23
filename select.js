// declarations
const countries = document.querySelectorAll('.LP');
const visiter = document.querySelector('#CathegoriePaysA');
const Avisiter= document.querySelector('#CathegoriePaysB');
const Arevisiter= document.querySelector('#CathegoriePaysC');

const countrieschecked = JSON.parse(localStorage.getItem('countrieschecked')) || [];


// event listeners
// document.addEventListener("submit",optionChecked)
// document.addEventListener("submit",optionStored)




// functions


// function save(){
//     console.log(countries);
//     var checkbox = document.getElementById('argentina');
//     //localStorage.setItem('argentina', checkbox.checked);
//     console.log(document.getElementById('argentina').value);
// }

// function load(){    
//     var checked = JSON.parse(localStorage.getItem('argentina'));
//     document.getElementById("argentina").checked = checked;
// }

// function wis(){
//     location.reload();
//     localStorage.clear()

// }

// load();
// console.log(document.getElementById('argentina').value);


// if (checked=1) {
//     console.log(checked);
    
// }
// else{
//     push
// }
let array = []
let CP = {
    array1:[],
    array2:[],
    array3:[],
}

// let clicked1 = (document.querySelector("CathegoriePaysA").clicked == true);
// let clicked2 = (document.querySelector("CathegoriePaysB").clicked == true);
// let clicked3 = (document.querySelector("CathegoriePaysC").clicked == true);



// function uncheckAll() {
//     $("input[type='checkbox']:checked").prop("checked", false)
//   }
//   $(':button').on('click', uncheckAll)

function C1(){
     CP.array1 = [...array, ...CP.array1]
     array = []
     $("input[type='checkbox']:checked").prop("checked", false)
     console.log(CP)
}


function C2(){
    CP.array2 = [...array, ...CP.array2]
    array = []
    $("input[type='checkbox']:checked").prop("checked", false)
    console.log(CP)
}


function C3(){
    CP.array3 = [...array, ...CP.array3]
    array = []
    $("input[type='checkbox']:checked").prop("checked", false)
    console.log(CP)
}


// let array1 =[];
const containerbig = document.querySelector('.LP-container');
containerbig.addEventListener('click',e=> 
{
    if (e.target.classList.contains('LP')) 
    {
        
        if (e.target.checked) 
        {
array.push(e.target.value);
localStorage.setItem('CP', JSON.stringify(CP));

            // if (clicked1) 
            // {
            //     CP.array1.push(e.target.value);
            // }
            // else if (clicked2) 
            // {
            //     CP.array2.push(e.target.value);
            // }
            // else if (clicked3) 
            // {
            //     CP.array3.push(e.target.value);
            // }
        }
            
        
        else
        {
            array=array.filter(element => element!=  e.target.value)
            // if (array1.includes(e.target.value)) 
            // {
            //     array1=array1.filter(element => element!=  e.target.value);  
            // }
            // else if (array2.includes(e.target.value)) 
            // {
            //     array2=array2.filter(element => element!=  e.target.value);   
            // }
            // else if (array3.includes(e.target.value)) 
            // {
            //     array3=array3.filter(element => element!=  e.target.value); 
            // }
        }
        // console.log(array1);
    }
})

visiter.addEventListener('click', C1);
Avisiter.addEventListener('click', C2);
Arevisiter.addEventListener('click', C3);


// countries.forEach(country=>{
//     country.addEventListener('click',e=>{
        
//         console.log(e.target.checked);

//         if (e.target.checked) {
//             array1.push(e.target.value)

            
//         }else{
//             array1=array1.filter(element => element!=  e.target.value)

//         }
//         console.log(array1);
//     })
// })



