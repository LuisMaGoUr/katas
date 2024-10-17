/* Ejercicio 11

Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
pista (typeof) */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let numeros = 0
  let letras = 0
  let todo = []
  for (const element of param) {
    if (typeof element == 'number') {
      numeros = numeros + element
    } else {
      letras = letras + element.length
    }
  }

  return { numeros, letras }
}

const { numeros, letras } = averageWord(mixedElements)
console.log(numeros)
console.log(letras)
