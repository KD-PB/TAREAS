const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("show");
});

let currentIndex = 0;
const images = document.querySelectorAll(".carousel-inner img");
const totalImages = images.length;

document.querySelector(".carousel-control.next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector(".carousel-control.prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Validación del Formulario de Contacto
document.getElementById("contact-form").addEventListener("submit", (event) => {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault();
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        event.preventDefault();
        return;
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}


// Seleccionar el botón y el body
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Evento para alternar el tema
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Guardar la preferencia del tema en el almacenamiento local
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Cargar la preferencia del usuario al cargar la página
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}
