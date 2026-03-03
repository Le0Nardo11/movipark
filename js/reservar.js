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

function reservar() {
    const horaLlegada = document.getElementById("horaLlegada").value;
    const horaSalida = document.getElementById("horaSalida").value;

    if (!horaLlegada || !horaSalida) {
        alert("Por favor selecciona la hora de llegada y salida");
        return;
    }

    const numEstacionamiento = Math.floor(Math.random() * 101); // 0 a 100
    alert(`¡Lugar reservado!\nNúmero de estacionamiento: ${numEstacionamiento}\nHora llegada: ${horaLlegada}\nHora salida: ${horaSalida}`);

    // Reiniciar campos
    document.getElementById("buscador").value = "";
    document.getElementById("horaLlegada").value = "";
    document.getElementById("horaSalida").value = "";
    document.getElementById("disponibilidad").textContent = "";
    document.getElementById("horario-container").style.display = "none";
    document.getElementById("btnReservar").style.display = "none";
}