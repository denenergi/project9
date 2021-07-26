import '../../../css/style.css';

import './reviews';
import './lessons';
import './profile';

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.onclick = () => {
    // localStorage.removeItem('teachers');
    window.location.href = 'index.html';
};
