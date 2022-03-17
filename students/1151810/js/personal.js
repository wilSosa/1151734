function abrirVentana() {
    window.open("../index.html", '_self');
}
function cerrarVentana() {
    if (confirm("Seguro que quieres salir?"))
        window.close();
}

var contador = 0;

function cambiarTamaño() {
    contador++;
    box = document.getElementsByClassName('container')[0];
    if (contador %2 == 0) {
        box.style.width = '130vh';
        box.style.height = '90vh';
    } else {
        box.style.width = '180vh';
        box.style.height = '100vh';
    }
    console.log(contador);
}
setTimeout(function () {
    changeSize();
}, 2000);