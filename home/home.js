window.onload = () => {

    // animateServices();

    animateHome();

    function animateHome() {
        const cuttedPlane = document.getElementById('cutted-plane-group');
        const plane = document.getElementById('plane');
        const title = document.getElementById('title');


        cuttedPlane.classList.add('animate-plane1');
        plane.classList.add('plane-enter');

        title.classList.add('animate-title');

        setTimeout(() => {
            title.classList.remove('animate-title');
            title.classList.add('animate2-title');
        }, 4000)
    }

    function animateServices () {

        const reactors = Array.prototype.slice.call(document.getElementsByClassName('reactors'));
        const wingsAndCokpit = document.getElementById('wings-cokpit');
        const circle = document.getElementById('circle');

        reactors.forEach((reactor) => {
            reactor.classList.add('aminate');
        });

        wingsAndCokpit.classList.add('animated1-wings-cokpit');

        circle.classList.add('animated1-circle');
    }
};