const who = JSON.parse(localStorage.getItem('who'))
export const user = JSON.parse(localStorage.getItem('students')) || {
    email: 'ppmudryi@lectrum.io',
    name: 'Пётр Премудрый' 
};
console.log(user[who])
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const greeting = document.getElementById('greeting');

greeting.innerHTML = user[who].name;
profileName.innerHTML = user[who].name;
profileEmail.innerHTML = user[who].email;