'use strict';

const producto$1 = document.getElementById('producto');
const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

// Color
const propiedadColor = producto$1.querySelector('#propiedad-color');

// Cantidad
const btnDisminuir = producto$1.querySelector('#disminuir-cantidad');
const btnIncrementar = producto$1.querySelector('#incrementar-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');

// Funcionalidad de las thumbnails
thumbs.addEventListener('click', (e) => {
	if (e.target.tagName === 'IMG') {
		const imagenSrc = e.target.src;

		//Obtenemos la posición del último //
		const lastIndex = imagenSrc.lastIndexOf('/');

		// Cortamos el string para obtener solamente una parte //
		const nombreImagen = imagenSrc.substring(lastIndex + 1);

		// Cambiamos la ruta de la imagen del producto //
		productoImagen.src = `./img/tennis/${nombreImagen}`;
	}
});

// Funcionalidad de la propiedad color
propiedadColor.addEventListener('click', (e) => {
	if (e.target.tagName === 'INPUT') {
		productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
	}
});

// Funcionalidad de disminuir o incrementar cantidad
btnIncrementar.addEventListener('click', (e) => {
	inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

btnDisminuir.addEventListener('click', (e) => {
	if (parseInt(inputCantidad.value) > 1) {
		inputCantidad.value = parseInt(inputCantidad.value) - 1;
	}
});

const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];

const renderCarrito = () => {
	ventanaCarrito.classList.add('carrito--active');

	console.log(carrito);
};
// Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		renderCarrito();
	});
});

// Cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		ventanaCarrito.classList.remove('carrito--active');
	});
});

btnAgregarCarrito.addEventListener('click', (e) => {
	const id = producto.dataset.productoId;
	const nombre = producto.querySelector('.producto__nombre').innerText;
	const cantidad = parseInt(producto.querySelector('#cantidad').value);
	const color = producto.querySelector('#propiedad-color input:checked').value;
	const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

	carrito.push({
		id: id,
		nombre: nombre,
		cantidad: cantidad,
		color: color,
		tamaño: tamaño,
	});
});
