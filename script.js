document.querySelector('#contacto form').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = this.querySelector('.btn-enviar');
    const originalContent = btn.innerHTML;

    // 1. Estado: Procesando
    btn.innerHTML = 'Procesando...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
        // 2. Estado: Éxito (Mismo azul neón, pero relleno y con más brillo)
        btn.innerHTML = '¡Mensaje Recibido! ✉️';
        btn.style.backgroundColor = "#007bff"; // Tu azul neón de siempre
        btn.style.color = "#ffffff";
        // Aumentamos el brillo para que parezca que el botón se "encendió"
        btn.style.boxShadow = "0 0 30px rgba(0, 123, 255, 0.8)";
        
        this.reset();

        // 3. Volver a la normalidad
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.backgroundColor = ""; 
            btn.style.color = "";
            btn.style.boxShadow = "";
            btn.style.pointerEvents = "all";
        }, 3000);
    }, 1500);
});

// Configuración del observador para revelar elementos al hacer scroll
const observerOptions = {
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Seleccionamos todas las secciones para observar
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in'); // Añadimos la clase base
    observer.observe(section);
});