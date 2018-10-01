const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
//or
//const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
const opacity = 0.6;
//set first image opacity
imgs[0].style.opacity = opacity;

// click and display images es6 style
//imgs.forEach(img => img.addEventListener('click', e => current.src = e.target.src));

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //reset opacity 
    imgs.forEach(img => img.style.opacity = 1);
    current.src = e.target.src;
    //add fade in class
    current.classList.add('fade-in');

    // remove fade-in class after 0.5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change opacity
    e.target.style.opacity = opacity;
}

document.querySelector('.test').onmouseover = () => {
    document.querySelector('.test').style.display = 'none';
};
