function buscarLugar() {
    const input = document.getElementById("buscador").value;
    const mensaje = document.getElementById("disponibilidad");
    const btnReservar = document.getElementById("btnReservar");
    const horarioContainer = document.getElementById("horario-container");

    if (input.trim() === "") {
        alert("Por favor ingresa un estacionamiento");
        return;
    }

    // Disponibilidad aleatoria
    const disponible = Math.random() < 0.5; // 50% de probabilidad

    if (disponible) {
        mensaje.textContent = "Lugar disponible ✅";
        mensaje.style.backgroundColor = "#16a34a"; // verde
        horarioContainer.style.display = "flex"; // mostrar horarios
        btnReservar.style.display = "inline-block"; // mostrar botón reservar
    } else {
        mensaje.textContent = "Estacionamiento lleno ❌";
        mensaje.style.backgroundColor = "#dc2626"; // rojo
        horarioContainer.style.display = "none"; // ocultar horarios
        btnReservar.style.display = "none"; // ocultar botón
    }
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