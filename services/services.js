window.onload = () => {

    animateServices();

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