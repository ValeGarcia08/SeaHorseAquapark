const infoEcosistemas = {
    boton1: [
        { Titulo: "Océanos", Descripcion: "Los océanos cubren el 71% de la superficie terrestre.", Imagen: "../Imagenes/oceano.jpg" },
        { Titulo: "Ecosistema Marino", Descripcion: "Los ecosistemas marinos tienen una gran biodiversidad.", Imagen: "../Imagenes/marino.jpg" }
    ],
    boton2: [
        { Titulo: "Bosques", Descripcion: "Los bosques proporcionan oxígeno y hábitat para muchas especies.", Imagen: "../Imagenes/bosque.jpg" },
        { Titulo: "Selva Amazónica", Descripcion: "La selva amazónica es el pulmón del mundo.", Imagen: "../Imagenes/selva.jpg" }
    ],
    boton3: [
        { Titulo: "Desiertos", Descripcion: "Los desiertos son biomas con poca lluvia.", Imagen: "../Imagenes/desierto.jpg" },
        { Titulo: "Sahara", Descripcion: "El Sahara es el desierto cálido más grande del mundo.", Imagen: "../Imagenes/sahara.jpg" }
    ]
};

const infoTitulo = document.getElementById("titulo_Info")
const imagenInfo = document.getElementById("imagen-info")
const infoDescripcion = document.getElementById("parrafo_Info")
const overlay = document.getElementById("overlay")
const info = document.querySelector(".content-info")
const adelante = document.getElementById('f_Adelante')
const atras = document.getElementById('f_Atras')

let infoActual = [];
let index = 0;

const cambioContenido = () => {
    infoTitulo.innerText = infoActual[index].Titulo;
    infoDescripcion.innerText = infoActual[index].Descripcion;
};

// Evento para capturar clic en los botones y cambiar contenido
document.querySelectorAll(".click-here").forEach((boton) => {
    boton.addEventListener("click", () => {
        const valor = boton.getAttribute("value");

        if (infoEcosistemas[valor]) {
            infoActual = infoEcosistemas[valor]; 
            index = 0; // Reinicia al primer elemento
            cambioContenido(); 
        }
    });
});


const moreInfo = () => {
        if (!info.classList.contains("visible")) {
            console.log("Mostrando...");
            info.classList.add("visible");
            overlay.style.display = "block"
        } else {
            console.log("Ocultando...");
            info.classList.remove("visible");
            overlay.style.display = "none"
        }
        console.log(info)
}

adelante.addEventListener("click", () => {
    index = (index + 1) % infoActual.length;
    cambioContenido()
})
atras.addEventListener('click', () => {
    index = (index - 1 + infoActual.length) % infoActual.length;
    cambioContenido()
})



 