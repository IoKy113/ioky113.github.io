let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/the-kings-avatar.jpg') {
      miImage.setAttribute('src','images/the-kings-avatar-2.jpg');
    } else {
      miImage.setAttribute('src', 'images/the-kings-avatar.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre || miNombre === null){
        estableceNombreUsuario();
    }
    else{
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Ye Xiu es Ye Qiu, ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Ye Xiu es Ye Qiu, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}