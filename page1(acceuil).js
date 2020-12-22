const form = document.querySelector('#signin');

const users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const exist = users.find(user => user.email === email && user.password === password);
  console.log(exist);
  if (exist) {
    const userC = { id: exist.id, email: exist.email };
    localStorage.setItem('userConnected', JSON.stringify(userC));
    location.href = 'page2(blog,fonctionnalitéspublic).html';
  } else {
    alert('email or password incorrect');
    
  }
});