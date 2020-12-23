// SELECTORS
const CheckBox = document.querySelectorAll(".LP");
var Pays = CheckBox.values;

Checkbox.addEventListener('click', PaysCheck);

function PaysCheck()
{
    console.log(Pays.parentElement.innerText);
}
// EVENTLISTENERS

// FUNCTIONS


// localStorage.setItem('user', 'bechir');
// console.log(localStorage.getItem('user'));

// const user= {name:'bechir', age:18};
// localStorage.setItem('user', JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem('user')));