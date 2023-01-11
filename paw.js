let confettiAmount = 60,
    confettiColors = [
        '#7d32f5',
        '#f6e434',
        '#63fdf1',
        '#e672da',
        '#295dfe',
        '#6e57ff'
    ],
    random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    createConfetti = to => {
        let elem = document.createElement('i'),
            set = Math.random() < 0.5 ? -1 : 1;
        elem.style.setProperty('--x', random(-260, 260) + 'px');
        elem.style.setProperty('--y', random(-160, 160) + 'px');
        elem.style.setProperty('--r', random(0, 360) + 'deg');
        elem.style.setProperty('--s', random(.6, 1));
        elem.style.setProperty('--b', confettiColors[random(0, 5)]);
        to.appendChild(elem);
    };

document.querySelectorAll('.paw-button').forEach(elem => {
    elem.addEventListener('click', e => {
        let number = elem.children[1].textContent;
        if(!elem.classList.contains('animation')) {
            elem.classList.add('animation');
            for(let i = 0; i < confettiAmount; i++) {
                createConfetti(elem);
            }
            setTimeout(() => {
                elem.classList.add('confetti');
                setTimeout(() => {
                    elem.classList.add('liked');
                    elem.children[1].textContent = parseInt(number) + 1;
                }, 400);
                setTimeout(() => {
                    elem.querySelectorAll('i').forEach(i => i.remove());
                }, 600);
            }, 260);
        } else {
            elem.classList.remove('animation', 'liked', 'confetti');
            elem.children[1].textContent = parseInt(number) - 1;
        }
        e.preventDefault();
    });
});
