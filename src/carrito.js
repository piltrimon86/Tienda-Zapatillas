const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]')
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]')
const ventanaCarrito = document.getElementById('carrito')
const btnAgregarCarrito = document.getElementById('agregar-al-carrito')
const producto = document.getElementById('producto')
const carrito = []

const renderCarrito = () => {
	ventanaCarrito.classList.add('carrito--active')

	console.log(carrito)
}
// Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		renderCarrito()
	})
})

// Cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		ventanaCarrito.classList.remove('carrito--active')
	})
})

btnAgregarCarrito.addEventListener('click', (e) => {
	const id = producto.dataset.productoId
	const nombre = producto.querySelector('.producto__nombre').innerText
	const cantidad = parseInt(producto.querySelector('#cantidad').value)
	const color = producto.querySelector('#propiedad-color input:checked').value
	const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value

	carrito.push({
		id: id,
		nombre: nombre,
		cantidad: cantidad,
		color: color,
		tamaño: tamaño,
	})
})
