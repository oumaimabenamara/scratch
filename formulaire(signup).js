const form = document.querySelector('form');

const users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', e => {
  console.log(form);
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const random = Math.floor(Math.random() * 1000);
  const user = {
    email,
    password,
    id: random,
    paysVisités : [],
    paysAVisiter : [],
    paysARevisiter : []
  };
  console.log(user);
  const unique = users.find(user => user.email === email);
  if (!unique) {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    // location.href = 'page1(acceuil).html';
  } else {
    alert('email already in use');
  }
});

const verification = form.verif.value;
// if (password != verification) {
//   alert('mot de passe incorrecte')
// }