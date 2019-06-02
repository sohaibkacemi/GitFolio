const loader = document.querySelector('.loader');
const profile = document.querySelector('.profile');
const projects = document.querySelector('.projects');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        setTimeout(() => profile.style.opacity = 1, 50);
        profile.style.display = 'block';
        setTimeout(() => projects.style.opacity = 1, 50);
        projects.style.display = 'block'
    }, 4000)
}

init();