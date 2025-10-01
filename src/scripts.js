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

 //carrusel image
/*     const carruselImage = document.getElementById('carrusel-image');
    const images = [
        '/assets/entrega-1.jpeg',
        '/assets/entrega-2.jpeg',
        '/assets/entrega-3.jpeg'];
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        carruselImage.style.backgroundImage = `url('${images[currentIndex]}')`;
    }, 5000); */

    const carruselImage = document.getElementById('carrusel-image');
const images = [
    '/assets/entrega-1.jpeg',
    '/assets/entrega-2.jpeg',
    '/assets/entrega-3.jpeg'
];
let currentIndex = 0;
// La duración de la transición en milisegundos debe coincidir con 'duration-1000' de Tailwind.
const TRANSITION_DURATION = 1000;
// El intervalo total de 5000ms (5 segundos) debe incluir el tiempo de la transición.
const INTERVAL_DELAY = 3000;


setInterval(() => {
    // 1. Inicia el Fade-Out: aplica la clase de Tailwind 'opacity-0'
    carruselImage.classList.remove('opacity-100');
    carruselImage.classList.add('opacity-30');

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