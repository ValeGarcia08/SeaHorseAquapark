const info = [
    {
        Titulo: "titulo1",
        Descripcion: "aqui descripcion1"
    },
    {
        Titulo: "titulo2",
        Descripcion: "aqui descripcion2"
    }
]

const infoTitulo = document.getElementById("titulo_Info")
const imagenInfo = document.getElementById("imagen-info")
const infoDescripcion = document.getElementById("parrafo_Info")

const moreInfo = () => {
    const overlay = document.getElementById("overlay")
    const boton = document.querySelector(".content-info")
        if (!boton.classList.contains("visible")) {
            console.log("Mostrando...");
            boton.classList.add("visible");
            overlay.style.display = "block"
        } else {
            console.log("Ocultando...");
            boton.classList.remove("visible");
            overlay.style.display = "none"
        }
        console.log(boton)
}

let index = 0
const adelante = document.getElementById('f_Adelante')
const atras = document.getElementById('f_Atras')
const cambioContenido = () => {
    infoTitulo.innerText = info[index].Titulo;
    infoDescripcion.innerText = info[index].Descripcion
}

adelante.addEventListener("click", () => {
    index = (index + 1) % info.length;
    cambioContenido()
})
atras.addEventListener('click', () => {
    index = (index - 1 + info.length) % info.length;
    cambioContenido()
})



 