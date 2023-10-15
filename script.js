const $left = document.querySelector('.left');
const $right = document.querySelector('.right');
const $slider = document.querySelector('ol');

const WIDTH = document.querySelector(`.slider`).clientWidth;
const totalWidth = $slider.querySelectorAll('li').length * WIDTH;

$slider.style.width = `${totalWidth}px`;
$slider.prepend($slider.querySelector(`li:last-child`));
$slider.style.left = `-${WIDTH}px`;

const move = (s) => {
    const v = (WIDTH * s) - WIDTH;
    $slider.style.transition = `all 0.5s ease`;
    $slider.style.left = `${v}px`;
    setTimeout(() => {
        if( s > 0 ) {
            $slider.prepend($slider.querySelector(`li:last-child`));
        } else {
            $slider.append($slider.querySelector(`li:first-child`));
        }
        $slider.style.transition = `none`;
        $slider.style.left = `-${WIDTH}px`;
    }, 500);
};

$left.onclick = () => {
    move(1);
};

$right.onclick = () => {
    move(-1);
};

let playInterval = null;
autoplay.onchange = () => {
    if( autoplay.checked ) {
        playInterval = setInterval(() => {
            move(-1);
        }, 2000);
    } else {
        clearInterval(playInterval);
    }
};
