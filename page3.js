const experienceSave =  JSON.parse(localStorage.getItem('experienceSave')) || [];

var el= document.getElementById("bechir")
var data = '';
function FetchAll () {

    experienceSave.forEach(element =>{
        console.log(element);
        console.log(element);
      data+=`<div class="col-md-6">
      <div class="text p-md-5 p-4 ftco-animate">
      <div class="heading">
      <div class="meta-wrap">
      <p class="meta">  
      <span><i class="icon-calendar mr-2"></i>${element.pays}</span>
      <span><a href="commenter.html"><i class="icon-folder-o mr-2"></i>${element.pays}</a></span>
      <span><i class="icon-comment2 mr-2"></i>5 Comment</span>
      </p>
      </div>
      <h2 class="mb-5"><a href="commenter.html">Turned on MacBook Pro Near Black Framed Eyeglasses</a></h2>
      </div>
      <p>element.experience</p>
      <div class="icon d-flex align-items-center my-5">
      <div class="img" style="background-image: url(element.imgFile);"></div>
      <div class="position pl-3">
      <h4 class="mb-0">Jamie Jonson</h4>
      <span>fashion.com</span>
      </div>
      </div>
      </div>
      </div>`
     
});

console.log(data);
el.innerHTML=data
}
FetchAll()