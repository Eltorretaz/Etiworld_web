const sliderTrack = document.getElementById('slider-track');
      const images = sliderTrack.querySelectorAll('img');
      const prevBtn = document.getElementById('slider-prev');
      const nextBtn = document.getElementById('slider-next');
      const dots = document.querySelectorAll('#slider-dots button');
      let current = 0;

      function updateSlider(index) {
        sliderTrack.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
          dot.style.opacity = i === index ? '0.7' : '0.3';
        });
      }

      prevBtn.onclick = () => {
        current = (current - 1 + images.length) % images.length;
        updateSlider(current);
      };

      nextBtn.onclick = () => {
        current = (current + 1) % images.length;
        updateSlider(current);
      };

      dots.forEach(dot => {
        dot.onclick = () => {
          current = Number(dot.dataset.index);
          updateSlider(current);
        };
      });

      // Optional: auto-slide
      // setInterval(() => {
      //   nextBtn.click();
      // }, 5000);



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
const imagess = [
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
        carruselImage.style.backgroundImage = `url('${imagess[currentIndex]}')`;

        // 4. Inicia el Fade-In: aplica la clase de Tailwind 'opacity-100'
        carruselImage.classList.remove('opacity-0');
        carruselImage.classList.add('opacity-100');

    }, TRANSITION_DURATION); // Este setTimeout espera exactamente lo que dura tu transición

}, INTERVAL_DELAY);

