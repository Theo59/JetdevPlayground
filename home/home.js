window.onload = () => {

    animateHome();

    function animateHome() {
        const plane = document.getElementById('plane');
        const title = document.getElementById('title');


        plane.classList.add('plane-enter');

        title.classList.add('animate-title');

        setTimeout(() => {
            title.classList.remove('animate-title');
            title.classList.add('animate2-title');
        }, 4000)
    }
};