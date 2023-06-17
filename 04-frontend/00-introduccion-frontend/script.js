function saludar() {
    alert('hola diste click');
}

var boton = document.querySelector('button');

boton.addEventListener('click', saludar);