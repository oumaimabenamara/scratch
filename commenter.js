
const experienceSave =  JSON.parse(localStorage.getItem('experienceSave')) || [];
const userConnected =  JSON.parse(localStorage.getItem('userConnected')) || {};
console.log(userConnected.nom);
var el= document.getElementById("bechir")
var data = '';
function FetchAll () {
console.log("aaa");
    experienceSave.forEach(element =>{
      
      data+=`<h1 class="mb-3">${element.Pays}</h1>
<p>${element.experience}</p>
<p>
<img src="${element.imgFile}" alt="" class="img-fluid">
</p>`
});

console.log(data);
el.innerHTML=data
}
FetchAll()