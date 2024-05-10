document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        let timeElapsed = 0;
        let distance = 0;
        let acceleration = 9.8;  // Aproximando a aceleração da gravidade (m/s^2)
        let timeStep = 20;       // Intervalo de tempo para o movimento (ms)

        function move() {
            timeElapsed += timeStep / 1000;  // Convertendo para segundos
            distance = 0.5 * acceleration * Math.pow(timeElapsed, 2);
            cell.style.transform = `translateY(${distance}px)`;
            cell.style.opacity = 1;

            if (distance < window.innerHeight * 0.5) {
                setTimeout(move, timeStep);
            }
        }

        setTimeout(() => {
            move();
        }, index * 100);
    });
});
