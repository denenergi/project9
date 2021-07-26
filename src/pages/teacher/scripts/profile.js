const who = JSON.parse(localStorage.getItem('who'))
export const user = JSON.parse(localStorage.getItem('teacher')) || {
    email: 'ppmudryi@lectrum.io',
    name: 'Пётр Премудрый'
};

const headerTitle = document.getElementById('headerTitle');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

headerTitle.innerHTML = user[who].name;
userName.innerHTML = user[who].name;
userEmail.innerHTML = user[who].email;