function buscarLugar() {
    
    const input = document.getElementById("buscador").value;
    const mensaje = document.getElementById("disponibilidad");
    const btnReservar = document.getElementById("btnReservar");
    const horarioContainer = document.getElementById("horario-container");
    const loader = document.getElementById("loader");

    if (input.trim() === "") {
        alert("Por favor ingresa un estacionamiento");
        return;
    }

    // mostrar loader
    loader.style.display = "block";
    mensaje.style.display = "none";
    horarioContainer.style.display = "none";
    btnReservar.style.display = "none";

    setTimeout(() => {

        loader.style.display = "none";
        mensaje.style.display = "block";

        const disponible = Math.random() < 0.5;

        if (disponible) {
            mensaje.textContent = "Lugar disponible ✅";
            mensaje.style.backgroundColor = "#16a34a";
            horarioContainer.style.display = "flex";
            btnReservar.style.display = "block";
        } else {
            mensaje.textContent = "Estacionamiento lleno ❌";
            mensaje.style.backgroundColor = "#dc2626";
        }

    }, 1000);
}

function reservar(){

    const horaLlegada = document.getElementById("horaLlegada").value
    const horaSalida = document.getElementById("horaSalida").value
    const estacionamiento = document.getElementById("buscador").value

    if(!horaLlegada || !horaSalida){
        alert("Selecciona horario")
        return
    }

    const numero = Math.floor(Math.random()*101)

    // Guardar datos para usarlos en la página de pago
    localStorage.setItem("estacionamiento", estacionamiento)
    localStorage.setItem("cajon", numero)
    localStorage.setItem("llegada", horaLlegada)
    localStorage.setItem("salida", horaSalida)

    // Ir a página de pago
    window.location.href = "pago.html"
}