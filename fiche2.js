const form = document.querySelector('form')
const experienceSave =  JSON.parse(localStorage.getItem('experienceSave')) || [];
const checked1 = document.getElementById('inlineRadio1')
const checked3 = document.getElementById('inlineRadio3')

function saveExperience() {
    const Pays = form.Pays.value;
    const Villes = form.Villes.value;
    const date = form.date.value;
    const Note = form.Note.value;
    let Revisiter =false;    
    if (checked1.checked ){
        Revisiter=true;
    }
    const experience = form.experience.value;
    let Public= false;
    if (checked3.checked) {
        Public=true;
    }

    const experienceToSave = {
      Pays,
      Villes,
      date,
      Note,
      Revisiter,
      experience,
      Public,
    };
console.log(experienceToSave);
}
