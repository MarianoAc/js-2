let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Placa Madre - 2.Memoria Ram - 3.Procesador - 4.Placa de video'
    )
)
let seguirComprando = true
let decision
let productos = []
let carrito = []
const placaMadre = {
    nombre:'Placa Madre',
    precio: 10000
  }
  productos.push(placaMadre)
  const memoriaRam = {
    nombre:'Memoria Ram',
    precio: 4000,
  }
  productos.push(memoriaRam)
  const procesador = {
    nombre:'Procesador',
    precio: 20000
  }
  productos.push(procesador)
  const placaDeVideo = {
    nombre:'Placa de video',
    precio: 50000
  }
  productos.push(placaDeVideo)
  
  while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
      carrito.push(productos[0])
    } else if (productoSeleccionado === 2) {
      carrito.push(productos[1])
    } else if (productoSeleccionado === 3) {
      carrito.push(productos[2])
    } else if (productoSeleccionado === 4) {
      carrito.push(productos[3])
    } else {
      productoSeleccionado = parseInt(
        prompt(
          'ingresa un producto existente: 1.Placa Madre - 2.Memoria Ram - 3.Procesador - 4.Placa de video'
        )
      )
      continue
        }
        decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
        if (decision === 1) {
          productoSeleccionado = parseInt(
            prompt(
              'Ingresa el numero del producto que quieres comprar: 1.Placa Madre - 2.Memoria Ram - 3.Procesador - 4.Placa de video'
            )
          )
        } else if (decision === 2) {
          seguirComprando = false
        }
      }
      for(let i=0;i<carrito.length;i++){
        totalCompra = totalCompra +carrito[i].precio
      }
      
      alert('El valor total sin descuento ni impuestos es: ' + totalCompra)

      function precioConDescuento(valor){
        let descuento = 0
        if(valor<=4000){
            descuento = valor * (5/100)
        } else if(valor>4000 && valor<=6000){
            descuento = valor * (10/100)
        } else if(valor>6000 && valor<=10000){
            descuento = valor * (15/100)
        } else {
            descuento = valor * (20/100)
        }
        let valorDescuento = valor *(descuento/valor)
        valor = valor - valorDescuento
        return valor
        }
        let valorConDescuento = precioConDescuento(totalCompra)
        alert('El total con descuento sin impuestos es: '+valorConDescuento)
        
        function precioConImpuesto(valor){
            const impuestos = valor * (10/100)
            return valor + impuestos
        }     
        let valorFinalConImpuesto = precioConImpuesto(valorConDescuento)
        alert('El valor final a pagar es de: '+valorFinalConImpuesto)
        let valorCuota = 0
        pagoEnCuotas = parseInt(prompt('¿Queres pagarlo en cuotas? 1.Si - 2.No'))
        if (pagoEnCuotas === 1 ) {
             cantidadCuotas =parseInt(prompt('Elija la cantidad de cuotas: 1.3 - 2.6 -3.9 - 4.12'))
            if (cantidadCuotas === 1) {
               valorCuota = valorFinalConImpuesto / 3
            }
            else if (cantidadCuotas ===2){
                valorCuota = valorFinalConImpuesto / 6
            }
            else if (cantidadCuotas ===3){
                valorCuota = valorFinalConImpuesto / 9
            }
            else if (cantidadCuotas ===4){
                valorCuota = valorFinalConImpuesto / 12
            }
        }
        else if (pagoEnCuotas === 2){
            pagoEnCuotas = false
        }
        alert('El valor total de las cuotas es: '+valorCuota)