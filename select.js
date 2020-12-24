// declarations
const containerbig = document.querySelector('.LP-container');
const countries = document.querySelectorAll('.LP');
const visiter = document.querySelector('#CathegoriePaysA');
const Avisiter= document.querySelector('#CathegoriePaysB');
const Arevisiter= document.querySelector('#CathegoriePaysC');

let array = []
let CP = {
    array1:[],
    array2:[],
    array3:[],
}

visiter.addEventListener('click', C1);
Avisiter.addEventListener('click', C2);
Arevisiter.addEventListener('click', C3);

function C1(){
     CP.array1 = [...array, ...CP.array1]
     array = []
     $("input[type='checkbox']:checked").prop("checked", false)
     localStorage.setItem('CP', JSON.stringify(CP));
}

function C2(){
    CP.array2 = [...array, ...CP.array2]
    array = []
    $("input[type='checkbox']:checked").prop("checked", false)
    localStorage.setItem('CP', JSON.stringify(CP));
}

function C3(){
    CP.array3 = [...array, ...CP.array3]
    array = []
    $("input[type='checkbox']:checked").prop("checked", false)
    localStorage.setItem('CP', JSON.stringify(CP));
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




