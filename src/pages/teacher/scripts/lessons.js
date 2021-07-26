const planedLessons = document.querySelector('#planedLessons');
// const info = document.querySelector('.info');
// const sub_title = document.querySelector('.sub-title');
// const info_title = document.querySelector('.info-title');
// const info_desc = document.querySelector('.info-desc');

const savedLessons = JSON.parse(localStorage.getItem('lessons')) || [
    {
        name: 'Пётр Премудрый',
        time: '12',
        title: 'Аудирование',
    }
];

const getLesson = (lesson) => {
    const { name, time, title } = lesson;
    return `
<div class="card-box">
    <div class="card-illustration">
        <img src="./images/user_03.png" alt="">
    </div>
    <div class="info">
        <p class="sub-title">Сегодня, ${time}:00</p>
        <p class="info-title">${name}</p>
        <p class="info-desc">${title}</p>
    </div>
</div>`;
};

const generateHTML = () => {
    const planedLessonsHTML = savedLessons.map((lesson) => {
        return getLesson(lesson);
    }).join('');
    
    planedLessons.insertAdjacentHTML('afterend', planedLessonsHTML);
};

// генерируем разметку при первом заходе на страничку teacher.html
generateHTML();
