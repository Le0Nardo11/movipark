let cajonSeleccionado = null


function buscarLugar(){
    const input = document.getElementById("buscador").value
    procesarDisponibilidad(input)
}


function buscarLugarPred(nombre){
    document.getElementById("buscador").value = nombre
    procesarDisponibilidad(nombre)
}


function procesarDisponibilidad(estacionamiento){

    const mensaje = document.getElementById("disponibilidad")
    const btnReservar = document.getElementById("btnReservar")
    const horarioContainer = document.getElementById("horario-container")
    const tituloMapa = document.getElementById("tituloMapa")
    const mapa = document.getElementById("mapa-estacionamiento")

    if(estacionamiento.trim()===""){
        alert("Ingresa un estacionamiento")
        return
    }

    const disponible = Math.random() < 0.7

    if(disponible){

        mensaje.textContent = `Lugar disponible en ${estacionamiento} `
        mensaje.style.background = "#16a34a"

        horarioContainer.style.display = "flex"
        btnReservar.style.display = "block"
        tituloMapa.style.display = "block"

        generarMapa()

    }else{

        mensaje.textContent = `Estacionamiento lleno en ${estacionamiento} `
        mensaje.style.background = "#dc2626"

        horarioContainer.style.display = "none"
        btnReservar.style.display = "none"
        tituloMapa.style.display = "none"

        mapa.innerHTML = ""
    }

}


function generarMapa(){

    const mapa = document.getElementById("mapa-estacionamiento")
    mapa.innerHTML = ""

    cajonSeleccionado = null

    for(let i=1;i<=20;i++){

        const cajon = document.createElement("div")
        cajon.classList.add("cajon")

        const ocupado = Math.random() < 0.3

        if(ocupado){

            cajon.classList.add("ocupado")
            cajon.textContent = i

        }else{

            cajon.classList.add("disponible")
            cajon.textContent = i

            cajon.onclick = function(){

                document.querySelectorAll(".cajon").forEach(c=>{
                    c.classList.remove("seleccionado")
                })

                cajon.classList.add("seleccionado")
                cajonSeleccionado = i

            }

        }

        mapa.appendChild(cajon)
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

    if(cajonSeleccionado === null){
        alert("Selecciona un cajón en el mapa")
        return
    }

    localStorage.setItem("estacionamiento", estacionamiento)
    localStorage.setItem("cajon", cajonSeleccionado)
    localStorage.setItem("llegada", horaLlegada)
    localStorage.setItem("salida", horaSalida)

    window.location.href = "pago.html"

}


document.getElementById("btnReservar").addEventListener("click", reservar)