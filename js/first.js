document.addEventListener('DOMContentLoaded', () => {
    const first = document.querySelector('.first');
    const header = document.querySelector('.header');

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let firstCenter = first.offsetHeight / 4;

        if (scrollTop >= firstCenter) {
            header.classList.add('fixed')
            first.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed')
            first.style.marginTop = `0px`;
        }
    };

    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
    });
});
