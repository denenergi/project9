const loginBtn = document.getElementById('loginBtn');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
loginBtn.addEventListener('click', function(){
    console.log(email1.value);
    const students = JSON.parse(localStorage.getItem('students'));
    const teachers = JSON.parse(localStorage.getItem('teachers'));

    try{
        for(let i = 0; i < students.length - 1; i++){
            if (email1.value === students[i].name || +password1.value === +students[i].password){
                window.location.href = 'student.html';
                localStorage.setItem('who', 0);
            }else{
                email1.style.border = 'solid 1px red';
                password1.style.border = 'solid 1px red';
            }
        } 
    }catch{
        for(let i = 0; i < teachers.length - 1; i++){
            if (email1.value === teachers[i].name || +password1.value === +teachers[i].password){
                localStorage.setItem('who', 0);
                window.location.href = 'teacher.html';
            }else{
                email1.style.border = 'solid 1px red';
                password1.style.border = 'solid 1px red';
            }
        }
    }
});