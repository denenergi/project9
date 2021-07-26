const BtnReg = document.getElementById('regBtn');
const toStep2Btn = document.getElementById('toStep2Btn');
const loginBlock = document.getElementById('loginBlock');
const step1Block = document.getElementById('step1Block'); 
const regBlock = document.getElementById('regBlock');
const toLoginSvg = document.getElementById('toLoginSvg');
const toBackStep1 = document.getElementById('from3to2Svg');
const step1 = document.querySelector('#from2to1');
const step2 = document.querySelector('#from1to2');
BtnReg.addEventListener('click', function(){
    loginBlock.setAttribute('style', 'display: none');
    step1Block.setAttribute('style', 'display: in-line');
});
toStep2Btn.addEventListener('click', function(){
    step1Block.setAttribute('style', 'display: none');
    regBlock.setAttribute('style', 'display: in-line');
});
toLoginSvg.addEventListener('click', function(){
    loginBlock.setAttribute('style', 'display: in-line');
    step1Block.setAttribute('style', 'display: none');
});
toBackStep1.addEventListener('click', function(){
    step1Block.setAttribute('style', 'display: in-line');
    regBlock.setAttribute('style', 'display: none');
});
step1.addEventListener('click', function(){
    step1Block.setAttribute('style', 'display: in-line');
    regBlock.setAttribute('style', 'display: none');
});
step2.addEventListener('click', function(){
    step1Block.setAttribute('style', 'display: none');
    regBlock.setAttribute('style', 'display: in-line');
});
// END 1 

// START 2 REGISTRATION 
const teacher = document.getElementById('user_teacher');
const student = document.getElementById('user_student');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_next = document.getElementById('password_next');
const createAccount = document.getElementById('createAccount');

let registration = {};
teacher.addEventListener('click', function(){
    registration.type = 'teacher';
});
student.addEventListener('click', function(){
    registration.type = 'student';
});
createAccount.addEventListener('click', function(){
    const regAll = {
        name: name.value,
        email: email.value,
        password:  +password.value,};
    const nameLength = name.value.split(' ');
    if(nameLength[0].length < 4 || nameLength[1].length < 4){
        alert('Error');
        throw new Error ('error');
    }
    if(+password_next.value !== +password.value){
        alert('Error');
        throw new Error ('Не верно введен пароль');
    }
    if(registration.type === 'teacher'){
        const teachers = JSON.parse(localStorage.getItem('teacher')) || [];
        localStorage.setItem('teacher', JSON.stringify([{
            ...regAll
        }, ...teachers]));
        localStorage.setItem('who', 0);
        window.location.href = 'teacher.html';
    }else if (registration.type === 'student'){
        const students = JSON.parse(localStorage.getItem('students')) || [];
        localStorage.setItem('students', JSON.stringify([{
            ...regAll
        }, ...students]));
        localStorage.setItem('who', 0);
        window.location.href = 'student.html';
    };
});
console.log('wizard');

