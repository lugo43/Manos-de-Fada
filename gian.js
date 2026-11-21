
// REDES SOCIALES

const redes = [
    {
        nombre: "Instagram",
        url: "https://www.instagram.com/"
    },
    {
        nombre: "Facebook",
        url: "https://www.facebook.com/"
    },
    {
        nombre: "WhatsApp",
        url: "https://wa.me/598XXXXXXXXX"
    }
];

const contenedor = document.getElementById("redes-sociales");

redes.forEach(red => {

    const boton = document.createElement("a");

    boton.textContent = red.nombre;
    boton.href = red.url;

    boton.target = "_blank";
    boton.rel = "noopener noreferrer";

    contenedor.appendChild(boton);

});
