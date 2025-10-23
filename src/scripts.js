
const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });

    const carruselImage = document.getElementById('carrusel-image');
const images = [
    './assets/entrega/entrega-1.jpeg',
    './assets/entrega/entrega-2.jpeg',
    './assets/entrega/entrega-3.jpeg',
    './assets/entrega/entrega-4.jpeg',
    './assets/entrega/entrega-5.jpeg'
];
let currentIndex = 0;
// La duración de la transición en milisegundos debe coincidir con 'duration-1000' de Tailwind.
const TRANSITION_DURATION = 200;
// El intervalo total de 4000ms (4 segundos) debe incluir el tiempo de la transición.
const INTERVAL_DELAY = 4000;


setInterval(() => {
    // 1. Inicia el Fade-Out: aplica la clase de Tailwind 'opacity-0'
    carruselImage.classList.remove('opacity-100');
    carruselImage.classList.add('opacity-0');

    // 2. Espera a que termine el Fade-Out (TRANSITION_DURATION)
    setTimeout(() => {
        // 3. Cambia la imagen mientras es invisible
        currentIndex = (currentIndex + 1) % images.length;
        carruselImage.style.backgroundImage = `url('${images[currentIndex]}')`;

        // 4. Inicia el Fade-In: aplica la clase de Tailwind 'opacity-100'
        carruselImage.classList.remove('opacity-0');
        carruselImage.classList.add('opacity-100');

    }, TRANSITION_DURATION); // Este setTimeout espera exactamente lo que dura tu transición

}, INTERVAL_DELAY);

let intervalId = 7000;

function nextVideo(id1, id2, id3) {
        const video = document.getElementById(id1);
        const video2 = document.getElementById(id2);
        const video3 = document.getElementById(id3);

        let count1 = 1;
        let count2 = 6;
        let count3 = 11;

        setInterval(() => {

            count1 = count1 + 1;
            console.log(count1);
            count2 = count2 + 1;
            console.log(count2);
            count3 = count3 + 1;
            console.log(count3);

            if (count1 > 5) {
                count1 = 1;
            }
            if (count2 > 10) {
                count2 = 6;
            }
            if (count3 > 15) {
                count3 = 11;
            }

            let timeout = 1000; // Duración de la transición en milisegundos
            video.classList.replace('opacity-100', 'opacity-0');
            video2.classList.replace('opacity-100', 'opacity-0');
            video3.classList.replace('opacity-100', 'opacity-0');

        setTimeout(() => {
            video['src'] = `./assets/videos/video${count1}.mp4`;
            video2['src'] = `./assets/videos/video${count2}.mp4`;
            video3['src'] = `./assets/videos/video${count3}.mp4`;

            video.classList.replace('opacity-0', 'opacity-100');
            video2.classList.replace('opacity-0', 'opacity-100');
            video3.classList.replace('opacity-0', 'opacity-100');
        }, timeout);


    }, intervalId);
}

nextVideo('video1', 'video2', 'video3');


