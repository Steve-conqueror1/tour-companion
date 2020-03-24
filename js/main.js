const navigationBars = document.querySelectorAll('.navigation__bar');

const navigationMenu = document.querySelector('.navigation__menu');

const boxElement = document.querySelector('.hide-nav');


navigationMenu.addEventListener('click', () => {
    navigationBars.forEach((item) => {
        // console.log(item.className);
        if (item.className === 'navigation__bar') {
            item.classList.remove('navigation__bar');
            item.classList.add('navigation__bar-clicked');
            boxElement.classList.add('navigation__box');
            boxElement.classList.remove('hide-nav');
        } else {
            item.classList.remove('navigation__bar-clicked');
            item.classList.add('navigation__bar');
            boxElement.classList.add('hide-nav');
            boxElement.classList.remove('navigation__box');
            console.log(boxElement);
        }
    })
});
