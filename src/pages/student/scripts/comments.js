import { user } from './profile';
const who = JSON.parse(localStorage.getItem('who'))
const formComment = document.getElementById('formComment');

formComment.onsubmit = (event) => {
    event.preventDefault();

    const radioBtn = formComment.querySelector('input[type="radio"]:checked');
    const textarea = formComment.querySelector('textarea');

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([{
        name: user[who].name,
        rating: radioBtn.value,
        review: textarea.value,
        created: new Date()
    }, ...reviews]));

    formComment.reset();
};