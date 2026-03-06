let text = document.getElementById('text');
let navbarset = document.getElementById('navbarset');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -2.5 + 'px';
    navbarset.style.marginTop = value * -2.5 + 'px';
    hill5.style.left = value * -1.5 + 'px';
    hill4.style.left = value * 1.5 + 'px';
})