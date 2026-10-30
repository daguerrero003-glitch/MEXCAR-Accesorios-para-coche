
// ======================================
// PRODUCTOS MEXCAR+
// ======================================

const dwdiego = [

    // ACCESORIOS

    {
        id: 1,
        name: "Volante Deportivo de Alto Rendimiento",
        image: "img/IMG_0074.PNG",
        genero: "proyectos",
        description: "Diseño ergonómico con excelente agarre para mejorar la experiencia de manejo y estética interior."
    },

    {
        id: 2,
        name: "Parasol",
        image: "img/IMG_0075.PNG",
        genero: "proyectos",
        description: "Protección térmica plegable para el parabrisas, ideal para mantener el interior de tu vehículo fresco."
    },

    {
        id: 3,
        name: "Juego de Plumas Limpiaparabrisas",
        image: "img/IMG_0079.JPG",
        genero: "proyectos",
        description: "Barrido silencioso y visión clara bajo lluvia intensa con ajuste universal para la mayoría de vehículos."
    },

    {
        id: 4,
        name: "Mini Bote de Basura Portátil",
        image: "img/IMG_0083.JPG",
        genero: "proyectos",
        description: "Accesorio compacto y elegante de fácil colocación para mantener tu coche o tractocamión limpio y ordenado."
    },


    // REFACCIONES

    {
        id: 5,
        name: "Bastón Candado de Seguridad",
        image: "img/IMG_0076.JPG",
        genero: "unete",
        description: "Protección antirrobo reforzada en acero de alta resistencia para todo tipo de autos y camionetas."
    },

    {
        id: 6,
        name: "Cepillo para Lavar Coches",
        image: "img/IMG_0078.JPG",
        genero: "unete",
        description: "Cepillo de cerdas suaves con bastón telescópico para una limpieza profunda y segura de la pintura."
    },

    {
        id: 7,
        name: "Cubrevolante - Versión Alterna 1",
        image: "img/IMG_0081.PNG",
        genero: "unete",
        description: "Variante de diseño en agarre y textura para personalizar la comodidad al conducir."
    },

    {
        id: 8,
        name: "Cubrevolante - Versión Alterna 2",
        image: "img/IMG_0082.PNG",
        genero: "unete",
        description: "Variante adicional de protección y estilo deportivo para el volante de tu vehículo."
    }

];


// ======================================
// OBTENER CONTENEDOR
// ======================================

const dwdiegoContainer = document.getElementById("programa-container");


// ======================================
// FUNCIÓN PARA CREAR TARJETAS
// ======================================

function renderDw(genero) {

    let dwdiegoToRender = [];

    if (genero === "all") {

        dwdiegoToRender = dwdiego;

    } else {

        dwdiegoToRender = dwdiego.filter(
            item => item.genero === genero
        );

    }


    // LIMPIAR CONTENEDOR

    dwdiegoContainer.innerHTML = "";


    // COMPROBAR PRODUCTOS

    if (dwdiegoToRender.length === 0) {

        dwdiegoContainer.innerHTML =
        '<p class="text-center w-100">No hay productos disponibles en esta categoría.</p>';

        return;

    }


    // GENERAR TARJETAS

    dwdiegoToRender.forEach(dw => {

        const card = document.createElement("figure");

        card.className = "proyecto-card";

        card.dataset.gender = dw.genero;


        card.innerHTML = `

            <div class="img-container">

                <img
                    src="${dw.image}"
                    alt="${dw.name}"
                    loading="lazy"
                >

            </div>

            <figcaption>
                ${dw.name}
            </figcaption>

            <div class="card-description">

                <p>
                    ${dw.description}
                </p>

            </div>

        `;


        dwdiegoContainer.appendChild(card);

    });

}


// ======================================
// FILTROS DE PRODUCTOS
// ======================================

const filterButtons = document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const genero = button.dataset.category;


        // QUITAR CLASE ACTIVA

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // ACTIVAR BOTÓN SELECCIONADO

        button.classList.add("active");


        // MOSTRAR PRODUCTOS

        renderDw(genero);

    });

});


// ======================================
// BOTÓN VOLVER AL INICIO
// ======================================

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ======================================
// INICIAR PÁGINA
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    renderDw("all");

});
