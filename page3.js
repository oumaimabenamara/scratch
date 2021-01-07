const experienceSave =  JSON.parse(localStorage.getItem('experienceSave')) || [];

var el= document.getElementById("bechir")
var data = '';
function FetchAll () {

    experienceSave.forEach(element =>{
      console.log("aa");
        console.log(element.Pays);
      data+=` <div class="col-md-12 blog-wrap">
      <div class="row no-gutters align-items-center">
      <div class="col-md-6 img js-fullheight" style="background-image: url(${element.imgFile});">
      </div>
      <div class="col-md-6">
      <div class="text p-md-5 p-4 ftco-animate">
      <div class="heading">
      <div class="meta-wrap">
      <p class="meta">  
      <span><i class="icon-calendar mr-2"></i>${element.date}</span>
      <span><a href="commenter.html"><i class="icon-folder-o mr-2"></i>${element.Pays}</a></span>
      <span><i class="icon-comment2 mr-2"></i> Comment</span>
      </p>
      </div>
      <h2 class="mb-5"><a href="commenter.html">${element.Pays}</a></h2>
      </div>
      <p>${element.experience}</p>
      <div class="icon d-flex align-items-center my-5">
      <div class="img" style="background-image: url('https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg');"></div>
      <div class="position pl-3">
      
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>`
     
});

console.log(data);
el.innerHTML=data
}
FetchAll()