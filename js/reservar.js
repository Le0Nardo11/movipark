function buscarLugar() {
    const input = document.getElementById("buscador").value;
    const mensaje = document.getElementById("disponibilidad");
    const btnReservar = document.getElementById("btnReservar");

    if (input.trim() === "") {
        alert("Por favor ingresa un estacionamiento");
        return;
    }

    // Disponibilidad aleatoria
    const disponible = Math.random() < 0.5; // 50% de probabilidad

    if (disponible) {
        mensaje.textContent = "Lugar disponible ✅";
        mensaje.style.backgroundColor = "#16a34a"; // verde
        btnReservar.style.display = "inline-block"; // mostrar botón reservar
    } else {
        mensaje.textContent = "Estacionamiento lleno ❌";
        mensaje.style.backgroundColor = "#dc2626"; // rojo
        btnReservar.style.display = "none"; // ocultar botón
    }
}