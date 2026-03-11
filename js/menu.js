function abrirMenu(){

const menu=document.getElementById("menuLateral")

if(menu.style.left==="0px"){
menu.style.left="-260px"
}else{
menu.style.left="0px"
}

}

function cerrarSesion(){

alert("Sesión cerrada")

window.location.href="login.html"

}