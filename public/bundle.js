'use strict';

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// Color
const propiedadColor = producto.querySelector('#propiedad-color');

// Funcionalidad de las thumbbails
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

propiedadColor.addEventListener('click', (e) => {
	if (e.target.tagName === 'INPUT') {
		productoImagen.src = `./img/tennis/${e.target.value}.jpg`;
	}
});