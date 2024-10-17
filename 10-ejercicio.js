/* Ejercicio 10

Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let suma = 0
  let media = 0

  for (const element of param) {
    suma = suma + element
    media = suma / param.length
  }

  return media
}
let result = average(numbers)
console.log(result)
