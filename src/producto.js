const producto = document.getElementById('producto')
const productoImagen = producto.querySelector('.producto__imagen')
const thumbs = producto.querySelector('.producto__thumbs')

// Color
const propiedadColor = producto.querySelector('#propiedad-color')

// Cantidad
const btnDisminuir = producto.querySelector('#disminuir-cantidad')
const btnIncrementar = producto.querySelector('#incrementar-cantidad')
const inputCantidad = producto.querySelector('#cantidad')

// Funcionalidad de las thumbnails
thumbs.addEventListener('click', (e) => {
	if (e.target.tagName === 'IMG') {
		const imagenSrc = e.target.src

		//Obtenemos la posición del último //
		const lastIndex = imagenSrc.lastIndexOf('/')

		// Cortamos el string para obtener solamente una parte //
		const nombreImagen = imagenSrc.substring(lastIndex + 1)

		// Cambiamos la ruta de la imagen del producto //
		productoImagen.src = `./img/tennis/${nombreImagen}`
	}
})

// Funcionalidad de la propiedad color
propiedadColor.addEventListener('click', (e) => {
	if (e.target.tagName === 'INPUT') {
		productoImagen.src = `./img/tennis/${e.target.value}.jpg`
	}
})

// Funcionalidad de disminuir o incrementar cantidad
btnIncrementar.addEventListener('click', (e) => {
	inputCantidad.value = parseInt(inputCantidad.value) + 1
})

btnDisminuir.addEventListener('click', (e) => {
	if (parseInt(inputCantidad.value) > 1) {
		inputCantidad.value = parseInt(inputCantidad.value) - 1
	}
})
