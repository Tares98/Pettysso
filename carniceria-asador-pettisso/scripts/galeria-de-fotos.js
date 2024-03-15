let indiceFotoActual = 0;

function cambiarFoto(n) {
    const fotos = document.querySelectorAll('#exhibicion-de-fotos img');
    const numFotos = fotos.length;
    fotos[indiceFotoActual].classList.remove('imagen-activa');
    indiceFotoActual = (indiceFotoActual + n + numFotos) % numFotos;
    fotos[indiceFotoActual].classList.add('imagen-activa');
}
