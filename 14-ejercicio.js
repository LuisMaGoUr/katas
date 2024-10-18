/* Ejercicio 14

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
 */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

const result = {}

counterWords.forEach((value) => {
  result[value] = (result[value] || 0) + 1
})
console.log(result)
