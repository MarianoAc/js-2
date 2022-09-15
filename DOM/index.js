let productos = []

const selectTag = document.getElementById('lista')

const placaMadre = {
    id:1,
    nombre: 'Placa Madre',
    precio: 10000
  }
  productos.push(placaMadre)
  const memoriaRam = {
    id:2,
    nombre: 'Memoria Ram',
    precio: 4000,
  }
  productos.push(memoriaRam)
  const procesador = {
    id:3,
    nombre: 'Procesador',
    precio: 20000
  }
  productos.push(procesador)
  const placaDeVideo = {
    id:4,
    nombre: 'Placa de video',
    precio: 50000
  }
  productos.push(placaDeVideo)

productos.forEach((producto) => {
  const option = document.createElement('option')
  option.innerText = `${producto.nombre}: $${producto.precio}`
  option.setAttribute('id', `${producto.id}`)
  selectTag.append(option)
})

let carrito = []

const boton = document.createElement('button')
boton.innerText = 'seguir comprando'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'terminar compra'
document.body.append(boton2)

boton.onclick = () => {
  const productoSeleccionado = productos[selectTag.selectedIndex]
  carrito.push(productoSeleccionado)
}

boton2.onclick = () => {
  console.log(carrito)
  let totalCompra = 0
  carrito.forEach((prod) => {
    totalCompra = totalCompra + prod.precio
  })

  alert(`El precio total a pagar es ${totalCompra}`)
  const p = document.createElement('p')
  p.innerText = `El precio total a pagar es ${totalCompra}`
  document.body.append(p)
}