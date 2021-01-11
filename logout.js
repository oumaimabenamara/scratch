
function logout() {
    localStorage.removeItem('experienceSave')
    localStorage.removeItem('userConnected')

    location.href = 'page1(acceuil).html';
}