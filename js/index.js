const carrusel = document.getElementById('carruselContenido');
  const items = document.querySelectorAll('.carrusel .item');
  const total = items.length;
  let index = 0;

  function updateCarrusel() {
    carrusel.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % total; // Bucle hacia adelante
    updateCarrusel();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index - 1 + total) % total; // Bucle hacia atrás
    updateCarrusel();
  });