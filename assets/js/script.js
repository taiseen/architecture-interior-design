// 15 - Feb - 2022 

const menu = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navBar');

const allImg = document.querySelector('.projects .box-container');
lightGallery(allImg);


menu.addEventListener('click', () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');

});


document.addEventListener('DOMContentLoaded', () => {

    function counter(id, start, end, duration) {

        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {

            current += increment;
            obj.innerText = current;

            if (current == end) {
                obj.innerText += "+"
                clearInterval(timer);
            }

        }, step);
    }
    counter('count1', 0, 305, 7000);
    counter('count2', 0, 14, 5000);
    counter('count3', 0, 215, 7000);
    counter('count4', 0, 350, 7000);
});


window.addEventListener('scroll', () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('userClick');

    if (window.scrollY > 80) {

    } else {

    }
});