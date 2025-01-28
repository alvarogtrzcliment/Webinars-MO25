// Contador

const botonConocenos = document.getElementById('boton-conocenos')

const resultadoContador = document.getElementById('resultado-contador')

console.log(resultadoContador)

botonConocenos.addEventListener('click', botonConocenosHandler)

let contador = 0

function botonConocenosHandler() {
  contador += 1

  if (contador == 1) {
    resultadoContador.innerText = `Nos has conocido ya ${contador} vez`
  } else {
    resultadoContador.innerText = `Nos has conocido ya ${contador} veces`
  }
}

// Botón de ver más.

const botonVerMas = document.getElementById('boton-verMas')

const descripcion = document.getElementById('descripcionZaragoza')

console.log(descripcion)

botonVerMas.addEventListener('click', () => {
  console.log(descripcion.childElementCount)

  if (descripcion.childElementCount == 2) {
    const elementoParrafo = document.createElement('p')
    const textoParrafo = document.createTextNode(
      'La idea de la "ciudad de 15 minutos" se refiere a la posibilidad de que las personas puedan acceder a todas las necesidades básicas y servicios dentro de un radio de 15 minutos caminando o en transporte público.'
    )
    elementoParrafo.appendChild(textoParrafo)
    descripcion.appendChild(elementoParrafo)

    botonVerMas.innerHTML = 'Ver Menos'
  } else if (descripcion.childElementCount > 2) {
    descripcion.lastChild.remove()

    botonVerMas.innerHTML = 'Ver Más'
  }
})
