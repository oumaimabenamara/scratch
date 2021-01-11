const form = document.querySelector('form')
const experienceSave =  JSON.parse(localStorage.getItem('experienceSave')) || [];
const checked1 = document.getElementById('inlineRadio1')
const checked3 = document.getElementById('inlineRadio3')

function saveExperience() {
    const Pays = form.Pays.value;
    // const Villes = form.Villes.value;
    const date = form.date.value;
    // const Note = form.Note.value;
    // let Revisiter =false;    
    // if (checked1.checked ){
    //     Revisiter=true;
        
    // }
   
   
    const experience = form.experience.value;
    // let Public= false;
    // if (checked3.checked) {
    //     Public=true;
    // }
    

    const experienceToSave = {
      Pays,
      // Villes,
      date,
      // Note,
      // Revisiter,
      experience,
      // Public,
      imgFile
    };
console.log(experienceToSave);
experienceSave.push(experienceToSave)
localStorage.setItem('experienceSave', JSON.stringify(experienceSave));
location.reload()
}


const inputFile = document.querySelector('#images');
                const imageSrc = document.querySelector('#imgUpload');
                const button = document.querySelector('#upload');
          
                let imgFile = '';
          
                inputFile.addEventListener('change', () => {
                   
                  const file = new FileReader();
                  file.readAsDataURL(inputFile.files[0]);
                  file.onload = function () {
                    imgFile = file.result;
                  };
                });
          
                // button.addEventListener('click', () => {
                   
                //   imageSrc.src = imgFile;
                //   localStorage.setItem('img', imgFile);
                // });
          
                const image = localStorage.getItem('img') || '';
                console.log(image);
          
                if (image) {
                  imageSrc.src = image;
                }